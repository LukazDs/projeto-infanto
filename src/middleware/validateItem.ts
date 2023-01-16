import { Request, Response, NextFunction } from 'express';
import { itemBodySchema } from '../schemas/itemSchema.js';

export async function validateRegister(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const validation = itemBodySchema.validate(req.body);

  const errorMessage: string = validation.error
    ? validation.error.details[0].context.label
    : '';

  if (validation.error) {
    return res.status(422).send(errorMessage);
  }

  next();
}
