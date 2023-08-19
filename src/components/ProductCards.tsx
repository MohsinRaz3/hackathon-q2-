import Image from 'next/image'
import { StaticImageData } from 'next/image'
import React from 'react'
import Link from "next/link"
import AddToCart from './AddToCart'
import { urlForImage } from '../../sanity/lib/image'



export const ProductCards = (productCardItem: any) => {
    const data = productCardItem.productCardItem.item;

    console.log("fdsfsdfssssssssss", data);


    return (
        <div className=''>
            <div className='flex flex-col justify-center items-center '>
                <Link href={`/products/${data?._id}`}>
                    {/* <Image placeholder='empty' className="max-h-[200px] object-cover object-top" src={urlForImage(data.image).url()} alt="product" width={300} height={200} /> */}
                    <h3 className='font-bold text-lg mt-3'>{data.title}</h3>
                    <h3 className='font-bold text-lg mt-3'>{data?.category.name}</h3>
                    <p className='font-bold text-lg'>${data.price}</p>
                </Link>
                <AddToCart />
            </div>
        </div>
    )
}

