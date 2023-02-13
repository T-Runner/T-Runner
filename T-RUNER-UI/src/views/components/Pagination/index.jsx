import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Paginations = ({ count }) => {
  return (
    <div >
      <Stack spacing={2}>
        <Pagination count={count} variant="outlined" shape="rounded" />
      </Stack>
    </div>
  )
};

export default Paginations;