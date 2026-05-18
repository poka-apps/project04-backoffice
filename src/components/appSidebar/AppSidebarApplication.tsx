'use client';

import { AudioWaveform, ChevronsUpDown, Command, GalleryVerticalEnd, Plus } from 'lucide-react';
import type { IHasIcon, IHasName, IHasPlan } from '@/interfaces';
import { useSidebar } from '@/hooks';
import { useState } from 'react';
import {
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  SidebarMenuButton,
  DropdownMenuItem,
  SidebarMenuItem,
  DropdownMenu,
  SidebarMenu
} from '@/components/shadcn';

const CONSTS = {
  teams: [
    {
      name: 'Acme Inc',
      icon: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      icon: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      icon: Command,
      plan: 'Free',
    },
  ] as (IHasName & IHasIcon & IHasPlan)[]
}

export const AppSidebarApplication = () => {

  const [activeTeam, setActiveTeam] = useState(CONSTS.teams[0]);
  const { isMobile } = useSidebar();

  if (!activeTeam) {
    return <></>;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'>
              <div className='bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg'>
                <activeTeam.icon className='size-4' />
              </div>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-medium'>{activeTeam.name}</span>
                <span className='truncate text-xs'>{activeTeam.plan}</span>
              </div>
              <ChevronsUpDown className='ml-auto' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg'
            align='start'
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}>
            <DropdownMenuLabel className='text-muted-foreground text-xs'>
              Teams
            </DropdownMenuLabel>
            {
              CONSTS
                .teams
                .map(
                  (team, index) => (
                    <DropdownMenuItem
                      key={team.name}
                      onClick={() => setActiveTeam(team)}
                      className='gap-2 p-2'>
                      <div className='flex size-6 items-center justify-center rounded-md border'>
                        <team.icon className='size-3.5 shrink-0' />
                      </div>
                      {team.name}
                      <DropdownMenuShortcut>
                        ⌘{index + 1}
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                  )
                )
            }
            <DropdownMenuSeparator />
            <DropdownMenuItem className='gap-2 p-2'>
              <div className='flex size-6 items-center justify-center rounded-md border bg-transparent'>
                <Plus className='size-4' />
              </div>
              <div className='text-muted-foreground font-medium'>Add team</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );

};
