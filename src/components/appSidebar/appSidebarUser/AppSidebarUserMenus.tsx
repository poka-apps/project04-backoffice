import { DropdownMenuSeparator, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuItem } from '@/components/shadcn';
import { BadgeCheck, Bell, CreditCard, LogOut, Sparkles } from 'lucide-react';
import { AppSidebarUserBanner } from './AppSidebarUserBanner';
import { useSidebar, useUserConnected } from '@/hooks';

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
        <DropdownMenuItem>
          <Sparkles />
          Upgrade to Pro
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <BadgeCheck />
          Account
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Bell />
          Notifications
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LogOut />
        Log out
      </DropdownMenuItem>
    </DropdownMenuContent>
  );

};
