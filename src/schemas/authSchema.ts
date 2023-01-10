import joi from 'joi';
import { IUserSignUp } from '../utils/userUtils';

export const userSignupSchema = joi.object<IUserSignUp>({
  name: joi.string().min(3).max(10).required().label('Provide a valid name!'),
  imageUrl: joi.string().uri().required().label('Provide a valid url!'),
  email: joi.string().email().required().label('Provide a valid email!'),
  password: joi
    .string()
    .length(8)
    .required()
    .label('Provide a valid password!'),
  confirmPassword: joi.ref('password'),
});

export const userLoginSchema = joi.object<IUserSignUp>({
  email: joi.string().email().required().label('Provide a valid email!'),
  password: joi
    .string()
    .length(8)
    .required()
    .label('Provide a valid password!'),
});
