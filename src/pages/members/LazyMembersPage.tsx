import { lazy, Suspense } from 'react';
import { Loader } from '@/components';

const MembersPage = lazy(() => import('./MembersPage'));

export const LazyMembersPage = () => (
  <Suspense fallback={<Loader />}>
    <MembersPage />
  </Suspense>
);
