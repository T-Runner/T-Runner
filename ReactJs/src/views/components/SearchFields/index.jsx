import React from 'react'
import { FormControl, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '../Icons/search-icon';

const SearchFields = ({ placeholder = 'Search...', sx = { width: '360px', height: '40px', borderRadius: '4px' } }) => {
  return (
    <div>
      <FormControl>
        <TextField
          placeholder={placeholder}
          size="small"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          sx={sx}
        />
      </FormControl>
    </div>
  )
};

export default SearchFields;