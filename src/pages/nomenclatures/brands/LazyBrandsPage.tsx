import { lazy, Suspense } from 'react';
import { Loader } from '@/components';

const BrandsPage = lazy(() => import('./BrandsPage'));

export const LazyBrandsPage = () => (
  <Suspense fallback={<Loader />}>
    <BrandsPage />
  </Suspense>
);
