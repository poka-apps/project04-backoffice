import { ROUTES } from '@/constants';
import { useLocation as useLocationReactRouterDom } from 'react-router-dom';

export const useLocation = () => {

  const loc = useLocationReactRouterDom();

  const pathname = loc.pathname.toLowerCase();

  const isRoute = (...routes: string[]) =>
    routes
      ?.map(l => l.toLowerCase())
      .includes(pathname);

  const getCurrentRoute = () => {

    if (isRoute(ROUTES.dashboard)) {
      return ({
        menu: 'Tableau de bord',
        route: pathname
      });
    }
    else if (isRoute(ROUTES.members)) {
      return ({
        menu: 'Membres',
        module: 'Gestion des membres',
        route: pathname
      });
    }
    else {
      return ({});
    }

  };

  return ({
    getCurrentRoute,
    pathname,
    isRoute
  });

};
