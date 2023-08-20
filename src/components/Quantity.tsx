'use client'
import React, { useState } from 'react'

const Quantity = () => {

    const [items, setItems] = useState(1);
    return (
        <div className='flex gap-x-5 items-center'>
            <button onClick={() => { setItems(items >= 1 ? items - 1 : items) }} className='h-5 w-5 border rounded-full flex justify-center items-center'>
                -
            </button>
            <span>{items}</span>
            <button onClick={() => { setItems(items + 1) }} className=' h-5 w-5 border border-ring ring-offset-2  ring-offset-black border-black rounded-full flex justify-center items-center'>+</button>
        </div>
    )
}

export default Quantity