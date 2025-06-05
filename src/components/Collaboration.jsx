import React from 'react'
import { partnersImage } from '../assets/assets'

const Collaboration = () => {
    return (
        <div className="bg-subtle-gradient relative pt-52 overflow-hidden text-black">
            {/* Top */}
            <div className="pl-24 mb-12 flex gap-14 flex-col">
                {/* Line */}
                <div className="w-full h-[2px] flex rounded-full overflow-hidden">
                    <div className="w-[10%] bg-black" />
                    <div className="w-[82%] bg-gray-300" />
                </div>

                <p className="text-md tracking-widest">
                    COLLABORATION
                </p>

                <h1 className="text-5xl md:text-[82px] font-extralight leading-tight">
                    Our Industry Partners
                </h1>
            </div>


            <div className='flex flex-col lg:items-end lg:mr-10'>
                <div className='grid grid-cols-2 p-10 gap-4 sm:gap-8 lg:w-[980px]'>
                    <div className='bg-white rounded-xl p-1'>
                        <img src={partnersImage.partnersImage1} alt="" />
                    </div>
                    <div className='bg-white rounded-xl p-1'>
                        <img src={partnersImage.partnersImage2} alt=""/>
                    </div>
                    <div className='bg-white rounded-xl p-1'>
                        <img src={partnersImage.partnersImage3} alt=""/>
                    </div>
                    <div className='bg-white rounded-xl p-1'>
                        <img src={partnersImage.partnersImage4} alt=""/>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Collaboration