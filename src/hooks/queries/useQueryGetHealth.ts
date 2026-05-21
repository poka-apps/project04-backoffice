import { useQuery } from '@tanstack/react-query';
import { axios } from '@/config';

export type TUseQueryGetHealthResponse = {
  environmentName: string;
  version: string;
};

export const useQueryGetHealth = () => {

  const { data, isLoading, error, refetch } = useQuery<TUseQueryGetHealthResponse>({
    queryKey: ['health'],
    queryFn: () => (
      axios
        .get<TUseQueryGetHealthResponse>('/health')
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
