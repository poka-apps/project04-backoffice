import type { IHasBrandId, IHasItemType } from '@/interfaces';
import useSWR from 'swr';

type TResponse = string[];

export const useQueryGetBrandModels = ({ brandId, ...params }: IHasItemType & IHasBrandId) => {

  const { isLoading, error, mutate, data } = useSWR<TResponse>(`/brands/${brandId}/models?${new URLSearchParams(params as any)}`, { revalidateOnFocus: false });

  const refresh = () => mutate();

  return ({
    models: data ?? [],
    isLoading,
    refresh,
    error
  });

};
