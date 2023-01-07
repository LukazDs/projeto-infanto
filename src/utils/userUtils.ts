import { Users } from '@prisma/client';

type TUser = Omit<Users, 'id'>;

export interface IUserSignUp extends TUser {
  confirmPassword: string;
}

//name
//imageUrl
//email
//password
//confirmPassword
