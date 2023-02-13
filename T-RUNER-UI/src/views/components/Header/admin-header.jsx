import React from 'react'
import ArrowBottom from '../Icons/arrow-bottom';
import TRunnerLogo from '../Icons/TRunner-logo';
import TRunner from '../Icons/TRunner';
import { useMsal } from '@azure/msal-react';

const AdminHeader = () => {
  const { instance } = useMsal();
  let activeAccount;
  if (instance) {
    activeAccount = instance.getActiveAccount();
  }

  return (
    <div className='flex justify-between items-center w-full h-14 bg-ct4-mossy-green'>
      <div className='flex items-center ml-6'>
        <TRunnerLogo width='64' height='28' />
        <div className='ml-2'>
          <TRunner />
        </div>
      </div>
      <div className='flex items-center mr-6'>
        <img className='rounded-full w-9 h-9 mr-3' src={'https://ionicframework.com/docs/img/demos/avatar.svg'} />
        <p className='text-white mr-3'>{activeAccount && activeAccount.name ? activeAccount.name : 'TRunner User'}</p>
        <ArrowBottom />
      </div>
    </div>
  )
}

export default AdminHeader;