import { lazy, Suspense } from 'react';
import { Loader } from '@/components';

const LoginPage = lazy(() => import('./LoginPage'));

export const LazyLoginPage = () => (
  <Suspense fallback={<Loader className='my-20' />}>
    <LoginPage />
  </Suspense>
);
