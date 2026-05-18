import { lazy, Suspense } from 'react';
import { Loader } from '@/components';

const NotFoundPage = lazy(() => import('./NotFoundPage'));

export const LazyNotFoundPage = () => (
  <Suspense fallback={<Loader />}>
    <NotFoundPage />
  </Suspense>
);
