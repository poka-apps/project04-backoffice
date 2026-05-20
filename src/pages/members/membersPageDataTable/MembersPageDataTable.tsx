import type { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components';
import { nameof } from '@/functions';
import type { Member } from '.';
import dayjs from 'dayjs';

export const columnsDefinitions = [
  {
    accessorKey: nameof<Member>('firstname'),
    header: 'Prénom',
    meta: {
      className: 'min-w-25 px-3'
    }
  },
  {
    accessorKey: nameof<Member>('lastname'),
    header: 'Nom',
    meta: {
      className: 'min-w-25 w-full px-3'
    }
  },
  {
    accessorKey: nameof<Member>('createdOn'),
    header: 'Créé le',
    meta: {
      className: 'min-w-25 px-3'
    },
    cell: ({ getValue }) => (
      dayjs(getValue<Date>())
        .format('DD/MM/YYYY')
    )
  },
] as ColumnDef<Member>[];

export const MembersPageDataTable = () => {

  return (
    <DataTable
      columns={columnsDefinitions}
      data={[{
        createdOn: new Date(),
        lastname: 'Dupont',
        firstname: 'Jean',
        id: '1',
      }]} />
  );

};
