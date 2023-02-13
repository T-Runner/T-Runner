import { FormControl, InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const SearchField = () => {
  return (
    <div>
      <FormControl className='m-0'>
        <TextField
          placeholder="Search"
          size="small"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          sx={{ width: '300px' }}
        />
      </FormControl>
    </div>
  )
};

export default SearchField;