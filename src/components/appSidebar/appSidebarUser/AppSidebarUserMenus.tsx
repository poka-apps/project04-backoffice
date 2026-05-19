import { DropdownMenuSeparator, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuItem } from '@/components/shadcn';
import { AppSidebarUserBanner } from './AppSidebarUserBanner';
import { useSidebar, useUserConnected } from '@/hooks';
import { BadgeCheck, LogOut } from 'lucide-react';

export const AppSidebarUserMenus = () => {

  const { name, email } = useUserConnected();
  const { isMobile } = useSidebar();

  return (
    <DropdownMenuContent
      className='w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg'
      side={isMobile ? 'bottom' : 'right'}
      align='end'
      sideOffset={4}>
      <DropdownMenuLabel className='p-0 font-normal'>
        <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
          <AppSidebarUserBanner />
          <div className='grid flex-1 text-left text-sm leading-tight'>
            <span className='truncate font-medium'>
              {name}
            </span>
            <span className='truncate text-xs'>
              {email}
            </span>
          </div>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem className='cursor-pointer'>
          <BadgeCheck />
          Compte
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem className='cursor-pointer'>
        <LogOut />
        Se déconnecter
      </DropdownMenuItem>
    </DropdownMenuContent>
  );

};
