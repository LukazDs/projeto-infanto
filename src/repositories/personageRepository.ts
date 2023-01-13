import { prisma } from '../config/database.js';
import { TPersonageNoId } from '../utils/personageUtils.js';

export async function insertPersonage(personage: TPersonageNoId) {
  await prisma.personages.create({ data: personage });
}

export async function getPersonagesByUserId(userId: number) {
  return await prisma.personages.findMany({
    where: { userId },
    select: {
      userId: false,
      id: true,
      player: true,
      name: true,
      age: true,
      imageUrl: true,
      classification: true,
    },
    orderBy: {
      id: 'desc',
    },
    take: 10,
  });
}
