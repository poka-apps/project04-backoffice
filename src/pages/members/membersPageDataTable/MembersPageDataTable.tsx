import { useQueryGetMembers, type TUseQueryGetMembersResponse } from '@/hooks/queries';
import { DataTable, DataTableCellValue } from '@/components';
import type { ColumnDef } from '@tanstack/react-table';
import type { IAddress, IPhone } from '@/interfaces';
import type { TNullable } from '@/types';
import { nameof } from '@/functions';
import dayjs from 'dayjs';

export const columnsDefinitions = [
  {
    accessorKey: nameof<TUseQueryGetMembersResponse>('firstname'),
    header: 'Prénom',
    meta: {
      className: 'min-w-25 px-3 font-medium'
    }
  },
  {
    accessorKey: nameof<TUseQueryGetMembersResponse>('lastname'),
    header: 'Nom',
    meta: {
      className: 'min-w-25 px-3 font-medium'
    }
  },
  {
    accessorKey: nameof<TUseQueryGetMembersResponse>('nickname'),
    header: 'Surnom',
    meta: {
      className: 'min-w-25 px-3'
    }
  },
  {
    accessorKey: nameof<TUseQueryGetMembersResponse>('address'),
    header: 'Localité',
    meta: {
      className: 'min-w-25 px-3'
    },
    cell: ({ getValue }) => {
      const address = getValue<TNullable<IAddress>>();

      if (!address) {
        return <DataTableCellValue />;
      }

      return <DataTableCellValue value={`${address.city} (${address.countryCodeISO2})`} />;
    }
  },
  {
    accessorKey: nameof<TUseQueryGetMembersResponse>('phone'),
    header: 'Téléphone',
    meta: {
      className: 'min-w-25 w-full px-3'
    },
    cell: ({ getValue }) => <DataTableCellValue value={getValue<TNullable<IPhone>>()?.fullNumber} />
  },
  {
    accessorKey: nameof<TUseQueryGetMembersResponse>('createdOn'),
    header: 'Créé le',
    meta: {
      className: 'min-w-25 px-3'
    },
    cell: ({ getValue }) => (
      <span className='text-gray-400'>
        {
          dayjs(getValue<Date>())
            .format('DD/MM/YYYY hh:mm')
        }
      </span>
    )
  },
] as ColumnDef<TUseQueryGetMembersResponse>[];

export const TUseQueryGetMembersResponsesPageDataTable = () => {

  const { data } = useQueryGetMembers();

  const members = data || [];

  return (
    <DataTable
      columns={columnsDefinitions}
      data={members} />
  );

};
