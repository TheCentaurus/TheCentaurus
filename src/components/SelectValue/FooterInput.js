import React from 'react'
import Button from './Button'

function FooterInput() {
  return (
    <div className=' block md:flex '>
        <input
            placeholder='Email address'
            className=' p-4 w-full bg-[#FAFBFC] rounded-lg '
        />
        <div className=' pt-3 md:pt-0 pr-3'></div>
        <Button
            name='Subscribe'
        />
    </div>
  )
}

export default FooterInput