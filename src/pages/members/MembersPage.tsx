import { MembersPageDataTable } from './membersPageDataTable';
import { useQueryGetHealth } from '@/hooks/queries';
import MembersPageHeader from './MembersPageHeader';

const MembersPage = () => {

  const aaa = useQueryGetHealth();

  console.log(aaa);

  return (
    <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
      <MembersPageHeader />
      <MembersPageDataTable />
    </div>
  );

};

export default MembersPage;
