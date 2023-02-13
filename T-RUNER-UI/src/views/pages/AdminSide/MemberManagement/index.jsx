import React from 'react'
import Header from '../../../components/Header';
import Paginations from '../../../components/Pagination';
import SearchField from '../../../components/SearchField';
import MemberModal from './MemberModal';
import MemberTable from './MemberTable';

const MemberManagement = () => {
  return (
    <div>
      <Header />
      <div className='m-auto max-w-1800'>
        <div>
          <p className='text-gray-700 font-bold text-3xl mt-10'>Member Profiles</p>
        </div>
        <div className='flex justify-end mt-10'>
          <SearchField />
        </div>
        <div>
          <MemberTable />
          <Paginations />
          <MemberModal />
        </div>
      </div>
    </div>
  )
};

export default MemberManagement;