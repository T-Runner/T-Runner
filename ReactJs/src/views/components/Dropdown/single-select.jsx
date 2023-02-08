import { Box } from '@mui/material';
import React, { useState } from 'react'
import { StyledFormControl, StyledMenuItem, StyledSelect } from '../../pages/AdminSide/GroupManagement/style';

const SingleSelect = ({ name, width = '600px', required, options }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className='text-sm font-barlow-regular'>
      <p >{name} {required && <span className='text-red-600'>*</span>}</p>
      <Box
        sx={{
          "& .MuiInputBase-root": { width: width, marginTop: '4px' },
        }}
      >
        <StyledFormControl fullWidth>
          <StyledSelect
            value={value}
            onChange={handleChange}
            size='small'
            displayEmpty
            renderValue={
              value !== '' ? undefined : name == 'Active' ? () => <ul>Enable</ul> : () => <ul>{name}</ul>
            }
          >
            {options.length > 0 && options.map((item, index) => (
              <StyledMenuItem value={item.value} key={index}>{item.value}</StyledMenuItem>
            ))}
          </StyledSelect>
        </StyledFormControl>
      </Box>
    </div>
  );
};

export default SingleSelect;