import type { IHasOptData, IHasTitle, IHasId, IHasType } from './has.interface';
import type { TNomenclatureType } from '@/types';

export interface INomenclature<TId = string, TData = any>
  extends
  IHasTitle,
  IHasId<TId>,
  IHasType<TNomenclatureType>,
  IHasOptData<TData> { }
  