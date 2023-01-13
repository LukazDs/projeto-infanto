import {
  TPersonageNoId,
  TPersonageNoUserId,
  TPersonageNoUserIdWithId,
} from '../utils/personageUtils.js';
import * as personageRepository from '../repositories/personageRepository.js';
import { Personages } from '@prisma/client';

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
  const personages: Personages[] = await personageRepository.getPersonages();

  return personages;
}

async function configurePersonage(
  personage: TPersonageNoUserId,
  userId: number,
) {
  const personageDefault: TPersonageNoId = { ...personage, userId };

  return personageDefault;
}
