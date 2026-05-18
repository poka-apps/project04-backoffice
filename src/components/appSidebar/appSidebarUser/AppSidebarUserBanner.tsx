import { AvatarFallback, AvatarImage, Avatar } from '@/components/shadcn';
import { useUserConnected } from '@/hooks';

export const AppSidebarUserBanner = () => {

  const { name, avatar } = useUserConnected();

  return (
    <Avatar className='h-8 w-8 rounded-lg'>
      <AvatarImage
        src={avatar}
        alt={name} />
      <AvatarFallback className='rounded-lg'>
        CN
      </AvatarFallback>
    </Avatar>
  );

};
