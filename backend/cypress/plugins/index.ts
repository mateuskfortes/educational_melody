import argon2 from 'argon2';
import { prisma } from '../../src/lib/prisma';

export default function tasks(on: any, config: any) {
  on('task', {
    // Delete all accounts and users
    async 'db:clean'() {
      await prisma.account.deleteMany();
      await prisma.user.deleteMany();
      return null;
    },

    // Create a user only (do NOT create an account)
    async 'db:createUser'(payload: { username: string; email: string; password: string }) {
      const { username, email, password } = payload;
      const hashed = await argon2.hash(password);
      const user = await prisma.user.create({
        data: {
          name: username,
          email,
          password: hashed,
        },
      });

      // Return minimal user info to the test
      return {
        id: user.id,
        email: user.email,
        name: user.name,
      };
    },

    // Clean and then seed a user (convenience) — creates only the user
    async 'db:resetAndSeed'(payload: { username: string; email: string; password: string }) {
      await prisma.account.deleteMany();
      await prisma.user.deleteMany();

      const hashed = await argon2.hash(payload.password);
      const user = await prisma.user.create({
        data: {
          name: payload.username,
          email: payload.email,
          password: hashed,
        },
      });

      return { id: user.id, email: user.email, name: user.name };
    },
  });

  return config;
};