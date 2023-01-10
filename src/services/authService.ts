import { Users } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as userRepository from '../repositories/userRepository.js';
import { conflictError } from '../utils/errorUtils.js';
import { IUserSignUp } from '../utils/userUtils.js';

export async function insertUser(user: IUserSignUp) {
  await organizeUser(user);
  return await userRepository.insertUser(user);
}

export async function findUserByEmail(email: string) {
  const userDb: Users = await userRepository.findUserByEmail(email);

  return userDb;
}

export async function userNotRegistered(email: string) {
  const userDb: Users = await findUserByEmail(email);

  if (userDb) {
    const msgError = 'Email is already in use please use another email!';
    throw conflictError(msgError);
  }
}

export async function userRegistered(email: string) {
  const userDb: Users = await findUserByEmail(email);

  if (!userDb) {
    const msgError = 'Invalid email or password!';
    throw conflictError(msgError);
  }
}

export async function getToken(user: Users) {
  const JWT_PASSWORD: string = process.env.JWT_KEY;
  const TIME: string = process.env.JWT_TIME;

  const token = jwt.sign(user, JWT_PASSWORD, { expiresIn: TIME });

  return token;
}

// export async function checkPassword(password: string, passwordDb: string) {
//   const passwordValidation: boolean = bcrypt.compareSync(
//     password,
//     passwordDb,
//   );

//   if(!passwordValidation) {
//     throw
//   }
// }

async function encryptPassword(password: string) {
  const digits: number = Number(process.env.PASSWORD_DIGIT_BCRYPT);
  const passwordHash = bcrypt.hashSync(password, digits);

  return passwordHash;
}

async function organizeUser(user: IUserSignUp) {
  user.password = await encryptPassword(user.password);
  delete user.confirmPassword;
}
