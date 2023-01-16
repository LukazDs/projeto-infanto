import { TypeItem } from '@prisma/client';
import joi from 'joi';
import { TItemNoPersonageId } from '../utils/itemUtils.js';

export const itemBodySchema = joi.object<TItemNoPersonageId>({
  name: joi.string().min(3).required().label('Invalid name!'),
  quantity: joi.number().min(1).required().label('Invalid quantity!'),
  type: joi
    .string()
    .equal(
      TypeItem.Food,
      TypeItem.Armature,
      TypeItem.Map,
      TypeItem.Others,
      TypeItem.Parchment,
      TypeItem.Potions,
      TypeItem.Shield,
      TypeItem.Weapon,
    )
    .required()
    .label('Type item invalid!'),
});
