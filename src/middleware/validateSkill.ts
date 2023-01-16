import { Request, Response, NextFunction } from 'express';
import { skillBodySchema } from '../schemas/skillSchema.js';

export async function validateRegister(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const validation = skillBodySchema.validate(req.body);

  const errorMessage: string =
    'Enter an integer! If it is greater than or equal to -6 or less than or equal to 6!';

  if (validation.error) {
    return res.status(422).send(errorMessage);
  }

  next();
}
