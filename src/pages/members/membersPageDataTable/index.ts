import type { IHasCreatedOn, IHasFirstName, IHasId, IHasOptLastName } from '@/interfaces';

export * from './MembersPageDataTable';

export type Member = IHasId & IHasFirstName & IHasOptLastName & IHasCreatedOn;
