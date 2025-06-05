import React from 'react'
import { video } from '../assets/assets'

const Company = () => {
    return (
        <div className='bg-black text-white pt-36'>
            <div className='ml-8 md:ml-24 flex flex-col gap-11'>
                <div className="w-full h-[2px] flex rounded-full overflow-hidden">
                    <div className="w-[10%] bg-white" />
                    <div className="w-[82%] bg-gray-500" />
                </div>
                <p className='text-base'>COMPANY</p>
                <h1 className='text-3xl lg:text-7xl w-10/12'>Volaso in Numbers</h1>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 text-white px-3 lg:px-24 mt-16'>
                {/* Card */}
                <div className=''>
                    <p className='text-4xl md:text-6xl'>247</p>
                    <div className="w-full h-[2px] my-4 flex rounded-full overflow-hidden">
                        <div className="w-[10%] bg-white" />
                        <div className="w-[90%] bg-gray-500" />
                    </div>
                    <p className='text-md'>Employees</p>
                </div>

                <div className=''>
                    <p className='text-4xl md:text-6xl'>5</p>
                    <div className="w-full h-[2px] my-4 flex rounded-full overflow-hidden">
                        <div className="w-[10%] bg-white" />
                        <div className="w-[90%] bg-gray-500" />
                    </div>
                    <p className='text-md'>Core Teams</p>
                </div>

                <div className=''>
                    <p className='text-4xl md:text-6xl'>326</p>
                    <div className="w-full h-[2px] my-4 flex rounded-full overflow-hidden">
                        <div className="w-[10%] bg-white" />
                        <div className="w-[90%] bg-gray-500" />
                    </div>
                    <p className='text-md'>Partners Worldwide</p>
                </div>

                <div className=''>
                    <p className='text-4xl md:text-6xl'>$200m</p>
                    <div className="w-full h-[2px] my-4 flex rounded-full overflow-hidden">
                        <div className="w-[10%] bg-white" />
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