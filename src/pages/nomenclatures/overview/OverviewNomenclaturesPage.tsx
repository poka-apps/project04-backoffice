import { CardInfo } from './components';

const OverviewNomenclaturesPage = () => {

  return (
    <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-4'>
        <CardInfo />
      </div>
    </div>
  );

};

export default OverviewNomenclaturesPage;
