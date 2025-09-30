// types/next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      username: string;
      email: string;
      is_administrator: boolean;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: number;
    username: string;
    is_administrator: boolean;
  }
}
