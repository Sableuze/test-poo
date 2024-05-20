import { Pair } from '@/types/consts';

export type ChangeItem = {
  id: string;
  value: Pair;
  previous: Pair;
  at: Date;
};
