'use client'
import React from 'react'
import logo from '/public/Logo.webp'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { Menu, ShoppingCart } from "lucide-react"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

export const Header = () => {
    const cartValue = useSelector((state: RootState) => state.cart.totalQuantity);
    return (
        <>
            <div className='flex mt-3 items-center justify-between px-8 pb-8 gap-5 ' >
                <Link href={"/"}>
                    <Image src={logo} alt="logo" className='w-40 ' />
                </Link>
                <ul className='md:flex  md:items-center gap-6 hidden'>
                    <Link className='text-lg' href={"category/male"}>   <li>Male</li></Link>
                    <Link className='text-lg' href={"category/female"}><li>Female</li></Link>
                    <Link className='text-lg' href={"category/kids"}> <li>Kids</li></Link>
                    <Link className='text-lg' href={"products"}><li>All products</li></Link>
                </ul>
                <p className='relative h-15 w-15 md:flex md:items-center md:justify-center rounded-full hidden '>
                    <span className='absolute right-1 top-0 rounded-full bg-red-500 h-5 w-5 text-white text-center text-sx'>{cartValue}</span><ShoppingCart />
                </p>

                <div className='md:hidden'>
                    <Sheet>
                        <SheetTrigger><Menu className='h-8 w-8' /></SheetTrigger>
                        <SheetContent className='bg-slate-400 flex justify-center items-center'>
                            <div>
                                <ul className='flex flex-col items-center gap-6 '>
                                    <Link className='text-lg' href={"category/male"}> <li>Male</li></Link>
                                    <Link className='text-lg' href={"category/female"}><li>Female</li></Link>
                                    <Link className='text-lg' href={"category/kids"}> <li>Kids</li></Link>
                                    <Link className='text-lg' href={"products"}><li>All products</li></Link>
                                </ul>
                                <p className='relative h-15 w-15 md:flex md:items-center md:justify-center rounded-full hidden '>
                                    <span className='absolute right-1 top-0 rounded-full bg-red-500 h-5 w-5 text-white text-center text-sx'>{cartValue}</span><ShoppingCart />
                                </p>
                            </div>
                        </SheetContent>
                    </Sheet>

                </div>

            </div>


        </>

    )
}
