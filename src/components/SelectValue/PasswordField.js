import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Field, ErrorMessage } from 'formik'
import React, {useState} from 'react'
import TextError from './TextError';
function PasswordField(props) {
    const { label, name, ...rest } = props
    const [values, setValues] = useState(false)
    
    const handleClickShowPassword = () =>{
        setValues(!values)
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
  return (
    <div>
    <label className=' mb-2 block'> {label}</label>
    <Field name={name}>
    {({ field, form }) => ( 
        <FormControl isInvalid={form.errors[name] && form.touched[name]} className=' w-full mt-2 bg-[#FAFBFC] rounded-lg ' >
      
      <OutlinedInput 
        variant="standard"
        className=' rounded-lg  p-px'
        type={values ? 'text' : 'password'}
        {...field}
        {...rest}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      
       />
       
    </FormControl>

    )}
    </Field>
    <ErrorMessage component={TextError} name={name} />
    
</div>
  )
}

export default PasswordField