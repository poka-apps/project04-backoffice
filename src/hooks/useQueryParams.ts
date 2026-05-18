'use client';

import { useNavigate, useSearchParams } from 'react-router-dom';
import type { IHasOptDefaultValue } from '@/interfaces';
import { useLocation } from './useLocation';

type TParams = IHasOptDefaultValue<Record<string, any>> & {
  names: string[];
};

export type TUpdateSearchParamsParams = {
  init?: string[][] | Record<string, string> | string | URLSearchParams;
  replaceInHistory?: boolean;
}

export const useQueryParams = (params?: TParams) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { names, defaultValue } = params ?? { names: [] };

  const updateSearchParams = (callback: (urlSearchParams: URLSearchParams) => URLSearchParams, options?: TUpdateSearchParamsParams) => {
    const urlSearchParams = callback(new URLSearchParams(options?.init ?? searchParams));
    let href = pathname;

    if (urlSearchParams.size !== 0) {
      href += `?${urlSearchParams}`;
    }

    if (options?.replaceInHistory) {
      navigate(href, { replace: true });
    } else {
      navigate(href);
    }
  };

  const setValue = (name: string, value: any, options?: Pick<TUpdateSearchParamsParams, 'replaceInHistory'>) =>
    updateSearchParams(
      l => {
        l.set(name, value);
        return l;
      },
      options
    );

  const deleteValue = (name: string, value?: string) =>
    updateSearchParams(
      l => {
        l.delete(name, value);
        return l;
      }
    );

  const setValues = (values: Record<string, any>) =>
    updateSearchParams(
      l => {
        Object
          .keys(values)
          .map(key => l.set(key, values[key]));

        return l;
      }
    );

  const appendValue = (name: string, value: any) =>
    updateSearchParams(
      l => {
        l.append(name, value);
        return l;
      }
    );

  const clearValues = () => {
    updateSearchParams(l => l, {});
  };

  const getValues = () => {
    const values = [];

    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      const nameValues = searchParams.getAll(name);
      let value = defaultValue?.[name];

      if (nameValues.length === 1) {
        value = nameValues[0];
      }
      else if (nameValues.length > 1) {
        value = nameValues;
      }

      values.push(value);
    }

    return values as (undefined | null | string)[];
  };

  return ({
    values: getValues(),
    updateSearchParams,
    searchParams,
    appendValue,
    deleteValue,
    clearValues,
    setValues,
    pathname,
    setValue,
    navigate
  });

};
