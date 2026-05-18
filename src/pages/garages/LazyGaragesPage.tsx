import { lazy, Suspense } from 'react';
import { Loader } from '@/components';

const GaragesPage = lazy(() => import('./GaragesPage'));

export const LazyGaragesPage = () => (
  <Suspense fallback={<Loader />}>
    <GaragesPage />
  </Suspense>
);

