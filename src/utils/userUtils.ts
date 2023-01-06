import { Users } from '@prisma/client';

type IUser = Omit<Users, 'id'>;

export interface IUserSignUp extends IUser {
  confirmPassword: string;
}

//name
//imageUrl
//email
//password
//confirmPassword
