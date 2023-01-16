import { TSkill, TSkillNoPersonageId } from '../utils/skillUtils.js';
import * as skillRepository from '../repositories/skillRepository.js';
import { Skill } from '@prisma/client';
import { conflictError } from '../utils/errorUtils.js';

export async function insertSkill(
  skill: TSkillNoPersonageId,
  personageId: string,
) {
  const skillDefault: TSkill = await configureSkill(skill, Number(personageId));

  await skillRepository.insertSkill(skillDefault);
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

async function configureSkill(skill: TSkillNoPersonageId, personageId: number) {
  const skillDefault: TSkill = { ...skill, personageId };

  return skillDefault;
}
