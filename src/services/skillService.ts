import { TSkill, TSkillNoPersonageId } from '../utils/skillUtils.js';
import * as skillRepository from '../repositories/skillRepository.js';

export async function insertSkill(
  skill: TSkillNoPersonageId,
  personageId: string,
) {
  const skillDefault: TSkill = await configureSkill(skill, Number(personageId));

  await skillRepository.insertSkill(skillDefault);
}

async function configureSkill(skill: TSkillNoPersonageId, personageId: number) {
  const skillDefault: TSkill = { ...skill, personageId };

  return skillDefault;
}
