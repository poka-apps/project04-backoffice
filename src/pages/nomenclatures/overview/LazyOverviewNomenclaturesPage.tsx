import { lazy, Suspense } from 'react';
import { Loader } from '@/components';

const OverviewNomenclaturesPage = lazy(() => import('./OverviewNomenclaturesPage'));

export const LazyOverviewNomenclaturesPage = () => (
  <Suspense fallback={<Loader />}>
    <OverviewNomenclaturesPage />
  </Suspense>
);
