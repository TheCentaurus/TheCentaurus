import React from 'react'
import PinInput from 'react-pin-input';
import { Field } from 'formik'
function PinField(props) {
    const { label, name, num, ...rest } = props
  return (
    <div>
        <label className='  block'> {label}</label>
        <Field name={name}>
        {({ field, form }) => (
            <PinInput 
                length={num} 
                id={name} 
                {...rest}
                 {...field}
                // type="numeric" 
                inputMode="number"
                style={{padding: '8px'}}  
                inputStyle={{borderColor: 'gray', borderRadius: 8}}
                inputFocusStyle={{borderColor: 'blue'}}
                
                />
        )}
        </Field>
    </div>
  )
}

export default PinField