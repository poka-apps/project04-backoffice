import type { IBrand, IHasItemType } from '@/interfaces';
import useSWR from 'swr';

type TResponse = IBrand[];

export const useQueryGetBrands = (params: IHasItemType) => {

  const { isLoading, error, mutate, data } = useSWR<TResponse>(`/brands?${new URLSearchParams(params as any)}`, { revalidateOnFocus: false });

  const refresh = () => mutate();

  return ({
    brands: data ?? [],
    isLoading,
    refresh,
    error
  });

};
