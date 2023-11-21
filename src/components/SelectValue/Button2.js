import React from 'react'

function Button2({onClick, name}) {
  return (
    <>
      <button 
      className=' bg-back-color2 px-16 py-3 border-none rounded-lg text-white'
      onClick={onClick}
      type='submit' 
     >{name}</button>   
    </>
  )
}

export default Button2