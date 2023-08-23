import { ShoppingBag } from 'lucide-react'
import React from 'react'

const ShoppingCart = () => {
    return (
        <div>
            <div className='my-20 mx-10 justify-start text-3xl font-extrabold'>
                <h2> Shopping Cart</h2>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='my-8 mx-8'>
                    <ShoppingBag size={40} />
                </div>
                <div className='items-center font-extrabold text-3xl text-black'>
                    Your shopping bag is empty
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart