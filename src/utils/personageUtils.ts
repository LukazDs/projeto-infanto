import { Personages } from '@prisma/client';

export type TPersonageNoId = Omit<Personages, 'id'>;

export type TPersonageNoUserId = Omit<TPersonageNoId, 'userId'>;
