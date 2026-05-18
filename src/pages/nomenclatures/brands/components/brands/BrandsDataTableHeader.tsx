import { TableHead, TableHeader, TableRow } from '@/components/shadcn';

export const BrandsDataTableHeader = () => (
  <TableHeader>
    <TableRow>
      <TableHead className='w-[1%] whitespace-nowrap'>
        Id
      </TableHead>
      <TableHead className='px-10'>
        Intitulé
      </TableHead>
    </TableRow>
  </TableHeader>
);
