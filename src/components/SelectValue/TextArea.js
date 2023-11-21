import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Textarea (props) {
  const { label, name, ...rest } = props
  return (
    <div className='mb-1'>
      <label  className=' text-pri-text block mb-2' htmlFor={name}>{label}</label>
      <Field as='textarea' className=' w-full border p-6 border-gray-300 rounded-lg'   id={name} name={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Textarea
