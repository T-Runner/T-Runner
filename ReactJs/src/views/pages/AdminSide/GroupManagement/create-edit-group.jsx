import { Checkbox } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MultipleSelect from '../../../components/Dropdown/multi-select';
import SingleSelect from '../../../components/Dropdown/single-select';
import CheckedIcon from '../../../components/Icons/checked-icon';
import TextFields from '../../../components/TextField';
import '../../../../styles/tooltip.css'
import UploadImage from '../../../components/UploadImage';
import { activeDatas, defaultGroup, groupTypeDatas, locationDatas } from '../../../../constants';
import HelpMenuIcon from '../../../components/Icons/help-menu-icon';
import ModalConfirm from '../../../components/ModalConfirm';
import SingleSelectV2 from '../../../components/Dropdown/single-select-v2';
import TextArea from '../../../components/TextField/textarea';

const CreateEditGroup = ({ onClose, isCreate, data }) => {
  const [showModal, setShowModal] = useState(false);
  const [formState, setFormState] = useState(defaultGroup);
  const [validForm, setValidForm] = useState({
    groupName: true,
    location: true,
    groupType: true,
    sport: true,
    active: true
  });

  const validateForm = () => {
    let isValid = true;

    Object.keys(validForm).forEach(x => {
      if (!formState[x] || formState[x].value <= 0) {
        {
          isValid = false;
          validForm[x] = false;
        }
      }
    });

    if (!isValid) {
      setValidForm({ ...validForm });
      return false;
    }
    return true;
  };

  const handleSubmitForm = (e) => {
    if (e) {
      e.preventDefault();
    }

    if (!validateForm()) {
      return;
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleChangeGroupName = (event) => {
    setFormState({
      ...formState,
      groupName: event.target.value,
    });
    setValidForm({ ...validForm, groupName: !!event.target.value });
  };

  const handleChangeDescription = (event) => {
    setFormState({
      ...formState,
      desc: event.target.value,
    });
  };

  const handleChangeLocation = (event) => {
    setFormState({
      ...formState,
      location: event.target.value,
    });
    setValidForm({ ...validForm, location: true });
  };

  const handleChangeGroupType = (event) => {
    setFormState({
      ...formState,
      groupType: event.target.value,
    });
    setValidForm({ ...validForm, groupType: true });
  };

  const handleChangeActive = (event) => {
    setFormState({
      ...formState,
      active: event.target.value,
    });
    setValidForm({ ...validForm, active: true });
  };

  const handleChangeSport = (event) => {
    setFormState({
      ...formState,
      sport: event.target.value,
    });
    setValidForm({ ...validForm, sport: true });
  };

  const handleChangeWebsite = (event) => {
    setFormState({
      ...formState,
      sport: event.target.value,
    });
  };

  const handleSave = () => {
    if (!validateForm()) {
      return;
    }
    setShowModal(true)
  }

  useEffect(() => {
    setFormState({ ...data });
  }, [data]);

  useEffect(() => {
    setValidForm({ ...validForm });
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <div className='font-barlow font-semibold	flex'>
          <p className='text-ct4-dark-green text-sm uppercase cursor-pointer font-barlow	' onClick={() => onClose()}>Groups</p>
          <div className='mx-3 text-xs text-ct4-gray'>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <p className='text-ct4-gray-3 text-sm uppercase'>{isCreate ? 'Create a New Group' : 'Edit Group'}</p>
        </div>
        <div className='mt-5 flex justify-between'>
          <p className='font-barlow font-semibold uppercase text-28'>{isCreate ? 'Create a New Group' : 'Edit Group'}</p>
          <div>
            <button className='uppercase w-140 h-10 border border-ct4-border-gray font-barlow font-semibold text-sm rounded mr-3' onClick={() => onClose()}>Cancel</button>
            <button type='submit' className='uppercase w-140 h-10 bg-ct4-green-neon font-barlow font-semibold text-sm rounded' onClick={handleSave}>Save</button>
          </div>
        </div>
        <div className='mt-8 grid grid-cols-5'>
          <div className='grid gap-y-4 col-span-2' >
            <TextFields name='Group Name' required={true} placeholder={'Group Name'} value={formState.groupName} onChange={handleChangeGroupName} valid={validForm.groupName} />
            <TextArea name='Description' placeholder={'Description'} value={formState.desc} onChange={handleChangeDescription} />
            <SingleSelect name='Location' required={true} options={locationDatas} value={formState.location} onChange={handleChangeLocation} valid={validForm.location} />
            <TextFields name='Website' placeholder={'Website'} value={formState.website} onChange={handleChangeWebsite} />
            <SingleSelect name='Group Type' required={true} options={groupTypeDatas} value={formState.groupType} onChange={handleChangeGroupType} valid={validForm.groupType} />
            <MultipleSelect name='Sport' width='600px' required={true} value={formState.sport} onChange={handleChangeSport} valid={validForm.sport} />
            <SingleSelectV2 name='Active' required={true} options={activeDatas} value={formState.active} onChange={handleChangeActive} valid={validForm.active} />
            <div className='-ml-3 font-barlow flex items-center'>
              <Checkbox checkedIcon={<CheckedIcon />} />
              <p className='mr-2'>Make your club invite-only?</p>
              <div className='tooltip cursor-pointer'>
                <HelpMenuIcon />
                <span className='tooltiptext-help-icon font-barlow px-6 pt-4 pb-6'>
                  <div className='flex '>
                    <HelpMenuIcon stroke='#ffffff' />
                    <p className='font-semibold text-14 ml-2'>Invite-Only Group</p>
                  </div>
                  <div className='mt-4 '>
                    <p>Runners must request permission to join an invite-only Group.</p>
                    <p className='mt-4'>Only admins can approve new Group members. Recent activity, club announcements, discussions and private group events will be hidden from non-members.</p>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <UploadImage img={formState.img} />
        </div>
      </form>

      {showModal && <ModalConfirm isShow={showModal} onClose={handleClose} text='Are you sure you want to save it? This action cannot be undone.' />}
    </div>
  );
};

export default CreateEditGroup;