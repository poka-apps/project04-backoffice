import {
  BreadcrumbSeparator,
  SidebarTrigger,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  Breadcrumb,
  Separator,
} from '@/components/shadcn';
import { useLocation } from '@/hooks';

export const MainLayoutHeader = () => {

  const { getCurrentRoute } = useLocation();

  const { menu, module, route } = getCurrentRoute();

  return (
    <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12'>
      <div className='flex items-center gap-2 px-4'>
        <SidebarTrigger className='-ml-1' />
        <Separator
          orientation='vertical'
          className='mr-2 data-[orientation=vertical]:h-4' />
        <Breadcrumb>
          <BreadcrumbList>
            {
              module &&
              route &&
              <BreadcrumbItem className='hidden md:block'>
                <BreadcrumbLink href={'/'}>
                  {module}
                </BreadcrumbLink>
              </BreadcrumbItem>
            }
            {
              menu &&
              <>
                <BreadcrumbSeparator className='hidden md:block' />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {menu}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            }
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );

};
