import type { INomenclature, IHasType } from '@/interfaces';
import type { TNomenclatureType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { axios } from '@/config';

type TResponse<TId = string, TData = any> = INomenclature<TId, TData>[];

export const useQueryGetNomenclatures = <TId = string, TData = any>(params: IHasType<TNomenclatureType>) => {

  const { data, isLoading, error, refetch } = useQuery<TResponse<TId, TData>>({
    queryKey: ['nomenclatures', params.type],
    queryFn: ({ queryKey: [, type] }) => (
      axios
        .get<TResponse<TId, TData>>(`/nomenclatures/${type}`)
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