import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const TextArea = ({ name, required, value, onChange, ml, width = '250px', placeholder }) => {
    return (
        <div className='flex items-center text-lg font-serif'>
            <p className='m-2 '>{name} {required && <span className='text-red-600 ml-1'>*</span>}
            </p>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: width },
                    marginLeft: ml
                }}
                autoComplete="off"
            >
                <TextField
                    multiline
                    value={value}
                    onChange={onChange}
                    required={required ?? null}
                    rows={3}
                    placeholder={placeholder}
                />
            </Box>
        </div>
    )
};

export default TextArea;