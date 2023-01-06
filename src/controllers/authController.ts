import { Request, Response } from 'express';
import { IUserSignUp } from '../utils/userUtils.js';

export async function insertUser(req: Request, res: Response) {
  const user: IUserSignUp = req.body;

  res.status(201).send(user);
}
