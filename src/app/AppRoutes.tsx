import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthLayout, MainLayout } from '@/layouts';
import { ROUTES } from '@/constants';
import {
  LazyOverviewNomenclaturesPage,
  LazyEquipmentsPage,
  LazyDashboardPage,
  LazyNotFoundPage,
  LazyBrandsPage,
  LazyLoginPage,
  LazyUsersPage,
} from '@/pages';

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      {/* App with layout */}
      <Route element={<MainLayout />}>
        <Route index element={<LazyDashboardPage />} />
        {/* #region nomenclatures */}
        <Route path={ROUTES.nomenclatures.base}>
          <Route index element={<LazyOverviewNomenclaturesPage />} />
          <Route path={ROUTES.nomenclatures.overview.path} element={<LazyOverviewNomenclaturesPage />} />
          <Route path={ROUTES.nomenclatures.equipments.path} element={<LazyEquipmentsPage />} />
          <Route path={ROUTES.nomenclatures.brands.path} element={<LazyBrandsPage />} />
        </Route>
        {/* #endregion */}
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
