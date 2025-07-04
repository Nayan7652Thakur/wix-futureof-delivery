import React from 'react'
import { video } from '../assets/assets'

const Company = () => {
    return (
        <div className='bg-black text-white pt-36 md:pr-11'>
            <div className='ml-6 md:ml-10 ml:pl-24 flex flex-col gap-11'>
                <div className="w-full h-[2px] flex rounded-full overflow-hidden">
                    <div className="w-[40%] bg-white" />
                    <div className="w-[82%] bg-gray-500" />
                </div>
                <p className='text-xl'>COMPANY</p>
                <h1 className='text-4xl md:text-6xl lg:text-7xl lg:w-10/12'>Volaso in Numbers</h1>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 text-white pl-6 md:pl-11 lg:pl-24 mt-16'>
                {/* Card */}
                <div className=''>
                    <p className='text-4xl md:text-6xl'>247</p>
                    <div className="w-full h-[2px] my-4 flex rounded-full overflow-hidden">
                        <div className="w-[70%] bg-white" />
                        <div className="w-[90%] bg-gray-500" />
                    </div>
                    <p className='text-md'>Employees</p>
                </div>

                <div className=''>
                    <p className='text-4xl md:text-6xl'>5</p>
                    <div className="w-full h-[2px] my-4 flex rounded-full overflow-hidden">
                        <div className="w-[20%] bg-white" />
                        <div className="w-[90%] bg-gray-500" />
                    </div>
                    <p className='text-md'>Core Teams</p>
                </div>

                <div className=''>
                    <p className='text-4xl md:text-6xl'>326</p>
                    <div className="w-full h-[2px] my-4 flex rounded-full overflow-hidden">
                        <div className="w-[45%] bg-white" />
                        <div className="w-[90%] bg-gray-500" />
                    </div>
                    <p className='text-md'>Partners Worldwide</p>
                </div>

                <div className=''>
                    <p className='text-4xl md:text-6xl'>$200m</p>
                    <div className="w-full h-[2px] my-4 flex rounded-full overflow-hidden">
                        <div className="w-[280%] bg-white" />
                        <div className="w-[90%] bg-gray-500" />
                    </div>
                    <p className='text-md'>Capital</p>
                </div>
            </div>
            <div className='w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden'>
                <video
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                >
                    <source src={video.video2} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Company