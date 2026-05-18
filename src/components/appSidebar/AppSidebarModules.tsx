import type { IHasIcon, IHasOptItems, IHasName, IHasUrl } from '@/interfaces';
import { ChevronRight, LayoutDashboard, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocation } from '@/hooks';
import { ROUTES } from '@/constants';
import { cn } from '@/functions';
import {
  SidebarMenuSubButton,
  CollapsibleTrigger,
  CollapsibleContent,
  SidebarMenuSubItem,
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarGroup,
  SidebarMenu,
  Collapsible,
} from '@/components/shadcn';

const CONSTS = {
  menus: [
    {
      name: 'Utilisateurs',
      url: ROUTES.users,
      icon: Users
    }
  ] as (IHasName & IHasUrl & IHasIcon & IHasOptItems<IHasName & IHasUrl & IHasIcon>)[]
};

export const AppSidebarModules = () => {

  const { isRoute } = useLocation();

  return (
    <>
      <SidebarGroup
        className={cn(
          '-mb-1',
          'group-data-[collapsible=icon]:-mb-3'
        )}>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={'Tableau de bord'}
              asChild>
              <Link
                className={cn(isRoute(ROUTES.dashboard) && 'font-semibold')}
                to={ROUTES.dashboard}>
                <LayoutDashboard className={cn(
                  'opacity-60',
                  'group-data-[collapsible=icon]:opacity-100'
                )} />
                <span>
                  Tableau de bord
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>
          Modules
        </SidebarGroupLabel>
        <SidebarMenu>
          {
            CONSTS
              .menus
              .map(
                item => {

                  if (!item.items) {
                    return (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          tooltip={item.name}
                          asChild>
                          <Link
                            className={cn(isRoute(item.url) && 'font-semibold')}
                            to={item.url}>
                            <item.icon className={cn(
                              'opacity-60',
                              'group-data-[collapsible=icon]:opacity-100'
                            )} />
                            <span>
                              {item.name}
                            </span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  }

                  return (
                    <Collapsible
                      key={item.name}
                      asChild
                      defaultOpen={isRoute(...item.items.map(l => l.url))}
                      className='group/collapsible'>
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton tooltip={item.name}>
                            {
                              item.icon &&
                              <item.icon />
                            }
                            <span className={cn(isRoute(...item.items.map(l => l.url)) && 'font-semibold')}>
                              {item.name}
                            </span>
                            <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {
                              item
                                .items
                                ?.map(
                                  subItem => (
                                    <SidebarMenuSubItem key={subItem.name}>
                                      <SidebarMenuSubButton asChild>
                                        <Link
                                          className={cn(isRoute(subItem.url) && 'font-semibold')}
                                          to={subItem.url}>
                                          <subItem.icon className={cn(
                                            'opacity-60',
                                            'group-data-[collapsible=icon]:opacity-100'
                                          )} />
                                          <span>
                                            {subItem.name}
                                          </span>
                                        </Link>
                                      </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                  )
                                )
                            }
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  );

                }
              )
          }
        </SidebarMenu>
      </SidebarGroup>
    </>
  );

};
