import * as statusRepository from '../repositories/statusRepository.js';

export async function getStatusByPersonageId(personageId: number) {
  return await statusRepository.getStatus(personageId);
}
