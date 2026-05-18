import { Button } from '@/components/shadcn';
import { Plus } from 'lucide-react';
import { cn } from '@/functions';

const MembersPageHeader = () => {

  return (
    <div className='flex items-center justify-end'>
      <Button
        size={'sm'}
        variant={'outline'}
        className='cursor-pointer'
        title='Ajouter un membre'>
        <Plus />
        <span className={cn('hidden', 'md:block')}>
          Ajouter un membre
        </span>
      </Button>
    </div>
  );

};

export default MembersPageHeader;
