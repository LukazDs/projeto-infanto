import { TPersonageNoId, TPersonageNoUserId } from '../utils/personageUtils.js';
import * as personageRepository from '../repositories/personageRepository.js';

export async function insertPersonage(
  personage: TPersonageNoUserId,
  userId: string,
) {
  const personageDefault: TPersonageNoId = await configurePersonage(
    personage,
    Number(userId),
  );

  await personageRepository.insertPersonage(personageDefault);
}

async function configurePersonage(
  personage: TPersonageNoUserId,
  userId: number,
) {
  const personageDefault: TPersonageNoId = { ...personage, userId };

  return personageDefault;
}
