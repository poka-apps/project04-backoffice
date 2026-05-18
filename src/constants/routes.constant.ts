import { buildUrl } from '@/functions';

export const ROUTES = {
  nomenclatures: {
    overview: {
      path: 'overview',
      route: () => buildUrl(ROUTES.nomenclatures.base, ROUTES.nomenclatures.overview.path)
    },
    equipments: {
      path: 'equipments',
      route: () => buildUrl(ROUTES.nomenclatures.base, ROUTES.nomenclatures.equipments.path)
    },
    brands: {
      path: 'brands',
      route: () => buildUrl(ROUTES.nomenclatures.base, ROUTES.nomenclatures.brands.path)
    },
    base: '/nomenclatures'
  },
  annonces: '/annonces',
  garages: '/garages',
  users: '/users',
  login: '/login',
  dashboard: '/',
  notFound: '*',
};
