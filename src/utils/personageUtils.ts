import { Personage } from '@prisma/client';

export type TPersonageNoId = Omit<Personage, 'id'>;

export type TPersonageNoUserId = Omit<TPersonageNoId, 'userId'>;

export type TPersonageNoUserIdWithId = Omit<Personage, 'userId'>;
