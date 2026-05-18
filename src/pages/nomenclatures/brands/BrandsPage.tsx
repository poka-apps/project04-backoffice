import { Models, Header, Brands } from './components';
import { useParams } from './hooks';

const BrandsPage = () => {

  const { tab } = useParams();

  return (
    <div className='flex flex-1 flex-col space-y-3 p-4 pt-0'>
      <Header />
      {tab === 'models' && <Models />}
      {tab === 'brands' && <Brands />}
    </div>
  );

};

export default BrandsPage;
