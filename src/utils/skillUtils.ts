import { Skill } from '@prisma/client';

export type TSkill = Omit<Skill, 'id'>;
