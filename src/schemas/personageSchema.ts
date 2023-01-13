import joi from 'joi';

export const personageBodySchema = joi.object({
  name: joi.string().min(2).required().label('Character with invalid name!'),
  age: joi
    .number()
    .min(1)
    .integer()
    .required()
    .label('Character with invalid age!'),
  player: joi
    .boolean()
    .default(true)
    .required()
    .label('Character with invalid player data!'),
  classification: joi
    .string()
    .equal('Mage', 'Warrior', 'Archer', 'Healer', 'Hunter'),
  imageUrl: joi.string().uri().required(),
});
