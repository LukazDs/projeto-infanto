import { Users } from '@prisma/client';

type TUser = Omit<Users, 'id'>;

export interface IUserSignUp extends TUser {
  confirmPassword: string;
}

export type TUserLogin = Omit<TUser, keyof { imageUrl: string; name: string }>;

type TUserNoPassword = Omit<TUser, 'password'>;

export interface IUserWithToken extends TUserNoPassword {
  token: string;
}
