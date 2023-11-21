import React from 'react'
import CheckboxGroup from './CheckBoxGroup'
import DatePicker from './DatePicker'
import Input from './InputField'
import PasswordField from './PasswordField'
import Phonenumber from './Phonenumber'
import PinField from './PinField'
import Select from './Select'
import Textarea from './TextArea'


function FormikControl(props) {
    const { control, ...rest } = props
  switch(control){
    case 'input':
        return <Input {...rest}/>
    case 'textarea':
        return <Textarea {...rest}/>
    case 'select':
        return <Select {...rest}/>
    case 'date':
        return <DatePicker {...rest} />
    case 'password':
         return <PasswordField {...rest}/>
    case 'checkbox':
          return <CheckboxGroup {...rest}/>
    case 'pin':
          return <PinField {...rest}/>
    case 'number':
            return <Phonenumber {...rest}/>
        default:
      return null
  }
}

export default FormikControl