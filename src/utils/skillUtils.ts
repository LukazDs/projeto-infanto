import { Skill } from '@prisma/client';

export type TSkill = Omit<Skill, 'id'>;

export type TSkillNoPersonageId = Omit<TSkill, 'personageId'>;
