import { Request, Response } from 'express';
import { TItemNoPersonageId } from '../utils/itemUtils.js';

export async function insertItem(req: Request, res: Response) {
  const item: TItemNoPersonageId = req.body;

  res.status(201).send('ok');
}
