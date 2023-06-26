import React from 'react'
import logo from '/public/Logo.webp'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from "lucide-react"

export const Header = () => {
    return (
        <>
            <div className='flex mt-3 items-center justify-between px-8 pb-8 gap-5 ' >
                <Image src={logo} alt="logo" className='w-40 ' />
                <ul className='flex items-center gap-6'>
                    <Link className='text-lg' href={"category/male"}>   <li>Male</li></Link>
                    <Link className='text-lg' href={"category/female"}><li>Female</li></Link>
                    <Link className='text-lg' href={"category/kids"}> <li>Kids</li></Link>
                    <Link className='text-lg' href={"/products"}><li>All products</li></Link>
                </ul>
                <p className='h-15 w-15 flex items-center justify-center rounded-full'>
                    <ShoppingCart />
                </p>
            </div>
        </>

    )
}
