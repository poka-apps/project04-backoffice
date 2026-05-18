import { useLocation as useLocationReactRouterDom } from 'react-router-dom';

export const useLocation = () => {

  const loc = useLocationReactRouterDom();

  const pathname = loc.pathname.toLowerCase();

  const isRoute = (...routes: string[]) =>
    routes
      ?.map(l => l.toLowerCase())
      .includes(pathname);

  return ({
    pathname,
    isRoute
  });

};
