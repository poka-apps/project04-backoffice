import type { IHasCreatedOn, IHasFirstname, IHasId, IHasOptAddress, IHasOptLastname, IHasOptNickname, IHasOptPhone } from '@/interfaces';

export * from './MembersPageDataTable';

export type Member = 
IHasId & 
IHasFirstname & 
IHasOptLastname & 
IHasOptNickname & 
IHasOptAddress &
IHasOptPhone &
IHasCreatedOn;
