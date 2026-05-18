import type { IHasName } from '@/interfaces';
import { dayjs } from '@/config';
import useSWR from 'swr';

type TResponse = {
  database: {
    lastMigration: IHasName & {
      appliedAt: Date;
    };
    status: 'success';
  };
  environment: string;
  version: string;
  lang: string;
  date: Date;
};

export const useQueryGetInfo = () => {

  const { isLoading, error, mutate, data } = useSWR<TResponse>('/info');

  let info = data;

  if (info?.database?.lastMigration?.appliedAt) {
    info.database.lastMigration.appliedAt = dayjs(info.database.lastMigration.appliedAt).toDate();
  }

  if (info?.date) {
    info.date = dayjs(info.date).toDate();
  }

  const refresh = () => mutate();

  return ({
    isLoading,
    refresh,
    error,
    info
  });

};
