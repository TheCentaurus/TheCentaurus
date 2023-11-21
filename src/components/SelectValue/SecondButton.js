import React from 'react'

function SecondButton({name, onClick}) {
  return (
    <>
    <button 
     className='  border border-button-color bg-white  hover:border-white px-4 md:py-4 py-3  rounded-lg text-button-color'
     onClick={onClick}
     type='submit'
    >{name}</button>   
   </>
  )
}

export default SecondButton