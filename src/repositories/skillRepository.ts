import { prisma } from '../config/database.js';
import { TSkill, TSkillNoPersonageId } from '../utils/skillUtils';

export async function insertSkill(skill: TSkill) {
  await prisma.skill.create({ data: skill });
}

export async function getSkillByPersonageId(personageId: number) {
  return await prisma.skill.findMany({ where: { personageId } });
}

export async function updateSkill(skill: TSkillNoPersonageId, id: number) {
  await prisma.skill.updateMany({ where: { id }, data: skill });
}

export async function getSkillById(id: number) {
  return await prisma.skill.findMany({ where: { id } });
}
