import { lazy, Suspense } from 'react';
import { Loader } from '@/components';

const UsersPage = lazy(() => import('./UsersPage'));

export const LazyUsersPage = () => (
  <Suspense fallback={<Loader />}>
    <UsersPage />
  </Suspense>
);
