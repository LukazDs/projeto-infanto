import { Request, Response } from 'express';
import { itemBodySchema } from '../schemas/itemSchema.js';
import { TItemNoPersonageId } from '../utils/itemUtils.js';

export async function insertItem(req: Request, res: Response) {
  const item: TItemNoPersonageId = req.body;

  const validation = itemBodySchema.validate(item);

  res.status(201).send(validation);
}
