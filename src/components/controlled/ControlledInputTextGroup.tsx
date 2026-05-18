import type { IHasOptClassName, IHasOptRequired, IHasValue } from '@/interfaces';
import { ControlledInput, type TControlledInputProps } from './ControlledInput';
import { Label } from '@/components/shadcn';
import type { ReactNode } from 'react';
import { cn } from '@/functions';

type TProps = TControlledInputProps & IHasOptClassName & IHasOptRequired & {
  label: IHasOptClassName & IHasValue<ReactNode>;
};

export const ControlledInputTextGroup = ({ label, className, required, ...props }: TProps) => (
  <div className={cn(
    'flex flex-col space-y-2',
    className
  )}>
    <Label
      htmlFor={props.name}
      className={cn(
        'flex items-center gap-1',
        label?.className
      )}>
      {label?.value}
      {
        required &&
        <span className='text-red-500'>
          *
        </span>
      }
    </Label>
    <ControlledInput {...props} />
  </div>
);
