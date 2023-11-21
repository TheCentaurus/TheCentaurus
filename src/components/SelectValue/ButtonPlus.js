import React from 'react'
import AddIcon from '@mui/icons-material/Add';
function ButtonPlus({onClick, name}) {
  return (
    <>
    <button 
      className=' bg-primary-color   px-4 py-3 border-none rounded-lg font-bold text-white'
      onClick={onClick}
      type='submit' 
     >{name} <AddIcon/></button>   
    </>
  )
}

export default ButtonPlus