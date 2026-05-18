import { flexRender, type HeaderGroup, type RowData } from '@tanstack/react-table';
import { TableHead, TableHeader, TableRow, } from '../shadcn';
import type { IHasValue } from '@/interfaces';

export const DataTableHeader = <TData extends RowData>({ value }: IHasValue<HeaderGroup<TData>[]>) => (
  <TableHeader className='bg-secondary'>
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
