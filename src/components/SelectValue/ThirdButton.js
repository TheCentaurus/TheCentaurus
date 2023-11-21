import React from 'react'

function ThirdButton({name, onClick}) {
  return (
    <>
    <button 
     className=' text-primary-color  font-medium border-2  border-gray-200 rounded-lg  px-5 py-2 text-center mr-3 md:mr-0'
     onClick={onClick}
     type='submit'
    >{name}</button>   
   </>
  )
}

export default ThirdButton