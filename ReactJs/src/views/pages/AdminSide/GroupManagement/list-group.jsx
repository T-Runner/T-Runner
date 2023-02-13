import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { activeDatas, defaultGroup, groupData, groupTypeDatas, locationDatas } from '../../../../constants';
import FilterIcon from '../../../components/Icons/filter-icon';
import Paginations from '../../../components/Pagination';
import TotalResult from '../../../components/Pagination/total-result';
import SearchFields from '../../../components/SearchFields';
import GroupTR from './groupTR';
import { StyledTableCell } from './style';
import CloseIcon from '@mui/icons-material/Close';
import SingleSelect from '../../../components/Dropdown/single-select';
import MultipleSelect from '../../../components/Dropdown/multi-select';

const ListGroup = ({ handleEdit, handleCreate }) => {
  const [formState, setFormState] = useState(defaultGroup);
  const [showFilter, setShowFilter] = useState(false);

  const handleCloseFilter = () => {
    setShowFilter(false);
    setFormState(defaultGroup);
  };

  const handleResetFilter = () => {
    setFormState(defaultGroup);
  };

  console.log('location', formState.location)

  return (
    <div>
      <div className='flex justify-between'>
        <p className='uppercase font-barlow font-bold text-28'>Groups</p>
        <button className='uppercase w-189 h-10 bg-ct4-green-neon font-barlow font-bold text-sm rounded' onClick={() => handleCreate()}>Create a New Group</button>
      </div>
      <div>
        <div className='flex justify-between mt-4 font-barlow text-sm'>
          <SearchFields placeholder='Search by group name...' />
          <div className='cursor-pointer bg-ct4-soft-green' onClick={() => setShowFilter(true)}>
            <FilterIcon />
          </div>
        </div>
        {
          showFilter &&
          <div className='w-full h-100 border border-ct4-border-gray rounded mt-3'>
            <div className='flex justify-between cursor-pointer p-4'>
              <div className='flex gap-8'>
                <SingleSelect name='Location' width='275px' options={locationDatas} value={formState.location} onChange={(event) => setFormState({ ...formState, location: event.target.value, })} />
                <MultipleSelect name='Sport' width='275px' value={formState.sport} onChange={(event) => setFormState({ ...formState, sport: event.target.value, })} />
                <SingleSelect name='Group Type' width='275px' options={groupTypeDatas} value={formState.groupType} onChange={(event) => setFormState({ ...formState, groupType: event.target.value, })} />
                <SingleSelect name='Active' width='275px' options={activeDatas} value={formState.active} onChange={(event) => setFormState({ ...formState, active: event.target.value, })} />
                <div className='flex items-end'>
                  <button className='uppercase w-24 h-10 border border-ct4-border-gray font-barlow font-bold text-sm rounded mr-3' onClick={handleResetFilter}>Reset</button>
                  {
                    formState.location == '' && formState.sport.length == 0 && formState.groupType == '' && formState.active == ''
                      ?
                      <button className='uppercase w-24 h-10 bg-ct4-disable text-ct4-disable-2 font-barlow font-bold text-sm rounded'>Apply</button>
                      :
                      <button className='uppercase w-24 h-10 bg-ct4-green-neon font-barlow font-bold text-sm rounded'>Apply</button>
                  }
                </div>
              </div>
              <div className='cursor-pointer' onClick={handleCloseFilter}>
                <CloseIcon />
              </div>
            </div>
          </div>
        }
        <div className='mt-4'>
          <TableContainer sx={{ maxHeight: 640 }} component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead sx={{ textTransform: 'uppercase' }}>
                <TableRow>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell align="left">Group Name</StyledTableCell>
                  <StyledTableCell align="left">Description</StyledTableCell>
                  <StyledTableCell align="left">Location</StyledTableCell>
                  <StyledTableCell align="left">Sport</StyledTableCell>
                  <StyledTableCell align="left">Group Type</StyledTableCell>
                  <StyledTableCell align="left">Created Date</StyledTableCell>
                  <StyledTableCell align="left">Total Runners</StyledTableCell>
                  <StyledTableCell align="left">Active</StyledTableCell>
                  <StyledTableCell align="left">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {groupData.length > 0 && groupData.map((item, index) =>
                (
                  <GroupTR item={item} key={index} handleEdit={() => handleEdit(item)} />
                ))}
              </TableBody>
            </Table>
            {groupData.length == 0 && (
              <div className='w-full h-14 flex justify-center items-center'>There is no data to display.</div>
            )}
          </TableContainer>
        </div>
        <div className='flex items-center justify-end m-4'>
          <TotalResult total={500} limit={50} />
          <Paginations count={10} />
        </div>
      </div>
    </div>

  )
};

export default ListGroup;