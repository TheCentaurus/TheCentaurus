import React from 'react'

function BlackButton({onClick, name}) {
  return (
    <>
    <button 
      className=' bg-back-color2 px-4 py-2 border-none rounded-lg font-bold text-white'
      onClick={onClick}
      type='submit' 
     >{name}</button>   
    </>
  )
}

export default BlackButton