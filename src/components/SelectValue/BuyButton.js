import React, {useState} from 'react'

function BuyButton({name}) {
    const [color, setColor] = useState(false)
  return (
    <div>
        <button onClick={() => setColor(!color)} className={color?' border-none rounded-[44px] bg-primary-color p-3 px-6 ': 'px-6 border-none rounded-[44px] bg-[#F5F7FA] p-3'}>
            {name}
        </button>
    </div>
  )
}

export default BuyButton