import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Promotions = () => {
    return (
        <div>
            {/* first section*/}
            <div className='flex flex-col justify-center items-center'>
                <p className="leading-7 text-xs text-blue-700 font-bold [&:not(:first-child)]:mt-6">
                    PROMOTIONS
                </p>
                <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-4xl">
                    Our Promotions Events
                </h1>
            </div>
            {/* second section */}
            <div className='grid grid-cols-4 gap-x-2 '>
                <div className='col-span-2 flex flex-col justify-between gap-y-2  '>
                    <div className='flex justify-around bg-slate-400'>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='font-bold text-xl'>GET UP TO 60%</h1>
                            <h3 className='font-semibold text-lg'>For the summer season</h3>
                        </div>
                        <Image src={"/promotionImg1.webp"} alt="promo" width={200} height={100} />
                    </div>
                    <div className='h-[200px] bg-[#212121] flex flex-col justify-center items-center'>
                        <h1 className=" text-white scroll-m-20 text-2xl font-bold tracking-tight lg:text-4xl">
                            GET 30% Off
                        </h1>

                        <h3>USE PROMO CODE </h3>

                        <Button variant="secondary">DINEWEEKEDSALE</Button>
                    </div>
                </div>
                {/* Third section cols */}

                <div className=' bg-green-500 h-full'>
                    <h4>Flex Sweatshirt <span className='line-through'>$100.00</span> $75.00</h4>

                    <Image src={"/promotionImg2.webp"} alt="promo" width={200} height={300} />
                </div>
                <div className=' bg-green-500'>
                    <h4>Flex Push Button Bomber <span className='line-through'>$225.00</span> $190.00</h4>
                    <Image src={"/promotionImg3.webp"} alt="promo" width={200} height={300} />
                </div>
            </div>
        </div>
    )
}

export default Promotions