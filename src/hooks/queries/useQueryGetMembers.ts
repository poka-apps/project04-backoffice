import { useQuery } from '@tanstack/react-query';
import { axios } from '@/config';
import type {
  IHasOptNickname,
  IHasOptLastname,
  IHasOptAddress,
  IHasCreatedOn,
  IHasFirstname,
  IHasOptPhone,
  IHasId,
} from '@/interfaces';

export type TUseQueryGetMembersResponse =
  IHasId &
  IHasFirstname &
  IHasOptLastname &
  IHasOptNickname &
  IHasOptAddress &
  IHasOptPhone &
  IHasCreatedOn;

export const useQueryGetMembers = () => {

  const { data, isLoading, error, refetch } = useQuery<TUseQueryGetMembersResponse[]>({
    queryKey: ['members'],
    queryFn: ({ queryKey: [_] }) => (
      axios
        .get<TUseQueryGetMembersResponse[]>(`/members`)
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