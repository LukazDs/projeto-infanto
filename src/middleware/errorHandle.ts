import { Request, Response, NextFunction } from 'express';
import {
  AppError,
  errorTypeToStatusCode,
  isAppError,
} from '../utils/errorUtils';

export async function errorHandle(
  _req: Request,
  res: Response,
  _next: NextFunction,
  err: Error | AppError,
) {
  console.log('Ops. Something went wrong', err);

  if (isAppError(err)) {
    const { message, type } = err;
    const statusCode = errorTypeToStatusCode(type);

    return res.status(statusCode).send(message);
  }

  return res.sendStatus(500);
}
