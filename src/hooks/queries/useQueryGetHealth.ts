import { useQuery } from '@tanstack/react-query';
import { axios } from '@/config';

type TResponse = {
  environmentName: string;
  version: string;
};

export const useQueryGetHealth = () => {

  const { data, isLoading, error, refetch } = useQuery<TResponse>({
    queryKey: ['health'],
    queryFn: () => (
      axios
        .get<TResponse>('/health')
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
