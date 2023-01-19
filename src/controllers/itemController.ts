import { Request, Response } from 'express';
import { TItem, TItemNoPersonageId } from '../utils/itemUtils.js';
import * as itemService from '../services/itemService.js';
import { checkPersonageId } from '../services/personageService.js';
import { Item } from '@prisma/client';

export async function insertItem(req: Request, res: Response) {
  const item: TItemNoPersonageId = req.body;
  const personageId: string = req.params.personageId;

  await checkPersonageId(Number(personageId));

  const itemDb: TItem = await itemService.insertItem(item, personageId);

  res.status(201).send(itemDb);
}

export async function getItems(req: Request, res: Response) {
  const personageId: number = Number(req.params.personageId);

  await checkPersonageId(personageId);

  const items: Item[] = await itemService.getItemsByPersonageId(personageId);

  res.status(200).send(items);
}
