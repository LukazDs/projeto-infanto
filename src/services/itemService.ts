import { Item } from '@prisma/client';
import * as itemRepository from '../repositories/itemRepository.js';
import { notFoundError } from '../utils/errorUtils.js';
import { TItem, TItemNoPersonageId } from '../utils/itemUtils.js';

export async function insertItem(
  item: TItemNoPersonageId,
  personageId: string,
) {
  const itemDb: TItem = await itemRepository.insertItem({
    ...item,
    personageId: Number(personageId),
  });

  return itemDb;
}

export async function getItemsByPersonageId(personageId: number) {
  const itemDb: Item[] = await itemRepository.getItems(personageId);

  return itemDb;
}

export async function deleteItemById(id: number) {
  const itemDb: Item = await itemRepository.deleteItemById(id);

  return itemDb;
}

export async function checkItemById(id: number) {
  const itemDb: Item = await itemRepository.getItemById(id);

  if (!itemDb) {
    throw notFoundError('Item not found!');
  }
}
