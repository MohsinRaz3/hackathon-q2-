import Image from 'next/image'
import React from 'react'
import Link from "next/link"
import { urlForImage } from '../../sanity/lib/image'
import { IIProduct } from '@/utils/types'


export const ProductCards = (pro: any) => {
    const data: IIProduct = pro.item
    //  console.log("fdsfsdfssssssssss", data);


    return (
        <div className=''>
            <div className='flex flex-col justify-center items-center '>
                <Link href={`/products/${data?._id}`}>
                    <Image placeholder='empty' className="max-h-[200px] object-cover object-top" src={urlForImage(data.image).url()} alt="product" width={300} height={200} />
                    <div className='flex justify-between'>
                        <div className='flex flex-col justify-around'>
                            <h3 className='font-bold text-lg mt-3'>{data?.title}</h3>
                            <p className='font-bold text-lg'>${data?.price}</p>

                        </div>
                        <h3 className='font-medium text-sm mt-3'>{data?.category?.name}</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}

