import type { NomenclatureTypeEnum, SortTypeEnum } from '@/enums';

export type TEnvironmentName = 'development' | 'production' | 'test';

export type TCollapsibleState = 'expanded' | 'collapsed';

export type TNomenclatureType = `${NomenclatureTypeEnum}`;

export type TSortType = `${SortTypeEnum}`;
