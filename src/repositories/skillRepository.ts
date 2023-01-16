import { prisma } from '../config/database.js';
import { TSkill } from '../utils/skillUtils';

export async function insertSkill(skill: TSkill) {
  await prisma.skill.create({ data: skill });
}

export async function getSkillByPersonageId(personageId: number) {
  return await prisma.skill.findMany({ where: { personageId } });
}
