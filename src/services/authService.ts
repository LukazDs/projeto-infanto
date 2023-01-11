import { Users } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as userRepository from '../repositories/userRepository.js';
import { conflictError, unauthorizedError } from '../utils/errorUtils.js';
import { IUserSignUp, IUserWithToken } from '../utils/userUtils.js';

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
  const msgError = 'Invalid email or password!';
  await printErrorLogin(!userDb, msgError);
}

export async function checkPasswordByEmail(password: string, email: string) {
  const userDb: Users = await userRepository.findUserByEmail(email);

  const passwordValidation: boolean = bcrypt.compareSync(
    password,
    userDb.password,
  );

  const msgError = 'Invalid email or password!';
  await printErrorLogin(!passwordValidation, msgError);
}

export async function createUserWithTokenByEmail(email: string) {
  const userDb: Users = await userRepository.findUserByEmail(email);

  await deletePassword(userDb);

  const token: string = await getToken(userDb);
  const userDefault: IUserWithToken = { ...userDb, token };

  return userDefault;
}

async function getToken(user: Users) {
  const JWT_PASSWORD: string = process.env.JWT_KEY;
  const TIME: string = process.env.JWT_TIME;

  const token = jwt.sign(user, JWT_PASSWORD, { expiresIn: TIME });

  return token;
}

async function encryptPassword(password: string) {
  const digits: number = Number(process.env.PASSWORD_DIGIT_BCRYPT);
  const passwordHash = bcrypt.hashSync(password, digits);

  return passwordHash;
}

async function organizeUser(user: IUserSignUp) {
  user.password = await encryptPassword(user.password);
  delete user.confirmPassword;
}

async function printErrorLogin(validation: boolean, msgError: string) {
  if (validation) {
    throw unauthorizedError(msgError);
  }
}

async function deletePassword(user: Users) {
  delete user.password;
}
