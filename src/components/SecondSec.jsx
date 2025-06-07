import React from 'react'
import { assets } from "../assets/assets"

const SecondSec = () => {
    return (
        <div className="bg-black pt-14 sm:pt-20 md:pt-52 lg:pt-32 overflow-hidden text-white">
            {/* Top */}
            <div className="pl-6 sm:pl-10 lg:pl-16 flex gap-7 lg:gap-14 flex-col">
                {/* Line */}
                <div className="w-full h-[2px] flex rounded-full overflow-hidden">
                    <div className="w-[10%] bg-white" />
                    <div className="w-[82%] bg-gray-500" />
                </div>

                <p className="text-sm sm:text-lg tracking-widest">VISION</p>

                <h1 className="text-4xl w-[358px] sm:w-[480px] md:w-[680px] lg:w-[1000px] sm:text-6xl lg:text-6xl xl:text-7xl  xl:w-[1200px] leading-tight">
                    We're Here to Revolutionize the World of Local Shipping
                </h1>
            </div>

            {/* Bottom */}
            {/* Bottom */}
            <div className="mt-14 md:mt-20 sm:mt-20 flex flex-col lg:flex-row justify-between gap-12">
                {/* Left */}
                <div className="flex flex-col md:justify-end md:pl-12 md:items-end">
                    <p className="text-md leading-relaxed lg:mt-40 ml-8 sm:ml-12 sm:pr-7 md:w-[380px] md:mr-14 lg:mr-0 lg:mb-14 lg:ml-16 xl:ml-32">
                        This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what this site has to offer.
                    </p>
                </div>

                {/* Right */}
                {/* Right */}
                <div className="w-full lg:w-auto lg:flex lg:justify-end lg:pr-0">
                    <img
                        src={assets.homeImage1}
                        alt="image"
                        className="w-full md:w-[700px] lg:w-[760px] object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default SecondSec
