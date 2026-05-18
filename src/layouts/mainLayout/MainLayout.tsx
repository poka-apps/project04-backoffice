import { SidebarProvider, SidebarInset } from '@/components/shadcn';
import { MainLayoutHeader } from './MainLayoutHeader';
import { AppSidebar } from '@/components';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => (
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <MainLayoutHeader />
      <Outlet />
    </SidebarInset>
  </SidebarProvider>
);
