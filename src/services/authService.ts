import { Users } from '@prisma/client';
import bcrypt from 'bcrypt';
import * as userRepository from '../repositories/userRepository.js';
import { conflictError } from '../utils/errorUtils.js';
import { IUserSignUp } from '../utils/userUtils.js';

export async function insertUser(user: IUserSignUp) {
  await organizeUser(user);
  return await userRepository.insertUser(user);
}

export async function findUserByEmail(email: string) {
  const userDb: Users = await userRepository.findUserByEmail(email);

  if (userDb) {
    const msgError = 'Email is already in use please use another email';
    throw conflictError(msgError);
  }
}

async function organizeUser(user: IUserSignUp) {
  user.password = await encryptPassword(user.password);
  delete user.confirmPassword;
}

async function encryptPassword(password: string) {
  const digits: number = Number(process.env.PASSWORD_DIGIT_BCRYPT);
  const passwordHash = bcrypt.hashSync(password, digits);

  return passwordHash;
}
