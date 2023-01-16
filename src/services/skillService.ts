import { TSkill, TSkillNoPersonageId } from '../utils/skillUtils.js';
import * as skillRepository from '../repositories/skillRepository.js';
import { Skill } from '@prisma/client';
import { conflictError, notFoundError } from '../utils/errorUtils.js';

export async function insertSkill(
  skill: TSkillNoPersonageId,
  personageId: string,
) {
  const skillDefault: TSkill = await configureSkill(skill, Number(personageId));

  await skillRepository.insertSkill(skillDefault);
}

export async function getSkillByPersonageId(personageId: string) {
  const skills: Skill[] = await skillRepository.getSkillByPersonageId(
    Number(personageId),
  );

  return skills[0];
}

export async function checkSkillByPersonageId(personageId: string) {
  const skills: Skill[] = await skillRepository.getSkillByPersonageId(
    Number(personageId),
  );

  if (skills.length) {
    throw conflictError(
      'You cannot register more than one skill per character!',
    );
  }
}

export async function checkSkillById(id: string) {
  const skills: Skill[] = await skillRepository.getSkillById(Number(id));

  if (!skills.length) {
    throw notFoundError('Skill not found!');
  }
}
async function configureSkill(skill: TSkillNoPersonageId, personageId: number) {
  const skillDefault: TSkill = { ...skill, personageId };

  return skillDefault;
}

export async function updateSkill(skill: TSkillNoPersonageId, id: string) {
  await skillRepository.updateSkill(skill, Number(id));
}
