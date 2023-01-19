import { prisma } from '../config/database.js';
import { TItem } from '../utils/itemUtils.js';

export async function insertItem(item: TItem) {
  return await prisma.item.create({
    data: item,
  });
}

export async function getItems(personageId: number) {
  return await prisma.item.findMany({
    where: { personageId },
  });
}

export async function deleteItemById(id: number) {
  return await prisma.item.delete({ where: { id } });
}
