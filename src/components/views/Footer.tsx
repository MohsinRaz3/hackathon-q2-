import { Facebook, Linkedin, Twitter } from 'lucide-react'
import React from 'react'


const Footer = () => {
    return (
        <section>
            <div className=' flex  bg-gray-50 h-1/2 w-full md:flex-row flex-col justify-around items-start p-20'>
                <div className='flex-grow p-5 '>
                    <ul>
                        <p className='text-gray-600 font-normal text-lg pb-6 flex-wrap'>
                            Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
                        </p>
                        <div className='flex gap-6 pb-5'>
                            <div className='bg-gray-200 p-2 rounded-xl'><Twitter strokeWidth={0.75} fill="black" className='text-2xl cursor-pointer hover:blue-600' /></div>
                            <div className='bg-gray-200 p-2 rounded-xl'><Facebook strokeWidth={0.75} fill="black" className='text-2xl cursor-pointer hover:blue-600' /></div>
                            <div className='bg-gray-200 p-2 rounded-xl'><Linkedin strokeWidth={0.75} fill="black" className='text-2xl cursor-pointer hover:blue-600' /></div>


                        </div>
                    </ul>
                </div>
                <div className='p-5 flex-1'>
                    <ul>
                        <p className='text-gray-600 bont-bold text-2xl pb-4'>Company</p>
                        <li className='text-gray-500 text-md pb-2 font-normal hover:text-blue-600 cursor-pointer'>About</li>
                        <li className='text-gray-500 text-md pb-2 font-normal hover:text-blue-600 cursor-pointer'>Terms of Use</li>
                        <li className='text-gray-500 text-md pb-2 font-normal hover:text-blue-600 cursor-pointer'>Privacy Policy</li>
                        <li className='text-gray-500 text-md pb-2 font-normal hover:text-blue-600 cursor-pointer'>How it Works</li>
                        <li className='text-gray-500 text-md pb-2 font-normal hover:text-blue-600 cursor-pointer'>Contact Us</li>
                    </ul>
                </div>
                <div className='p-5 flex-1'>
                    <ul>
                        <p className='text-gray-600 bont-bold text-2xl pb-4'>Support</p>
                        <li className='text-gray-500 text-md pb-2 font-normal hover:text-blue-600 cursor-pointer'>Support Carrer</li>
                        <li className='text-gray-500 text-md pb-2 font-normal hover:text-blue-600 cursor-pointer'>24h Service</li>
                        <li className='text-gray-500 text-md pb-2 font-normal hover:text-blue-600 cursor-pointer'>Quick Chat</li>

                    </ul>
                </div>

                <div className='p-5 flex-1'>
                    <ul>
                        <p className='text-gray-600 bont-bold text-2xl pb-4'>Contact</p>
                        <li className='text-gray-500 text-md pb-2 font-normal hover:text-blue-600 cursor-pointer'>Whatsapp</li>
                        <li className='text-gray-500 text-md pb-2 font-normal hover:text-blue-600 cursor-pointer'>Support 24h</li>

                    </ul>
                </div>
            </div>
            <hr className='h-px my-2 bg-gray-600 border-0 dark:bg-gray-700' />
            <div className='flex my-5 justify-around'>
                <div className='text-gray-500'>Copyright &copy;2023 Dine Market</div>
                <div className='text-gray-500'> Design by. <span className='text-lg font-bold text-black'>Weirdo Design Studio</span></div>
                <div className='text-gray-500'> Code by. <span className='text-lg font-bold text-black'>Mohsin Raz</span></div>
            </div>
        </section>

    )
}

export default Footer