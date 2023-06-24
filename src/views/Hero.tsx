import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import heroImg from "/public/heroimg.webp"
import React from 'react'

const Hero = () => {
    return (
        <section className='flex flex-col gap-y-10 md:flex-row'>
            <div className="flex-1">
                <Badge className="py-3 px-6 bg-blue-200 text-blue-700 hover:bg-blue-200 rounded-xl" variant="outline">
                    Sale 70%
                </Badge>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
                    An Industrial Take On Streetwear
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    One day, his advisors came to him
                    with a problem: the kingdom was running out of money.
                </p>
                <Button className='bg-black text-white h-12 px-8 mt-4 '><ShoppingCart className='m-2' /> Start Shopping </Button>
            </div>

            <div className=" flex-1 ">
                <Image src={heroImg} alt="logo" />

            </div>
        </section>
    )
}

export default Hero