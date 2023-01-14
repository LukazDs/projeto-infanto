import joi from 'joi';
import { TSkill } from '../utils/skillUtils';

export const skillBodySchema = joi.object<TSkill>({
  force: joi.number().required(),
  resistance: joi.number().required(),
  perception: joi.number().required(),
  balance: joi.number().required(),
  precision: joi.number().required(),
  reflection: joi.number().required(),
  velocity: joi.number().required(),
  wisdom: joi.number().required(),
  intelligence: joi.number().required(),
  charisma: joi.number().required(),
  ruse: joi.number().required(),
  psychological: joi.number().required(),
  sensitivity: joi.number().required(),
  immunity: joi.number().required(),
  personageId: joi.number().required(),
});
