import * as statusRepository from '../repositories/statusRepository.js';

export async function getStatusByPersonageId(personageId: number) {
  const statusDb: any = await statusRepository.getStatus(personageId);

  return statusDb;
}
