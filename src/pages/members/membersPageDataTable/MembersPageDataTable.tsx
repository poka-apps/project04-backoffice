import { DataTable, DataTableCellValue } from '@/components';
import type { ColumnDef } from '@tanstack/react-table';
import type { IAddress, IPhone } from '@/interfaces';
import type { TNullable } from '@/types';
import { nameof } from '@/functions';
import type { Member } from '.';
import dayjs from 'dayjs';

export const columnsDefinitions = [
  {
    accessorKey: nameof<Member>('firstname'),
    header: 'Prénom',
    meta: {
      className: 'min-w-25 px-3 font-medium'
    }
  },
  {
    accessorKey: nameof<Member>('lastname'),
    header: 'Nom',
    meta: {
      className: 'min-w-25 px-3 font-medium'
    }
  },
  {
    accessorKey: nameof<Member>('nickname'),
    header: 'Surnom',
    meta: {
      className: 'min-w-25 px-3'
    }
  },
  {
    accessorKey: nameof<Member>('address'),
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
    accessorKey: nameof<Member>('phone'),
    header: 'Téléphone',
    meta: {
      className: 'min-w-25 w-full px-3'
    },
    cell: ({ getValue }) => <DataTableCellValue value={getValue<TNullable<IPhone>>()?.fullNumber} />
  },
  {
    accessorKey: nameof<Member>('createdOn'),
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
] as ColumnDef<Member>[];

export const MembersPageDataTable = () => {

  return (
    <DataTable
      columns={columnsDefinitions}
      data={[
        {
          createdOn: new Date(),
          lastname: 'Dupont',
          firstname: 'Jean',
          id: '1',
          address: {
            countryCodeISO2: 'LU',
            city: 'Luxembourg',
            postalCode: 'L-1234',
            street: 'Rue de la Paix',
            number: '1'
          }
        },
        {
          createdOn: new Date(),
          lastname: 'Durand',
          firstname: 'Marie',
          id: '2',
        }
      ]} />
  );

};
