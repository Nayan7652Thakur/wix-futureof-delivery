import React from 'react'
import { assets } from '../assets/assets'

const OurProduct = () => {
    return (
        <div className="bg-subtle-gradient relative pt-52 overflow-hidden text-black">
            {/* Top */}
            <div className="pl-24 mb-12 flex gap-14 flex-col">
                {/* Line */}
                <div className="w-full h-[2px] flex rounded-full overflow-hidden">
                    <div className="w-[10%] bg-black" />
                    <div className="w-[82%] bg-gray-300" />
                </div>

                <p className="text-md tracking-widest">OUR PRODUCT
                </p>

                <h1 className="text-5xl md:text-[82px] font-extralight leading-tight">
                    Fully Autonomous, <br />
                    Uncompromisingly Sustainable
                </h1>
            </div>


            {/* Bottom */}
            <div className='mx-2 sticky top-0 md:mx-12 bg-white shadow-2xl rounded-xl p-10 flex flex-col lg:flex-row gap-10'>

                {/* Vertical Line on Left */}
                <div className="hidden lg:flex flex-col justify-center pr-6">
                    <div className="relative w-px h-full bg-gray-300">
                        <div className="absolute top-0 left-0 w-full h-[40%] bg-black" />
                    </div>
                </div>

                {/* Left Info */}
                <div className='lg:w-1/2 pl-10'>
                    <p className='text-xl mb-6 font-semibold'>OPTIMIZED BATTERY EFFICIENCY</p>

                    <div className="mb-6">
                        <div className='flex gap-4 text-6xl font-light mb-2'>
                            <p>223</p>
                            <span className="text-sm mt-4">Mi Electric Range</span>
                        </div>

                        <hr className="my-4 border-gray-300" />

                        <div className='flex gap-4 text-6xl font-light'>
                            <p>30</p>
                            <span className="text-sm mt-4">Min to Fully Charge</span>
                        </div>
                    </div>

                    <p className='text-sm leading-relaxed mb-8'>
                        This is a space to share more about the business: who's behind it, what it does and what this site has to offer...
                    </p>

                    <button className='text-sm border-b border-black pb-1 hover:opacity-70'>READ MORE →</button>
                </div>

                {/* Right Image */}
                <div className='w-72 lg:w-1/2 flex justify-center items-center'>
                    <img
                        src={assets.homeImage2}
                        className='object-contain'
                    />
                </div>

            </div>


            {/* 2nd */}

            <div className='mx-2 md:mx-12 sticky top-0 bg-white shadow-2xl rounded-xl p-10 flex flex-col lg:flex-row gap-10'>

                {/* Vertical Line on Left */}
                <div className="hidden lg:flex flex-col justify-center pr-6">
                    <div className="relative w-px h-full bg-gray-300">
                        <div className="absolute top-0 left-0 w-full h-[40%] bg-black" />
                    </div>
                </div>

                {/* Left Info */}
                <div className='lg:w-1/2 pl-10'>
                    <p className='text-xl mb-6 font-semibold'>OPTIMIZED BATTERY EFFICIENCY</p>

                    <div className="mb-6">
                        <div className='flex gap-4 text-6xl font-light mb-2'>
                            <p>223</p>
                            <span className="text-sm mt-4">Mi Electric Range</span>
                        </div>

                        <hr className="my-4 border-gray-300" />

                        <div className='flex gap-4 text-6xl font-light'>
                            <p>30</p>
                            <span className="text-sm mt-4">Min to Fully Charge</span>
                        </div>
                    </div>

                    <p className='text-sm leading-relaxed mb-8'>
                        This is a space to share more about the business: who's behind it, what it does and what this site has to offer...
                    </p>

                    <button className='text-sm border-b border-black pb-1 hover:opacity-70'>READ MORE →</button>
                </div>

                {/* Right Image */}
                <div className='lg:w-1/2 flex justify-center items-center'>
                    <img
                        src={assets.homeImage2}
                        alt="Product"
                        className='object-contain'
                    />
                </div>

            </div>

            {/* 3rd  */}

            <div className='mx-2 md:mx-12 sticky top-0 bg-white shadow-2xl rounded-xl p-10 flex flex-col lg:flex-row gap-10'>

                {/* Vertical Line on Left */}
                <div className="hidden lg:flex flex-col justify-center pr-6">
                    <div className="relative w-px h-full bg-gray-300">
                        <div className="absolute top-0 left-0 w-full h-[40%] bg-black" />
                    </div>
                </div>

                {/* Left Info */}
                <div className='lg:w-1/2 pl-10'>
                    <p className='text-xl mb-6 font-semibold'>OPTIMIZED BATTERY EFFICIENCY</p>

                    <div className="mb-6">
                        <div className='flex gap-4 text-6xl font-light mb-2'>
                            <p>223</p>
                            <span className="text-sm mt-4">Mi Electric Range</span>
                        </div>

                        <hr className="my-4 border-gray-300" />

                        <div className='flex gap-4 text-6xl font-light'>
                            <p>30</p>
                            <span className="text-sm mt-4">Min to Fully Charge</span>
                        </div>
                    </div>

                    <p className='text-sm leading-relaxed mb-8'>
                        This is a space to share more about the business: who's behind it, what it does and what this site has to offer...
                    </p>

                    <button className='text-sm border-b border-black pb-1 hover:opacity-70'>READ MORE →</button>
                </div>

                {/* Right Image */}
                <div className='lg:w-1/2 flex justify-center items-center'>
                    <img
                        src={assets.homeImage2}
                        alt="Product"
                        className='object-contain'
                    />
                </div>

            </div>

        </div>
    )
}

export default OurProduct