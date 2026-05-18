import { AppSidebarUserBanner } from './AppSidebarUserBanner';
import { AppSidebarUserMenus } from './AppSidebarUserMenus';
import { ChevronsUpDown } from 'lucide-react';
import { useUserConnected } from '@/hooks';
import {
  DropdownMenuTrigger,
  SidebarMenuButton,
  SidebarMenuItem,
  DropdownMenu,
  SidebarMenu,
} from '@/components/shadcn';

export const AppSidebarUser = () => {

  const { name, email } = useUserConnected();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            className='cursor-pointer'
            asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'>
              <AppSidebarUserBanner />
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-medium'>
                  {name}
                </span>
                <span className='truncate text-xs'>
                  {email}
                </span>
              </div>
              <ChevronsUpDown className='ml-auto size-4' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <AppSidebarUserMenus />
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );

};
