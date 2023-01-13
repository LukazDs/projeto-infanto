import { Request, Response } from 'express';
import { personageBodySchema } from '../schemas/personageSchema.js';

export async function insertPersonage(req: Request, res: Response) {
  const validation = personageBodySchema.validate(req.body);
  res.status(200).send(validation);
}
