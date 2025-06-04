import React from 'react'
import { assets } from "../assets/assets"

const SecondSec = () => {
    return (
        <div className="bg-black pt-52 overflow-hidden text-white">
            {/* Top */}
            <div className="pl-24 flex gap-14 flex-col">
                {/* Line */}
                <div className="w-full h-[2px] flex rounded-full overflow-hidden">
                    <div className="w-[10%] bg-white" />
                    <div className="w-[82%] bg-gray-500" />
                </div>

                <p className="text-sm tracking-widest">VISION</p>

                <h1 className="text-5xl md:text-7xl leading-tight">
                    We're Here to Revolutionize the <br /> World of Local Shipping
                </h1>
            </div>

            {/* Bottom */}
            {/* Bottom */}
            <div className="mt-20 flex flex-col lg:flex-row justify-between items-center gap-12">
                {/* Left */}
                <div className="max-w-md pl-24">
                    <p className="text-md w-[406px] leading-relaxed mt-40">
                        This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what this site has to offer.
                    </p>
                </div>

                {/* Right */}
                <div className="flex justify-center w-full lg:w-auto">
                    <img
                        src={assets.homeImage1}
                        alt="image"
                        className="w-[500px] md:w-[700px] lg:w-[760px] object-cover"
                    />
                </div>
            </div>

        </div>
    )
}

export default SecondSec
