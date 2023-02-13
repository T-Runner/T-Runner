import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { StyledFormControl, StyledMenuItem, StyledSelect } from '../../pages/AdminSide/GroupManagement/style';

const SingleSelectV2 = ({ name, width = '600px', required, options, value = 'Enable', onChange, valid }) => {
  const [defaultValue, setDefaultValue] = useState('')

  useEffect(() => {
    setDefaultValue(value);
  }, [value])

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
            value={defaultValue}
            onChange={onChange}
            size='small'
            displayEmpty
          >
            {options.length > 0 && options.map((item, index) => (
              <StyledMenuItem value={item.value} key={index}>{item.value}</StyledMenuItem>
            ))}
          </StyledSelect>
        </StyledFormControl>
      </Box>
      <span hidden={valid || !required} className='text-ct4-red-1'>
        {name} is required
      </span>
    </div>
  );
};

export default SingleSelectV2;