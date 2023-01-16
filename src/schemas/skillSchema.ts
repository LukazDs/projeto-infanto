import joi from 'joi';
import { TSkillNoPersonageId } from '../utils/skillUtils';

export const skillBodySchema = joi.object<TSkillNoPersonageId>({
  force: joi.number().integer().max(6).min(-6),
  resistance: joi.number().max(6).min(-6),
  perception: joi.number().max(6).min(-6),
  balance: joi.number().max(6).min(-6),
  precision: joi.number().max(6).min(-6),
  reflection: joi.number().max(6).min(-6),
  velocity: joi.number().max(6).min(-6),
  wisdom: joi.number().max(6).min(-6),
  intelligence: joi.number().max(6).min(-6),
  charisma: joi.number().max(6).min(-6),
  ruse: joi.number().max(6).min(-6),
  psychological: joi.number().max(6).min(-6),
  sensitivity: joi.number().max(6).min(-6),
  immunity: joi.number().max(6).min(-6),
});
