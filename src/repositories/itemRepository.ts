import { Item } from '@prisma/client';
import { prisma } from '../config/database.js';
import { TItem } from '../utils/itemUtils.js';

export async function insertItem(item: TItem) {
  const itemDb: Item = await prisma.item.create({
    data: item,
  });

  return itemDb;
}
