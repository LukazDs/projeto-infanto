///cadastrar usuario

import { Users } from '@prisma/client';
import { prisma } from '../config/database.js';
import { IUserSignUp } from '../utils/userUtils.js';

export async function insertUser(user: IUserSignUp) {
  const userDb: Users = await prisma.users.create({ data: user });

  return userDb;
}
