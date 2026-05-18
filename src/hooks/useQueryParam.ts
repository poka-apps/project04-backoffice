'use client';

import { useQueryParams, type TUpdateSearchParamsParams } from './useQueryParams';
import type { IHasName, IHasOptDefaultValue } from '@/interfaces';

type TParams<T = string> = IHasName & {
  options?: IHasOptDefaultValue<T> & {
    renderValue?: (value: any) => T;
  }
};

export const useQueryParam = <T = string>({ name, options }: TParams<T>) => {

  const { values: [value], setValue, deleteValue } = useQueryParams({ names: [name], defaultValue: { [name]: options?.defaultValue } });

  return ({
    setValue: (newValue?: T, options?: Pick<TUpdateSearchParamsParams, 'replaceInHistory'>) => setValue(name, newValue, options),
    value: (options?.renderValue?.(value) ?? value ?? options?.defaultValue) as T,
    deleteValue: (valueToDelete?: any) => deleteValue(name, valueToDelete)
  })

};
