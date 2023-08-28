'use client'
import React from 'react'
import logo from '/public/Logo.webp'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, ShoppingCart } from "lucide-react"
import { SignInButton, UserButton } from "@clerk/nextjs";
import { useAuth } from '@clerk/nextjs';

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '../../components/ui/sheet'

export const Header = () => {
    const { isSignedIn } = useAuth();
    return (
        <>
            <div className='flex mt-3 items-center justify-between px-8 pb-8 gap-5 ' >
                <Link href={"/"}>
                    <Image src={logo} alt="logo" className='w-40 ' />
                </Link>
                <ul className='md:flex  md:items-center gap-6 hidden'>
                    <Link className='text-lg' href={"category/Male"}>   <li>Male</li></Link>
                    <Link className='text-lg' href={"category/Female"}><li>Female</li></Link>
                    <Link className='text-lg' href={"category/Kids"}> <li>Kids</li></Link>
                    <Link className='text-lg' href={"products"}><li>All products</li></Link>

                    <div className='px-6 bg-red-300 rounded-full'>
                        {
                            (!isSignedIn && (
                                <SignInButton mode='modal'>
                                    <button> Sign In</button>
                                </SignInButton>

                            ))
                        }
                        <UserButton afterSignOutUrl='/' />
                    </div>
                </ul>
                <Link href={"cart"} className='relative h-15 w-15 md:flex md:items-center md:justify-center rounded-full hidden '>
                    <span className='absolute right-1 top-0 rounded-full bg-red-500 h-5 w-5 text-white text-center text-sx'>{3}</span><ShoppingCart />
                </Link>


                <div className='md:hidden'>
                    <Sheet>
                        <SheetTrigger><Menu className='h-8 w-8' /></SheetTrigger>
                        <SheetContent className='bg-slate-400 flex justify-center items-center'>
                            <div>
                                <ul className='flex flex-col items-center gap-6 '>
                                    <Link className='text-lg' href={"category/Male"}> <li>Male</li></Link>
                                    <Link className='text-lg' href={"category/Female"}><li>Female</li></Link>
                                    <Link className='text-lg' href={"category/Kids"}> <li>Kids</li></Link>
                                    <Link className='text-lg' href={"products"}><li>All products</li></Link>
                                    <div className='px-6 bg-red-300 rounded-full'>
                                        {
                                            (!isSignedIn && (
                                                <SignInButton mode='modal'>
                                                    <button> Sign In</button>
                                                </SignInButton>

                                            ))
                                        }
                                        <UserButton afterSignOutUrl='/' />
                                    </div>
                                </ul>
                                <Link href={"cart"} className='relative h-15 w-15 md:flex md:items-center md:justify-center rounded-full hidden '>
                                    <span className='absolute right-1 top-0 rounded-full bg-red-500 h-5 w-5 text-white text-center text-sx'>{ }</span><ShoppingCart />
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>

                </div>

            </div>


        </>

    )
}
