import { flexRender, type RowData, type RowModel } from '@tanstack/react-table';
import { TableBody, TableCell, TableRow } from '../shadcn';
import type { IHasValue } from '@/interfaces';

export const DataTableBody = <TData extends RowData>({ value, columnsLength }: IHasValue<RowModel<TData>> & { columnsLength: number; }) => {

  const rows = value?.rows ?? [];

  return (
    <TableBody>
      {
        rows.length
          ? (
            rows
              .map(
                row => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}>
                    {
                      row
                        .getVisibleCells()
                        .map(
                          cell => (
                            <TableCell
                              key={cell.id}
                              className={cell?.column?.columnDef?.meta?.className}>
                              {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </TableCell>
                          )
                        )
                    }
                  </TableRow>
                )
              )
          ) : (
            <TableRow>
              <TableCell
                colSpan={columnsLength}
                className='h-24 text-center'>
                Aucun résultat.
              </TableCell>
            </TableRow>
          )
      }
    </TableBody>
  );

};
