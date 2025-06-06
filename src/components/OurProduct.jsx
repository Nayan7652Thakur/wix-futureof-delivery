import React from 'react'
import { assets } from '../assets/assets'

const OurProduct = () => {
    return (
        <div className="bg-subtle-gradient relative mt-20 lg:mt-14 lg:pt-52 overflow-hidden text-black">
            {/* Top */}
            <div className="ml-6 lg:pl-24 mb-12 flex gap-7 lg:gap-14 flex-col">
                {/* Line */}
                <div className="w-full h-[2px] flex rounded-full overflow-hidden">
                    <div className="w-[10%] bg-black" />
                    <div className="w-[82%] bg-gray-300" />
                </div>

                <p className="text-md tracking-widest">
                    OUR PRODUCT
                </p>

                <h1 className="text-4xl md:text-6xl">
                    Fully Autonomous,
                    Uncompromisingly Sustainable
                </h1>
            </div>


            {/* Bottom */}

            <div className='flex flex-col gap-4'>
                <div className='mx-3 md:mx-12 bg-white shadow-2xl rounded-xl pl-3 lg:p-10 flex gap-2 lg:gap-10'>
                    <div className="flex flex-col justify-center p-2 lg:pl-4">
                        <div className="relative w-px h-full bg-gray-300">
                            <div className="absolute top-0 left-0 w-full h-[40%] bg-black" />
                        </div>
                    </div>

                    {/* Left Info — Centered vertically */}
                    <div className='flex flex-col lg:flex-row'>
                        <div className='lg:w-1/2 flex flex-col justify-center pl-3 lg:pl-10'>
                            <p className='text-md mb-6 mt-4'>OPTIMIZED BATTERY EFFICIENCY</p>

                            <div className="mb-6">
                                <div className='flex gap-4 mb-2'>
                                    <p className='text-4xl sm:text-6xl'>223 Mi</p>
                                    <span className="text-lg mt-4">Electric Range</span>
                                </div>

                                <hr className="my-4 border-gray-300" />

                                <div className='flex gap-4 '>
                                    <p className='text-4xl sm:text-6xl'>30 Min</p>
                                    <span className="text-sm mt-4"> Fully Charge</span>
                                </div>
                            </div>

                            <p className='text-md leading-relaxed mb-4 lg:mb-11'>
                                This is a space to share more about the business: who's behind it, what it does and what this site has to offer. It’s an opportunity to tell the story behind the business or describe a special service or product it offers. You can use this section to share the company history or highlight a particular feature that sets it apart from competitors.
                            </p>

                            <button className="w-40 md:w-[261px] flex justify-between items-center border-b border-black pb-1 hover:opacity-70">
                                <span>READ MORE</span>
                                <span>→</span>
                            </button>
                        </div>
                        {/* Right Image */}

                        <div className='w-72 lg:w-1/2 flex justify-center items-center'>
                            <img
                                src={assets.homeImage2}
                                className='object-contain'
                            />
                        </div>

                    </div>
                </div>


                {/* 2nd  */}
                <div className='mx-3 md:mx-12 bg-white shadow-2xl rounded-xl pl-3 lg:p-10 flex gap-2 lg:gap-10'>
                    <div className="lg:hidden flex flex-col justify-center p-2 lg:pl-4">
                        <div className="relative w-px h-full bg-gray-300">
                            <div className="absolute top-0 left-0 w-full h-[40%] bg-black" />
                        </div>
                    </div>

                    {/* Left Info — Centered vertically */}
                    <div className='flex flex-col lg:flex-row'>
                        <div className='lg:w-1/2 flex flex-col justify-center pl-3 lg:pl-10'>
                            <p className='text-md mb-6 mt-4'>COMPACT</p>

                            <div className="mb-6">
                                <div className='flex gap-4 mb-2'>
                                    <p className='text-4xl sm:text-6xl'>50 Kg</p>
                                    <span className="text-lg mt-4">Payload Capacity</span>
                                </div>

                                <hr className="my-4 border-gray-300" />

                                <div className='flex gap-4 '>
                                    <p className='text-4xl sm:text-6xl'>60 Liter</p>
                                    <span className="text-sm mt-4"> Storage Compartment</span>
                                </div>
                            </div>

                            <p className='text-md leading-relaxed mb-4 lg:mb-11'>
                                This is a space to share more about the business: who's behind it, what it does and what this site has to offer. It’s an opportunity to tell the story behind the business or describe a special service or product it offers. You can use this section to share the company history or highlight a particular feature that sets it apart from competitors.
                            </p>

                            <button className="w-40 md:w-[261px] flex justify-between items-center border-b border-black pb-1 hover:opacity-70">
                                <span>READ MORE</span>
                                <span>→</span>
                            </button>
                        </div>
                        {/* Right Image */}
                        <div className='w-72 lg:w-1/2 flex justify-center items-center'>
                            <img
                                src={assets.homeImage3}
                                className='object-contain'
                            />
                        </div>
                    </div>
                    <div className="hidden lg:flex flex-col justify-center p-2 lg:pl-4">
                        <div className="relative w-px h-full bg-gray-300">
                            <div className="absolute top-0 left-0 w-full h-[40%] bg-black" />
                        </div>
                    </div>
                </div>

                {/* 3rd  */}

                <div className='mx-3 md:mx-12 bg-white shadow-2xl rounded-xl pl-3 lg:p-10 flex gap-2 lg:gap-10'>
                    <div className="flex flex-col justify-center p-2 lg:pl-4">
                        <div className="relative w-px h-full bg-gray-300">
                            <div className="absolute top-0 left-0 w-full h-[40%] bg-black" />
                        </div>
                    </div>

                    {/* Left Info — Centered vertically */}
                    <div className='flex flex-col lg:flex-row'>
                        <div className='lg:w-1/2 flex flex-col justify-center pl-3 lg:pl-10'>
                            <p className='text-md mb-6 mt-4'>ADVANCED SENSOR TECHNOLOGY</p>

                            <div className="mb-6">
                                <div className='flex gap-4 mb-2'>
                                    <p className='text-4xl sm:text-6xl'>360°</p>
                                    <span className="text-lg mt-4">Sensors coverage</span>
                                </div>

                                <hr className="my-4 border-gray-300" />

                                <div className='flex gap-4 '>
                                    <p className='text-4xl sm:text-6xl'>85%</p>
                                    <span className="text-sm mt-4">Improved Reaction Time</span>
                                </div>
                            </div>

                            <p className='text-md leading-relaxed mb-4 lg:mb-11'>
                                This is a space to share more about the business: who's behind it, what it does and what this site has to offer. It’s an opportunity to tell the story behind the business or describe a special service or product it offers. You can use this section to share the company history or highlight a particular feature that sets it apart from competitors.
                            </p>

                            <button className="w-40 md:w-[261px] flex justify-between items-center border-b border-black pb-1 hover:opacity-70">
                                <span>READ MORE</span>
                                <span>→</span>
                            </button>
                        </div>
                        {/* Right Image */}
                        <div className='w-72 lg:w-1/2 flex justify-center items-center'>
                            <img
                                src={assets.homeImage4}
                                className='object-contain'
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurProduct