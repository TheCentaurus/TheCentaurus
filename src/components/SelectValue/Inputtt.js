import React from 'react'

function Inputtt({placeholder, value, label, onChange}) {
  return (
    <div className=' w-full'>
    <label className=' text-[14px] mb-3 block'>{label}</label>
        <input 
            className=' w-full bg-[#F7F8FB] border outline-0 p-3 rounded-lg'
            placeholder={placeholder}
            value={value}
            required
            onChange={(e) => onChange(e.target.value)}
            text='text'
        />
    </div>
  )
}

export default Inputtt