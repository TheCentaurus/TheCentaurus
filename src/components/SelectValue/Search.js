import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Search({value, handleChange, placeholder}) {
  return (
    <div>
        <FormControl className=' w-full m-1' variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            value={value}
            placeholder={placeholder}
            className=' bg-white rounded-lg border-none w-full'
            onChange={(e) =>handleChange(e.target.value)}
           startAdornment={<InputAdornment position="start"><SearchOutlinedIcon /></InputAdornment>}
           
          />
          </FormControl>
    </div>
  )
}

export default Search