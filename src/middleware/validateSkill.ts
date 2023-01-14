import { Request, Response, NextFunction } from 'express';
import { skillBodySchema } from '../schemas/skillSchema.js';

export async function validateRegister(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const validation = skillBodySchema.validate(req.body);

  const errorMessage: string = 'Enter an integer!';

  if (validation.error) {
    return res.status(422).send(errorMessage);
  }

  next();
}
