import 'express-session';

declare module 'express-session' {
  interface SessionData {
    user?: UserTemplate;
  }
}

export type  UserTemplate = {
  email: string;
  password: string;
  is_administrator: boolean;
};