import joi from 'joi';
import { TSkillNoPersonageId } from '../utils/skillUtils';

export const skillBodySchema = joi.object<TSkillNoPersonageId>({
  force: joi.number(),
  resistance: joi.number(),
  perception: joi.number(),
  balance: joi.number(),
  precision: joi.number(),
  reflection: joi.number(),
  velocity: joi.number(),
  wisdom: joi.number(),
  intelligence: joi.number(),
  charisma: joi.number(),
  ruse: joi.number(),
  psychological: joi.number(),
  sensitivity: joi.number(),
  immunity: joi.number(),
});
