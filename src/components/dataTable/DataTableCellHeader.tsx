import type { IHasOptClassName, IHasOptSortBy, IHasOptSortType, IHasTitle } from '@/interfaces';
import { ArrowUpNarrowWide, ArrowDownNarrowWide, ArrowDownUp } from 'lucide-react';
import { Button } from '@/components/shadcn/button';
import { useQueryParams } from '@/hooks';
import { SortTypeEnum } from '@/enums';
import { cn } from '@/functions';

export const DataTableCellHeader = ({ title, className, sortType, sortBy }: IHasTitle & IHasOptClassName & IHasOptSortType & IHasOptSortBy) => {

  const { values: [sortByValue, sortTypeValue], setValues } = useQueryParams({ names: ['sortBy', 'sortType'], defaultValue: { sortBy, sortType } });

  const isApplied = sortByValue?.toLowerCase() === sortBy?.toLowerCase();

  const ArrowIcon = (
    (
      isApplied &&
      sortTypeValue?.toLowerCase() === SortTypeEnum.asc
    )
      ? ArrowUpNarrowWide
      : (
        isApplied &&
        sortTypeValue?.toLowerCase() === SortTypeEnum.desc
      )
        ? ArrowDownNarrowWide
        : ArrowDownUp
  );

  const handleOnClick = () => {
    const values = {
      sortType: sortTypeValue === SortTypeEnum.asc 
                  ? SortTypeEnum.desc 
                  : SortTypeEnum.asc
    } as any;

    if (sortBy) {
      values.sortBy = sortBy;
    }
    
    setValues(values);
  };

  return (
    <Button
      variant='ghost'
      className={cn('cursor-pointer', className)}
      onClick={handleOnClick}>
      {title}
      {
        ArrowIcon &&
        <ArrowIcon
          size={4}
          className={cn('opacity-20', isApplied && 'opacity-100')} />
      }
    </Button>
  );

};
