import { useQuery } from '@tanstack/react-query';
import { axios } from '@/config';
import type {
  IHasOptNickname,
  IHasOptLastname,
  IHasOptSortType,
  IHasOptAddress,
  IHasCreatedOn,
  IHasFirstname,
  IHasOptSortBy,
  IHasOptPhone,
  IHasOptEmail,
  IHasId,
} from '@/interfaces';

export type TUseQueryGetMembersResponse =
  IHasId &
  IHasFirstname &
  IHasOptLastname &
  IHasOptEmail &
  IHasOptNickname &
  IHasOptAddress &
  IHasOptPhone &
  IHasCreatedOn;

export const useQueryGetMembers = (params?: IHasOptSortBy & IHasOptSortType) => {

  const { data, isLoading, error, refetch } = useQuery<TUseQueryGetMembersResponse[]>({
    queryKey: ['members', params],
    queryFn: ({ queryKey: [_, _params] }) => (
      axios
        .get<TUseQueryGetMembersResponse[]>(`/members`, { params: _params })
        .then(l => l.data)
    ),
  });

  const refresh = () => refetch();

  return ({
    members: data ?? [],
    isLoading,
    refresh,
    error
  });

};