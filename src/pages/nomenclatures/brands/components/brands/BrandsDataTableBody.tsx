import { TableBody, TableCell, TableRow } from '@/components/shadcn';
import type { IHasOptBrands } from '@/interfaces';
import { Link } from 'react-router-dom';
import { useParams } from '../../hooks';
import { useLocation } from '@/hooks';

export const BrandsDataTableBody = ({ brands }: IHasOptBrands) => {

  const { pathname } = useLocation();
  const { itemType } = useParams();

  if (!brands) {
    return <></>;
  }

  return (
    <TableBody>
      {
        brands
          .map(
            l => {
              const url = `${pathname}?${new URLSearchParams({ itemType, tab: 'models', brandId: l.id } as any)}`;

              return (
                <TableRow key={l.id}>
                  <TableCell className='w-[1%] whitespace-nowrap opacity-50'>
                    <Link to={url}>
                      {`...${l.id.slice(20)}`}
                    </Link>
                  </TableCell>
                  <TableCell className='px-10'>
                    <Link to={url}>
                      {l.title}
                    </Link>
                  </TableCell>
                </TableRow>
              );

            }
          )
      }
    </TableBody>
  );

};
