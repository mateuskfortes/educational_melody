import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role?: string;
      accessToken?: string
    } & DefaultSession["user"];
    error?: string
  }

  interface User {
    id: string;
    role?: string;
    accessToken?: string
    expires_at?: number
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role?: string;
    accessToken?: string
    expires_at: number,
    error?: string
  }
}
