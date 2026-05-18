import { useEffect } from 'react';

const AnnoncesPage = () => {

  useEffect(
    () => {
      console.log('Page annonces');
    },
    []
  );

  return (
    <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
      Annonces
    </div>
  );

};

export default AnnoncesPage;
