import type { IHasOptClassName, IHasOptValue } from '@/interfaces';

export const DataTableCellValue = ({ value, className }: IHasOptValue<any> & IHasOptClassName) => {

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
