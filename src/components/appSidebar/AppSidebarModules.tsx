import type { IHasIcon, IHasOptItems, IHasName, IHasUrl, IHasModule } from '@/interfaces';
import { ChevronRight, LayoutDashboard, Users } from 'lucide-react';
import { cn, groupBy } from '@/functions';
import { Link } from 'react-router-dom';
import { useLocation } from '@/hooks';
import { ROUTES } from '@/constants';
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

export const AppSidebarModulesMenuDashboard = () => {

  const { isRoute } = useLocation();

  return (
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
  );

};

export const AppSidebarModules = () => {

  const { isRoute } = useLocation();

  const menus = [
    {
      name: 'Membres',
      url: ROUTES.members,
      icon: Users,
      module: 'Gestion des membres',
    },
    // {
    //   name: 'Utilisateurs',
    //   url: ROUTES.users,
    //   icon: Users,
    //   module: 'Sécurité',
    // }
  ] as (IHasModule & IHasName & IHasUrl & IHasIcon & IHasOptItems<IHasName & IHasUrl & IHasIcon>)[];

  return (
    <>
      <AppSidebarModulesMenuDashboard />
      {
        groupBy(menus, l => l.module)
          .map(
            group => (
              <SidebarGroup
                key={group.key}
                className='pb-0'>
                <SidebarGroupLabel>
                  {group.key}
                </SidebarGroupLabel>
                <SidebarMenu>
                  {
                    group
                      .items
                      .map(
                        menu => {

                          if (!menu.items) {
                            return (
                              <SidebarMenuItem key={menu.name}>
                                <SidebarMenuButton
                                  tooltip={menu.name}
                                  asChild>
                                  <Link
                                    className={cn(isRoute(menu.url) && 'font-semibold')}
                                    to={menu.url}>
                                    <menu.icon className={cn(
                                      'opacity-60',
                                      'group-data-[collapsible=icon]:opacity-100'
                                    )} />
                                    <span>
                                      {menu.name}
                                    </span>
                                  </Link>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            );
                          }

                          return (
                            <Collapsible
                              key={menu.name}
                              asChild
                              defaultOpen={isRoute(...menu.items.map(l => l.url))}
                              className='group/collapsible'>
                              <SidebarMenuItem>
                                <CollapsibleTrigger asChild>
                                  <SidebarMenuButton tooltip={menu.name}>
                                    {
                                      menu.icon &&
                                      <menu.icon />
                                    }
                                    <span className={cn(isRoute(...menu.items.map(l => l.url)) && 'font-semibold')}>
                                      {menu.name}
                                    </span>
                                    <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                                  </SidebarMenuButton>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                  <SidebarMenuSub>
                                    {
                                      menu
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
            )
          )
      }
    </>
  );

};
