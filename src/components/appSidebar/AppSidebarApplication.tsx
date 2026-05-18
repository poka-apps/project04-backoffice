import img from '@/assets/images/jpeg/logo-fpm-1056x972.jpeg';
import {
  DropdownMenuTrigger,
  SidebarMenuButton,
  SidebarMenuItem,
  DropdownMenu,
  SidebarMenu,
} from '@/components/shadcn';

export const AppSidebarApplication = () => (
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton size='lg'>
            <img src={img} className='size-8 rounded-sm' />
            <div className='grid flex-1 text-left text-sm leading-tight'>
              <span className='truncate font-medium'>
                FPM
              </span>
              <span className='truncate text-xs'>
                FP-MOSELLE-237
              </span>
            </div>
          </SidebarMenuButton>
        </DropdownMenuTrigger>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
);
