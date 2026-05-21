import { flexRender, type HeaderGroup, type RowData } from '@tanstack/react-table';
import { TableHead, TableHeader, TableRow, } from '../shadcn';
import type { IHasOptClassName, IHasValue } from '@/interfaces';
import { cn } from '@/functions/cn.function';

export const DataTableHeader = <TData extends RowData>({ value, className }: IHasValue<HeaderGroup<TData>[]> & IHasOptClassName) => (
  <TableHeader className={cn('bg-secondary', className)}>
    {
      value
        .map(
          headerGroup => (
            <TableRow key={headerGroup.id}>
              {
                headerGroup
                  .headers
                  .map(
                    header => (
                      <TableHead
                        key={header.id}
                        className={header?.column?.columnDef?.meta?.className}>
                        {
                          header.isPlaceholder
                            ? null
                            : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )
                        }
                      </TableHead>
                    )
                  )
              }
            </TableRow>
          )
        )
    }
  </TableHeader>
);
