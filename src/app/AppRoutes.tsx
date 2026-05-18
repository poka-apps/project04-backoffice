import { LazyDashboardPage, LazyNotFoundPage, LazyLoginPage, LazyUsersPage } from '@/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthLayout, MainLayout } from '@/layouts';
import { ROUTES } from '@/constants';

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      {/* App with layout */}
      <Route element={<MainLayout />}>
        <Route index element={<LazyDashboardPage />} />
        <Route path={ROUTES.users} element={<LazyUsersPage />} />
      </Route>
      {/* Auth without layout principal */}
      <Route element={<AuthLayout />}>
        <Route path={ROUTES.login} element={<LazyLoginPage />} />
      </Route>
      {/* 404 */}
      <Route path={ROUTES.notFound} element={<LazyNotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
