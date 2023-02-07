import React from 'react'
import Box from '@mui/material/Box';
import { StyledTextField } from '../../pages/AdminSide/GroupManagement/style';

const TextFields = ({ name, required, value, onChange, ml, type, width = '250px', height = '40px', placeholder }) => {
  return (
    <div className='text-sm font-barlow-regular'>
      <p>{name} {required && <span className='text-red-600'>*</span>}</p>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { width: width, height: height, marginTop: '4px' },
        }}
        autoComplete="off"
      >
        <StyledTextField
          size='small'
          value={value}
          onChange={onChange}
          required={required ?? null}
          type={type}
          placeholder={placeholder}
        />
      </Box>
    </div>
  )
};

export default TextFields;