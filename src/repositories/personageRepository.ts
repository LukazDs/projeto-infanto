import { prisma } from '../config/database.js';
import { TPersonageNoId } from '../utils/personageUtils.js';

export async function insertPersonage(personage: TPersonageNoId) {
  await prisma.personages.create({ data: personage });
}
