import type { IHasData, IHasTotal } from './has.interface';
import type { IPaginable } from './paginable.interface';

export interface IPaginatedData<TData = any> extends IHasData<TData[]>, IPaginable, IHasTotal { }
