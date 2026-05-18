import { Card, CardHeader, CardTitle } from '@/components/shadcn';

export const CardInfo = () => {

  return (
    <div className='border rounded-lg shadow-sm p-3'>
      <p className='text-muted-foreground text-sm'>
        Header
      </p>
      <p className='text-2xl'>
        1250
      </p>
    </div>
  );

};
