import type {
  IHasOptData,
  IHasOptDisabled,
  IHasOptGroup,
  IHasOptValue,
  IHasTitle,
} from './has.interface';

export interface ISelectOption<TData = any, TValue = string | string[]>
  extends
  IHasTitle,
  IHasOptDisabled,
  IHasOptData<TData>,
  IHasOptGroup<string>,
  IHasOptValue<TValue> { }
