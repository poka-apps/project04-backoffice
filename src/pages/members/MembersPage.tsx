import MembersPageDataTable from './MembersPageDataTable';
import MembersPageHeader from './MembersPageHeader';

const MembersPage = () => {

  return (
    <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
      <MembersPageHeader />
      <MembersPageDataTable />
    </div>
  );

};

export default MembersPage;
