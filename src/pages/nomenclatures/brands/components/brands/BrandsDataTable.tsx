import { Table, TableCell, TableRow } from '@/components/shadcn';
import { BrandsDataTableHeader } from './BrandsDataTableHeader';
import { BrandsDataTableBody } from './BrandsDataTableBody';
import { useQueryGetBrands } from '@/hooks/queries';
import { useParams } from '../../hooks';
import { Loader } from '@/components';

export const BrandsDataTable = () => {

  const { itemType } = useParams();
  const { brands, isLoading } = useQueryGetBrands({ itemType });

  return (
    <div className='overflow-hidden rounded-md border'>
      <Table>
        <BrandsDataTableHeader />
        {
          isLoading &&
          <TableRow>
            <TableCell colSpan={2}>
              <Loader className='m-10' />
            </TableCell>
          </TableRow>
        }
        {!isLoading && <BrandsDataTableBody brands={brands} />}
      </Table>
    </div>
  );

};
