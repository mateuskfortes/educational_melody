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
    async 'db:createUser'(payload: {
      username?: string;
      email?: string;
      password?: string;
      isAdministrator?: boolean
    }) {
      const { username, email, password, isAdministrator } = payload;
      const hashed = await argon2.hash(password || '');
      const user = await prisma.user.create({
        data: {
          name: username,
          email,
          password: hashed,
          role: isAdministrator ? 'ADMIN' : 'USER',
        },
      });

      // Return minimal user info to the test
      return {
        id: user.id,
        email: user.email,
        name: user.name,
      };
    },
  });

  return config;
};