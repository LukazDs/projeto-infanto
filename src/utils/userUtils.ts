import { Users } from '@prisma/client';

type TUser = Omit<Users, 'id'>;

export interface IUserSignUp extends TUser {
  confirmPassword: string;
}

export type TUserLogin = Omit<TUser, keyof { imageURL: string; name: string }>;
