import { Personages } from '@prisma/client';
import { Request, Response } from 'express';
import * as personageService from '../services/personageService.js';
import {
  TPersonageNoUserId,
  TPersonageNoUserIdWithId,
} from '../utils/personageUtils.js';

export async function insertPersonage(req: Request, res: Response) {
  const personage: TPersonageNoUserId = req.body;
  const userId: string = req.params.userId;

  await personageService.insertPersonage(personage, userId);

  res.sendStatus(201);
}

export async function getPersonagesByUserId(req: Request, res: Response) {
  const userId: string = req.params.userId;

  const personages: TPersonageNoUserIdWithId[] =
    await personageService.getPersonageByUserId(userId);

  res.status(200).send(personages);
}

export async function getPersonages(_req: Request, res: Response) {
  const personages: Personages[] = await personageService.getPersonages();

  res.status(200).send(personages);
}

export async function deletePersonage(req: Request, res: Response) {
  const userId: string = req.params.userId;
  const personageId: string = req.params.personageId;

  await personageService.deletePersonage(userId, personageId);

  res.status(201).send('Delete personage.');
}
