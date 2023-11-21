import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Field, ErrorMessage } from 'formik'
import React from 'react'
import TextError from './TextError';
function Phonenumber(props) {
    const { label, name, ...rest } = props 
  return (
    <div>
    <label className=' mb-2 block'> {label}</label>
    <Field name={name}>
    {({ field, form }) => ( 
        <FormControl isInvalid={form.errors[name] && form.touched[name]} className=' w-full mt-2  rounded-lg border border-gray-300' >
      <OutlinedInput 
        variant="outlined"
        className='  p-px'
        {...field}
        {...rest}
        startAdornment={
          <InputAdornment position="start">
              +234
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

export default Phonenumber