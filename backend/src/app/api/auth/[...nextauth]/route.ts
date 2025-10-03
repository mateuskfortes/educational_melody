import NextAuth, { Awaitable, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import argon2 from "argon2";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { getRefreshTokenByAccountId, refreshAccessToken } from "./services";
import crypto from "crypto";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  jwt: {
    maxAge: 5 * 60, // 5 minutes
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/login'
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
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

        // Gere tokens fictícios e tempo de expiração (exemplo: 1 hora)
        const refreshToken = crypto.randomUUID();
        const accessToken = crypto.randomUUID();
        const expiresAt = Math.floor(Date.now() / 1000) + 60 * 60; // 1 hora em segundos

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
    async jwt({ token, user, account, profile }) {
      // console.log('toke', JSON.stringify(token, null, 2))
      // console.log('use', JSON.stringify(user, null, 2))
      // console.log('profi', JSON.stringify(profile, null, 2))
      // console.log('acontiha', JSON.stringify(account, null, 2))
      // console.log('\nvai passa \n')
      if (account && user) {
        token.id = user.id;
        token.role = user.role;
        token.accessToken = account.access_token;
        token.expires_at = (account.expires_at ?? user.expires_at ?? 0) * 1000;
        token.refreshToken = account.refresh_token ?? await getRefreshTokenByAccountId(account.provider, profile?.sub ?? '');
        token.provider = account.provider
        return token;
      }

      // console.log('\n passou do if\n')

      // console.log('tempo', new Date(token.expires_at))

      // console.log('denhro do jwt', Date.now() < token.expires_at, token.expires_at)
      // console.log('denhro do jwt', Date.now() < token.expires_at, Date.now())

      // // Return previous token if the access token has not expired yet
      // console.log('o date la', Date.now() < token.expires_at)
      // if (Date.now() < token.expires_at) {
      //   return token
      // }

      // Access token has expired, try to update it
      // console.log('\n\n-------------\n\n', restore)
      return refreshAccessToken(token)
    },

    // Send data in the token to the frontend
    async session({ session, token }) {
      if (token && !token.error) {
        session.user.id = token.id
        session.user.accessToken = token.accessToken
        session.user.role = token.role
      }
      session.error = token.error
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
