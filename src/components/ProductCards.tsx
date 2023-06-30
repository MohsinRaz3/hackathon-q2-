import Image from 'next/image'
import { StaticImageData } from 'next/image'
import React from 'react'
import Link from "next/link"



export const ProductCards = (props: { id: number, name: string, price: number, category: string, image: StaticImageData }) => {
    return (
        <div className=''>
            <div className='flex flex-col justify-center items-center '>
                <Link href={`/products/${props.id}`}>
                    <Image placeholder='empty' className="max-h-[200px] object-cover object-top" src={props.image} alt="product" width={300} height={200} />
                    <h3 className='font-bold text-lg mt-3'>{props.name}</h3>
                    <h3 className='font-bold text-lg mt-3'>{props.category}</h3>
                    <p className='font-bold text-lg'>${props.price}</p>
                </Link>
            </div>
        </div>
    )
}

