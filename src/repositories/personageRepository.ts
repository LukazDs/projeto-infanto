import { prisma } from '../config/database.js';
import { TPersonageNoId } from '../utils/personageUtils.js';

export async function insertPersonage(personage: TPersonageNoId) {
  await prisma.personage.create({ data: personage });
}

export async function getPersonageById(id: number) {
  return await prisma.personage.findUnique({ where: { id } });
}

export async function getPersonagesByUserId(userId: number) {
  return await prisma.personage.findMany({
    where: { userId },
    select: {
      userId: false,
      id: true,
      player: true,
      name: true,
      age: true,
      imageUrl: true,
      classification: true,
      bibliography: true,
      race: true,
      specie: true,
      money: true,
    },
    orderBy: {
      id: 'desc',
    },
    take: 10,
  });
}

export async function getPersonages() {
  return await prisma.personage.findMany();
}

export async function deletePersonage(userId: number, id: number) {
  await prisma.personage.deleteMany({ where: { userId, id } });
}
