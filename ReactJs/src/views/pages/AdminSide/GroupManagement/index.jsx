import React, { useState } from 'react'
import { defaultGroup } from '../../../../constants';
import PageLayout from '../../../components/PageLayout';
import CreateEditGroup from './create-edit-group';
import ListGroup from './list-group';

const GroupManagement = () => {
  const [isCreate, setIsCreated] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [group, setGroup] = useState(defaultGroup);

  const handleClose = () => {
    setIsCreated(false);
    setIsEdit(false);
  };

  const handleCreate = () => {
    setIsCreated(true);
  }

  const handleEdit = (item) => {
    setGroup({
      groupName: item.groupName,
      desc: item.desc,
      location: item.location,
      sport: item.sport,
      groupType: item.groupType,
      active: item.active,
      website: item.website,
      checkbox: item.checkbox,
      img: item.img
    });
    setIsEdit(true);
  };

  return (
    <div>
      <PageLayout>
        {isCreate ?
          <CreateEditGroup onClose={handleClose} action='Create' />
          :
          isEdit ?
            <CreateEditGroup onClose={handleClose} action='Edit' data={group} />
            :
            <ListGroup handleEdit={handleEdit} handleCreate={handleCreate} />
        }
      </PageLayout>
    </div>
  );
};

export default GroupManagement;