import { Request, Response } from 'express';
import { IUserSignUp, TUserLogin } from '../utils/userUtils.js';
import * as authService from '../services/authService.js';

export async function insertUser(req: Request, res: Response) {
  const user: IUserSignUp = req.body;

  await authService.userNotRegistered(user.email);

  await authService.insertUser(user);

  res.sendStatus(201);
}

export async function loginUser(req: Request, res: Response) {
  const user: TUserLogin = req.body;

  await authService.userRegistered(user.email);
  await authService.checkPasswordByEmail(user.password, user.email);

  res.status(200).send('OK');
}
