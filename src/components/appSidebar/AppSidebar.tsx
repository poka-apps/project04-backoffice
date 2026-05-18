'use client';

import { SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, Sidebar } from '@/components/shadcn';
import { AppSidebarApplication } from './AppSidebarApplication';
import { AppSidebarModules } from './AppSidebarModules';
import { AppSidebarUser } from './appSidebarUser';
import * as React from 'react';

export const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => (
  <Sidebar collapsible='icon' {...props}>
    <SidebarHeader>
      <AppSidebarApplication />
    </SidebarHeader>
    <SidebarContent className='gap-0'>
      <AppSidebarModules />
    </SidebarContent>
    <SidebarFooter>
      <AppSidebarUser />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
);
