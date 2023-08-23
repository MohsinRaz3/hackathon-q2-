'use client'
import React, { useState } from 'react'

const Quantity = ({ price }: { price: number }) => {

    const [items, setItems] = useState(1);

    return (
        <div>
            <div className='flex gap-x-5 items-center '>
                <span className="text-2xl font-bold">Quantity: </span>
                <button onClick={() => { setItems(items >= 1 ? items - 1 : items) }} className='h-5 w-5 border rounded-full flex justify-center items-center'>
                    -
                </button>
                <span>{items}</span>

                <button onClick={() => { setItems(items + 1) }} className=' h-5 w-5 border border-ring ring-offset-2  ring-offset-black border-black rounded-full flex justify-center items-center'>+</button>


            </div>
            <div className='my-5 px-5'>
                <span className='font-bold text-lg'>Price:   ${items * price} </span>
            </div>
        </div>
    )
}

export default Quantity