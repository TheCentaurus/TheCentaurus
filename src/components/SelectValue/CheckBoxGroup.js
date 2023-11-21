import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function CheckboxGroup (props) {
  const { label, name, options, ...rest } = props
  return (
    <div className=' mb-3   '>
      <label className=' text-black block mb-2'>{label}</label>
      <div className='grid  md:grid-cols-5 gap-4 border border-gray-300 rounded-lg p-3'>
      <Field name={name} className=' '>
     
     {({ field }) => {
       return options.map(option => {
         return (
           <div className=' flex w-full ' key={option.key}>
           
             <input
               type='checkbox'
               className=' '
               id={option.value}
               {...field}
               {...rest}
               value={option.value}
               checked={field.value.includes(option.value)}
             />
             <label className=' inline pl-3 w-full text-sm text-[#1A1A1A]' htmlFor={option.value}>{option.key}</label>
           </div>
         )
       })
     }}
    
   </Field>
      </div>
     
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default CheckboxGroup
