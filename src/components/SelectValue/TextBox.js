import React from 'react'
import { TextField } from '@mui/material'

export default function TextBox({value, onChange, label, type, bool}) {
  return (
    <div>
       <label className=' block mb-2'>{label}</label> 
       <TextField 
       id="outlined-basic"
        variant="outlined"
        value= {value}
        onChange={(e) => onChange(e.target.value)} 
        required
        type={type}
        className= ' w-full  border  rounded-md p-px' 
         />
     
    </div>
  )
}
