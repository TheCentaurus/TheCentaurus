import React from 'react'

function Button({name, onClick, bool}) {
  return (
    <>
    <button 
      className={bool ?' bg-primary-color w-full   px-4 py-2 border-none rounded-lg font-bold text-white': ' bg-primary-color   px-4 py-2 border-none rounded-lg font-bold text-white'}
      onClick={onClick}
      type='submit' 
     >{name}</button>   
    </>
  )
}

export default Button