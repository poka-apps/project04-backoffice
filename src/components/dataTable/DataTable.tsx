import { type ColumnDef, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { DataTableHeader } from './DataTableHeader';
import { DataTableBody } from './DataTableBody';
import { Table } from '../shadcn';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export const DataTable = <TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) => {

  const { getHeaderGroups, getRowModel } = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

  return (
    <div className='overflow-auto rounded-sm border max-h-[calc(100vh-130px)] flex flex-col'>
      <Table>
        <DataTableHeader
          className='sticky top-0 z-10'
          value={getHeaderGroups()} />
        <DataTableBody
          className='overflow-y-auto'
          columnsLength={columns.length}
          value={getRowModel()} />
      </Table>
    </div>
  );

};
