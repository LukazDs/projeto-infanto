import {
  TPersonageNoId,
  TPersonageNoUserId,
  TPersonageNoUserIdWithId,
} from '../utils/personageUtils.js';
import * as personageRepository from '../repositories/personageRepository.js';
import { Personage } from '@prisma/client';
import { notFoundError } from '../utils/errorUtils.js';

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

export async function getPersonageByUserId(userId: string) {
  const personages: TPersonageNoUserIdWithId[] =
    await personageRepository.getPersonagesByUserId(Number(userId));

  return personages;
}

export async function getPersonages() {
  const personages: Personage[] = await personageRepository.getPersonages();

  return personages;
}

export async function deletePersonage(userId: string, personageId: string) {
  await personageRepository.deletePersonage(
    Number(userId),
    Number(personageId),
  );
}

export async function checkPersonageId(id: number) {
  const personage: Personage = await personageRepository.getPersonageById(
    Number(id),
  );

  if (!personage) {
    const msg: string = 'Personage not found!';

    throw notFoundError(msg);
  }
}

async function configurePersonage(
  personage: TPersonageNoUserId,
  userId: number,
) {
  const personageDefault: TPersonageNoId = { ...personage, userId };

  return personageDefault;
}
