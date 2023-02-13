import React from 'react'
import Stack from '@mui/material/Stack';
import { StyledPagination } from '../../pages/AdminSide/GroupManagement/style';

const Paginations = ({ count }) => {
  return (
    <div >
      <Stack spacing={2}>
        <StyledPagination count={count} variant="outlined" shape="rounded" />
      </Stack>
    </div>
  )
};

export default Paginations;