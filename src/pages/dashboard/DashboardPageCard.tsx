import { Badge, Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/shadcn';
import type { IHasTitle, IHasValue } from '@/interfaces';
import { TrendingDown, TrendingUp } from 'lucide-react';
import type { ReactNode } from 'react';

type TProps = IHasTitle & IHasValue<string> & {
  description?: ReactNode;
  subDescription?: ReactNode;
};

export const DashboardPageCard = ({ title, value, description, subDescription }: TProps) => (
  <Card className='@container/card'>
    <CardHeader>
      <CardDescription>
        {title}
      </CardDescription>
      <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
        {value}
      </CardTitle>
      {/* <CardAction>
        <Badge variant='outline'>
          <TrendingUp />
          +12.5%
        </Badge>
      </CardAction> */}
    </CardHeader>
    {
      (
        description ||
        subDescription
      ) &&
      <CardFooter className='flex-col items-start gap-1.5 text-sm'>
        {
          description && (
            <div className='line-clamp-1 flex gap-2 font-medium'>
              {description}
            </div>
          )
        }
        {
          subDescription && (
            <div className='text-muted-foreground'>
              {subDescription}
            </div>
          )
        }
      </CardFooter>
    }
  </Card>
);