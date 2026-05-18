import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/shadcn';
import { useQueryGetBrandModels } from '@/hooks/queries';
import { useParams } from '../../hooks';

export const ModelsDataTable = () => {

  const { itemType, itemTypeTitle, brandId } = useParams();
  const { models } = useQueryGetBrandModels({ itemType, brandId: brandId! });

  return (
    <div className='overflow-hidden rounded-md border'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[1%] whitespace-nowrap'>
              Type
            </TableHead>
            <TableHead className='px-10'>
              Intitulé
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            models
              .map(
                l => (
                  <TableRow key={l}>
                    <TableCell className='w-[1%] whitespace-nowrap'>
                      {itemTypeTitle}
                    </TableCell>
                    <TableCell className='px-10'>
                      {l}
                    </TableCell>
                  </TableRow>
                )
              )
          }
        </TableBody>
      </Table>
    </div>
  );

};
