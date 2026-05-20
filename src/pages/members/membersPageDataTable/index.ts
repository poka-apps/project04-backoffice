import type { IHasCreatedOn, IHasFirstname, IHasId, IHasOptLastname } from '@/interfaces';

export * from './MembersPageDataTable';

export type Member = 
IHasId & 
IHasFirstname & 
IHasOptLastname & 
IHasCreatedOn;
