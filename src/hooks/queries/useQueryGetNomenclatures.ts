import type { INomenclature, IHasType } from '@/interfaces';
import type { TNomenclatureType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { axios } from '@/config';

export type TUseQueryGetNomenclaturesResponse<TId = string, TData = any> = INomenclature<TId, TData>[];

export const useQueryGetNomenclatures = <TId = string, TData = any>(params: IHasType<TNomenclatureType>) => {

  const { data, isLoading, error, refetch } = useQuery<TUseQueryGetNomenclaturesResponse<TId, TData>>({
    queryKey: ['nomenclatures', params.type],
    queryFn: ({ queryKey: [, type] }) => (
      axios
        .get<TUseQueryGetNomenclaturesResponse<TId, TData>>(`/nomenclatures/${type}`)
        .then(l => l.data)
    ),
  });

  const refresh = () => refetch();

  return ({
    isLoading,
    refresh,
    error,
    data
  });

};