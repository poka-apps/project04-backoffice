import { Badge, Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/shadcn';
import { TrendingDown, TrendingUp } from 'lucide-react';

const DashboardPage = () => {

  return (
    <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
      <div className='grid auto-rows-min gap-4 md:grid-cols-3 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card'>
        <Card className='@container/card'>
          <CardHeader>
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
              $1,250.00
            </CardTitle>
            <CardAction>
              <Badge variant='outline'>
                <TrendingUp />
                +12.5%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className='flex-col items-start gap-1.5 text-sm'>
            <div className='line-clamp-1 flex gap-2 font-medium'>
              Trending up this month <TrendingUp className='size-4' />
            </div>
            <div className='text-muted-foreground'>
              Visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>
        <Card className='@container/card'>
          <CardHeader>
            <CardDescription>New Customers</CardDescription>
            <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
              1,234
            </CardTitle>
            <CardAction>
              <Badge variant='outline'>
                <TrendingDown />
                -20%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className='flex-col items-start gap-1.5 text-sm'>
            <div className='line-clamp-1 flex gap-2 font-medium'>
              Down 20% this period <TrendingDown className='size-4' />
            </div>
            <div className='text-muted-foreground'>
              Acquisition needs attention
            </div>
          </CardFooter>
        </Card>
        <Card className='@container/card'>
          <CardHeader>
            <CardDescription>Active Accounts</CardDescription>
            <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
              45,678
            </CardTitle>
            <CardAction>
              <Badge variant='outline'>
                <TrendingUp />
                +12.5%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className='flex-col items-start gap-1.5 text-sm'>
            <div className='line-clamp-1 flex gap-2 font-medium'>
              Strong user retention <TrendingUp className='size-4' />
            </div>
            <div className='text-muted-foreground'>Engagement exceed targets</div>
          </CardFooter>
        </Card>
        <Card className='@container/card'>
          <CardHeader>
            <CardDescription>Growth Rate</CardDescription>
            <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
              4.5%
            </CardTitle>
            <CardAction>
              <Badge variant='outline'>
                <TrendingUp />
                +4.5%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className='flex-col items-start gap-1.5 text-sm'>
            <div className='line-clamp-1 flex gap-2 font-medium'>
              Steady performance increase <TrendingUp className='size-4' />
            </div>
            <div className='text-muted-foreground'>Meets growth projections</div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );

  return (
    <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
      <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
        <div className='bg-muted/50 aspect-video rounded-xl' />
        <div className='bg-muted/50 aspect-video rounded-xl' />
        <div className='bg-muted/50 aspect-video rounded-xl' />
      </div>
      <div className='bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min' />
    </div>
  );

};

export default DashboardPage;
