import type { IHasOptPage, IHasOptSortBy, IHasOptSortType } from './has.interface';

export interface IPaginable extends IHasOptPage, IHasOptSortType, IHasOptSortBy {
  pageSize?: number;
}
