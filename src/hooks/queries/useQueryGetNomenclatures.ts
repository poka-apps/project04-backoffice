import type { INomenclature, IHasType } from '@/interfaces';
import type { TNomenclatureType } from '@/types';
import useSWR from 'swr';

type TResponse<TId = string, TData = any> = INomenclature<TId, TData>[];

export const useQueryGetNomenclatures = <TId = string, TData = any>(params: IHasType<TNomenclatureType>) => {

  const { isLoading, error, mutate, data } = useSWR<TResponse<TId, TData>>(`/nomenclatures?${new URLSearchParams(params as any)}`, { revalidateOnFocus: false });

  const refresh = () => mutate();

  return ({
    nomenclatures: data ?? [],
    isLoading,
    refresh,
    error
  });

};
