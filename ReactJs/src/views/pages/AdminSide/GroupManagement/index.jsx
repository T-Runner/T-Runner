import React from 'react'
import { groupData } from '../../../../constants';
import FilterIcon from '../../../components/Icons/filter-icon';
import PageLayout from '../../../components/PageLayout';
import SearchFields from '../../../components/SearchFields';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import { StyledTableCell } from './style';
import GroupTR from './groupTR';
import Paginations from '../../../components/Pagination';
import TotalResult from '../../../components/Pagination/total-result';

const GroupManagement = () => {
  return (
    <div>
      <PageLayout>
        <div>
          <div className='flex justify-between'>
            <p className='uppercase font-barlow font-bold text-28'>Groups</p>
            <button className='uppercase w-189 h-10 bg-ct4-green-neon font-barlow font-bold text-sm rounded'>Create a New Group</button>
          </div>
          <div className='flex justify-between mt-4 font-barlow text-sm'>
            <SearchFields placeholder='Search by group name...' />
            <div className='cursor-pointer'>
              <FilterIcon />
            </div>
          </div>
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
                    <GroupTR item={item} key={index} />
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
      </PageLayout>
    </div>
  )
};

export default GroupManagement;