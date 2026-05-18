import { Loader as LoaderLucideReact } from 'lucide-react';
import type { IHasOptClassName } from '@/interfaces';
import { cn } from '@/functions';

export const Loader = ({ className }: IHasOptClassName) => (
  <div className={cn('flex flex-1 justify-center items-center', className)}>
    <LoaderLucideReact
      size={20}
      className='animate-spin opacity-70' />
  </div>
);
