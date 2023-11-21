import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Input (props) {
  const { label, name, ...rest } = props
  return (
    <div className='mb-4 w-full'>
      <label className=' text-black block mb-2' htmlFor={name}>{label}</label>
      <Field id={name} className=' w-full border rounded-lg bg-[#FAFBFC]  p-4' name={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}


export default Input
