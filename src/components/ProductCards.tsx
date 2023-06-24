import Image from 'next/image'
import { StaticImageData } from 'next/image'
import React from 'react'



export const ProductCards = (props: { title: string, price: number, img: StaticImageData }) => {
    return (
        <div className=''>
            <div className='flex flex-col justify-center items-center '>
                <Image placeholder='empty' className="max-h-[200px] object-cover object-top" src={props.img} alt="product" width={300} height={200} />

                <h3 className='font-bold text-lg mt-3'>{props.title}</h3>
                <p className='font-bold text-lg'>${props.price}</p>
            </div>
        </div>
    )
}
