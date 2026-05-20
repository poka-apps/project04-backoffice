import type { TItemType, TSortType } from '@/types';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import type { IBrand } from './models.interface';

export interface IHasOptPassword<T = string> {
  password?: T;
}

export interface IHasPassword<T = string> {
  password: T;
}

export interface IHasOptEmail<T = string> {
  email?: T;
}

export interface IHasEmail<T = string> {
  email: T;
}

export interface IHasOptOpen {
  open?: boolean;
}

export interface IHasOpen {
  open: boolean;
}

export interface IHasOptName<T = string> {
  name?: T;
}

export interface IHasName<T = string> {
  name: T;
}

export interface IHasOptModule<T = string> {
  module?: T;
}

export interface IHasModule<T = string> {
  module: T;
}

export interface IHasOptPlan<T = string> {
  plan?: T;
}

export interface IHasPlan<T = string> {
  plan: T;
}

export interface IHasOptUrl<T = string> {
  url?: T;
}

export interface IHasUrl<T = string> {
  url: T;
}

export interface IHasOptIcon<T = LucideIcon> {
  icon?: T;
}

export interface IHasIcon<T = LucideIcon> {
  icon: T;
}

export interface IHasOptClassName<T = string> {
  className?: T;
}

export interface IHasClassName<T = string> {
  className: T;
}

export interface IHasOptData<T = any> {
  data?: T;
}

export interface IHasData<T = any> {
  data: T;
}

export interface IHasOptTotal<T = number> {
  total?: T;
}

export interface IHasTotal<T = number> {
  total: T;
}

export interface IHasOptPage<T = number> {
  page?: T;
}

export interface IHasPage<T = number> {
  page: T;
}

export interface IHasOptSortType<T = TSortType> {
  sortType?: T;
}

export interface IHasSortType<T = TSortType> {
  sortType: T;
}

export interface IHasOptSortBy<T = string> {
  sortBy?: T;
}

export interface IHasSortBy<T = string> {
  sortBy: T;
}

export interface IHasOptDefaultValue<T = any> {
  defaultValue?: T;
}

export interface IHasDefaultValue<T = any> {
  defaultValue: T;
}

export interface IHasOptValue<T = any> {
  value?: T;
}

export interface IHasValue<T = any> {
  value: T;
}

export interface IHasOptRequired<T = boolean> {
  required?: T;
}

export interface IHasRequired<T = boolean> {
  required: T;
}

export interface IHasOptGroup<T = ReactNode> {
  group?: T;
}

export interface IHasGroup<T = ReactNode> {
  group: T;
}

export interface IHasOptTitle<T = ReactNode> {
  title?: T;
}

export interface IHasTitle<T = ReactNode> {
  title: T;
}

export interface IHasOptDisabled {
  disabled?: boolean;
}

export interface IHasDisabled {
  disabled: boolean;
}

export interface IHasOptId<T = string> {
  id?: T;
}

export interface IHasId<T = string> {
  id: T;
}

export interface IHasOptCreatedOn<T = Date> {
  createdOn?: T;
}

export interface IHasCreatedOn<T = Date> {
  createdOn: T;
}

export interface IHasOptUpdatedAt<T = Date> {
  updatedAt?: T;
}

export interface IHasUpdatedAt<T = Date> {
  updatedAt: T;
}

export interface IHasOptDate<T = Date> {
  date?: T;
}

export interface IHasDate<T = Date> {
  date: T;
}

export interface IHasOptItemType<T = TItemType> {
  itemType?: T;
}

export interface IHasItemType<T = TItemType> {
  itemType: T;
}

export interface IHasOptBrandId<T = string> {
  brandId?: T;
}

export interface IHasBrandId<T = string> {
  brandId: T;
}

export interface IHasOptBrands<T = IBrand> {
  brands?: T[];
}

export interface IHasBrands<T = IBrand> {
  brands: T[];
}

export interface IHasOptType<T = string> {
  type?: T;
}

export interface IHasType<T = string> {
  type: T;
}

export interface IHasOptText<T = string> {
  text?: T;
}

export interface IHasText<T = string> {
  text: T;
}

export interface IHasOptItems<T = any> {
  items?: T[];
}

export interface IHasItems<T = any> {
  items: T[];
}

export interface IHasOptFirstname<T = string> {
  firstname?: T;
}

export interface IHasFirstname<T = string> {
  firstname: T;
}

export interface IHasOptLastname<T = string> {
  lastname?: T;
}

export interface IHasLastname<T = string> {
  lastname: T;
}


export interface IHasOptNickname<T = string> {
  nickname?: T;
}

export interface IHasNickname<T = string> {
  nickname: T;
}
