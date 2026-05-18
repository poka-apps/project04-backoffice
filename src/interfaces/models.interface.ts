import type { IHasOptData, IHasOptDisabled, IHasOptGroup, IHasOptValue, IHasTitle, IHasId, IHasType } from './has.interface';
import type { TNomenclatureType } from '@/types';

export interface INomenclature<TId = string, TData = any> extends IHasTitle, IHasId<TId>, IHasType<TNomenclatureType>, IHasOptData<TData> {
}

export interface IBrand extends IHasTitle, IHasId {
}

export interface ISelectOption<TData = any, TValue = string | string[]>
  extends
  IHasTitle,
  IHasOptDisabled,
  IHasOptData<TData>,
  IHasOptGroup<string>,
  IHasOptValue<TValue> { }
