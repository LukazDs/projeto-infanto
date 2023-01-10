import { Request, Response } from 'express';
import { IUserSignUp } from '../utils/userUtils.js';
import * as authService from '../services/authService.js';

export async function insertUser(req: Request, res: Response) {
  const user: IUserSignUp = req.body;

  await authService.userNotRegistered(user.email);

  await authService.insertUser(user);

  res.sendStatus(201);
}

export async function loginUser(req: Request, res: Response) {
  ///checar pelo email e password

  res.status(200).send('OK');
}
