import { Request, Response } from 'express';

export async function insertUser(req: Request, res: Response) {
  const user = req.body;

  res.status(201).send(user);
}
