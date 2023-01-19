import { Request, Response } from 'express';
import { checkPersonageId } from '../services/personageService.js';
import * as statusService from '../services/statusService.js';

export async function getStatus(req: Request, res: Response) {
  const personageId: number = Number(req.params.personageId);

  await checkPersonageId(personageId);

  const statusDb = await statusService.getStatusByPersonageId(personageId);

  res.status(200).send(statusDb);
}
