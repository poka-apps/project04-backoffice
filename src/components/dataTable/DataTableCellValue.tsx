import type { IHasOptClassName, IHasOptValue } from '@/interfaces';
import type { ReactNode } from 'react';

export const DataTableCellValue = ({ value, className }: IHasOptValue<ReactNode> & IHasOptClassName) => {

  if (!value) {
    return (
      <span className='text-gray-300 italic'>
        N/A
      </span>
    );
  }

  return (
    <span className={className}>
      {value}
    </span>
  );

};
