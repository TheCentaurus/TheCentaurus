import React from 'react'
import Check from '../../Assets/images/check.svg'
import Close from '../../Assets/images/close.svg'
function PassError({bool, text}) {
  return (
    <div>
        <p className={bool ? ' rounded-[28px] bg-[#FFDEDE] text-[10px] p-2 inline-block': ' rounded-[28px] bg-[#CCF2E1] text-[10px] inline-block p-2'}> { bool ? <> 
        <img src={Close} className=' inline-block' alt='Close'/> {text}
        </>: <>
        <img src={Check} className=' inline-block' alt='Check'/> {text}
        </>}</p>
    </div>
  )
}

export default PassError