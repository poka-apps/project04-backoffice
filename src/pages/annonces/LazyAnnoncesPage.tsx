import { lazy, Suspense } from 'react';
import { Loader } from '@/components';

const AnnoncesPage = lazy(() => import('./AnnoncesPage'));

export const LazyAnnoncesPage = () => (
  <Suspense fallback={<Loader />}>
    <AnnoncesPage />
  </Suspense>
);
