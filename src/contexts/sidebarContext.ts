import type { TCollapsibleState, TNullable } from '@/types';
import type { IHasOpen } from '@/interfaces';
import { createContext } from 'react';

export type SidebarContextProps = IHasOpen & {
  setOpenMobile: (open: boolean) => void;
  setOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  state: TCollapsibleState;
  openMobile: boolean;
  isMobile: boolean;
};

export const SidebarContext = createContext<TNullable<SidebarContextProps>>(null);
