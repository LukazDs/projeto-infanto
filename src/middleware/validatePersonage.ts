import { Request, Response, NextFunction } from 'express';
import { personageBodySchema } from '../schemas/personageSchema.js';

export async function validateRegister(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const validation = personageBodySchema.validate(req.body);

  const errorMessage: string = validation.error
    ? validation.error.details[0].context.label
    : '';

  if (errorMessage) {
    return res.status(422).send(errorMessage);
  }

  next();
}
