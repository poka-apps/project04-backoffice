import type { IPaginatedData } from '@/interfaces';

export const DEFAULT_PAGINATED_DATA = {
  pageSize: 15,
  data: [],
  total: 0,
  page: 1
} as IPaginatedData;

export const EMPTY_STRING = '';
