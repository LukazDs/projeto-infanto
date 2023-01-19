///cadastrar usuario

import { User } from '@prisma/client';
import { prisma } from '../config/database.js';
import { IUserSignUp } from '../utils/userUtils.js';

export async function insertUser(user: IUserSignUp) {
  const userDb: User = await prisma.user.create({ data: user });

  return userDb;
}

export async function findUserByEmail(email: string) {
  const userDb: User = await prisma.user.findUnique({ where: { email } });

  return userDb;
}
