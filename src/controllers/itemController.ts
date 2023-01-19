import { Request, Response } from 'express';
import { TItem, TItemNoPersonageId } from '../utils/itemUtils.js';
import * as itemService from '../services/itemService.js';

export async function insertItem(req: Request, res: Response) {
  const item: TItemNoPersonageId = req.body;
  const personageId: string = req.params.personageId;

  const itemDb: TItem = await itemService.insertItem(item, personageId);

  res.status(201).send(itemDb);
}
