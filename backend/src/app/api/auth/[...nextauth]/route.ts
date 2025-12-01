import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import argon2 from "argon2";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { refreshAccessToken } from "./services";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  jwt: {
    maxAge: parseInt(process.env.JWT_MAX_AGE || "300"),
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      /*
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
      */
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "E-mail", type: "text" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user || !user.password) return null;

        const valid = await argon2.verify(user.password, credentials.password);
        if (!valid) return null;

        const refreshToken = crypto.randomUUID();
        const accessToken = crypto.randomUUID();
        const expiresAt =
          Math.floor(Date.now() / 1000) +
          parseInt(process.env.CREDENTIALS_ACCESS_TOKEN_MAX_AGE ?? "3600");

        await prisma.account.upsert({
          where: {
            provider_providerAccountId: {
              provider: "credentials",
              providerAccountId: user.id,
            },
          },
          update: {
            refresh_token: refreshToken,
            access_token: accessToken,
            expires_at: expiresAt,
          },
          create: {
            userId: user.id,
            provider: "credentials",
            providerAccountId: user.id,
            type: "credentials",
            refresh_token: refreshToken,
            access_token: accessToken,
            expires_at: expiresAt,
          },
        });

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          refreshToken,
          accessToken,
          expires_at: expiresAt,
        };
      },
    }),
  ],
  callbacks: {
    // https://next-auth.js.org/configuration/callbacks#jwt-callback
    // Create token
    async jwt({ token, user, account }) {
      if (account && user) {
        token.id = user.id;
        token.role = user.role;
        token.accessToken = account.access_token;
        token.expires_at = (account.expires_at ?? user.expires_at ?? 0) * 1000;
        token.provider = account.provider;
        return token;
      }

      if (Date.now() < token.expires_at) {
        return token;
      }

      return refreshAccessToken(token);
    },

    // Send data in the token to the frontend
    async session({ session, token }) {
      if (token && !token.error) {
        session.user.id = token.id;
        session.user.accessToken = token.accessToken;
        session.user.role = token.role;
      }
      session.error = token.error;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
