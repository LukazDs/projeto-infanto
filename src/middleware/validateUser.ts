import { Request, Response, NextFunction } from 'express';
import { userSignupSchema } from '../schemas/authSchema.js';

export async function validateRegister(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const validation = userSignupSchema.validate(req.body);

  const errorMessage: string = validation.error
    ? validation.error.details[0].context.label
    : '';

  if (errorMessage) {
    return res.status(422).send(errorMessage);
  }

  next();
}
