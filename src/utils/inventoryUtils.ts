import { Item } from '@prisma/client';

export type TItem = Omit<Item, 'id'>;

export type TItemNoPersonageId = Omit<TItem, 'personageId'>;
