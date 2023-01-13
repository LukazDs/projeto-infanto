import { Request, Response } from 'express';
import * as personageService from '../services/personageService.js';
import { TPersonageNoUserId } from '../utils/personageUtils.js';

export async function insertPersonage(req: Request, res: Response) {
  const personage: TPersonageNoUserId = req.body;
  const userId: string = req.params.userId;

  await personageService.insertPersonage(personage, userId);

  res.sendStatus(201);
}
