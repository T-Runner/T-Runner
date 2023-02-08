import React, { useState } from 'react'
import PageLayout from '../../../components/PageLayout';
import CreateEditGroup from './create-edit-group';
import ListGroup from './list-group';

const GroupManagement = () => {
  const [isCreate, setIsCreated] = useState(false);

  const handleClose = () => {
    setIsCreated(false);
  };

  const handleCreate = () => {
    setIsCreated(true);
  }

  return (
    <div>
      <PageLayout>
        {isCreate ?
          <CreateEditGroup onClose={handleClose} />
          :
          <div>
            <div className='flex justify-between'>
              <p className='uppercase font-barlow font-bold text-28'>Groups</p>
              <button className='uppercase w-189 h-10 bg-ct4-green-neon font-barlow font-bold text-sm rounded' onClick={handleCreate}>Create a New Group</button>
            </div>
            <ListGroup />
          </div>
        }
      </PageLayout>
    </div>
  );
};

export default GroupManagement;