import React from 'react'
import CartValues from '@/components/CartValues';
import { cookies } from 'next/headers'

export default async function CartItems() {

    const setCookies = cookies()
    const uid = setCookies.get("user_id")?.value

    const res = await fetch(`http://localhost:3000/api/cart?user_id=${uid}`)
    const data = await res.json();

    return (
        (!data) ? (<CartValues />)
            : (<div className='flex justify-center items-center'>
                <div className='my-10 mx-10 flex flex-col gap-y-6 justify-start '>
                    <h2 className='text-3xl font-extrabold'> Shopping Cart</h2>
                    <div className='flex flex-col gap-14 '>
                        {data.map((item: any) => (
                            <div className='flex gap-3'>
                                <img src={item.image_url} className='gap-x-3 w-40 h-40' alt="products" width={300} height={300} />
                                <div className='flex flex-col gap-x-3'>

                                    <h1 className='text-2xl font-bold'> {item.product_title}</h1>
                                    <h1 className='text-xl font-medium'>Price: {item.product_price}</h1>
                                    <h1 className='text-xl font-normal'>Quantity: {item.product_quantity}</h1>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col justify-start gap-y-3 items-center w-fit ml-auto'>
                    <h3 className='text-2xl font-bold pr-10 '> Order summary</h3>
                    <h5 className='text-lg flex items-center justify-between w-full'>Quantity  {1}  <span className='pl-8 ml-5'>Product</span></h5>
                    <div className='flex items-center justify-between w-full'>
                        <h5 className='text-lg '>subtotal { }  </h5>
                        <h5>122</h5>
                    </div>


                </div>

            </div >)
    )
}

