import { lazy, Suspense } from 'react';
import { Loader } from '@/components';

const EquipmentsPage = lazy(() => import('./EquipmentsPage'));

export const LazyEquipmentsPage = () => (
  <Suspense fallback={<Loader />}>
    <EquipmentsPage />
  </Suspense>
);
