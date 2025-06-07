import React from 'react'
import { assets } from '../assets/assets'

const WhyVolaso = () => {
  return (
    <div className='bg-black text-white pt-14 sm:pt-20 md:pt-52'>
      <div className='ml-6 sm:ml-10 lg:pl-7 flex flex-col gap-11 mb-6'>
        <div className="w-full h-[2px] flex rounded-full overflow-hidden">
          <div className="w-[15%] bg-white" />
          <div className="w-[82%] bg-gray-500" />
        </div>
        <p className='text-lg lg:text-lg'>WHY VOLASO</p>
        <h1 className='text-4xl sm:text-6xl  lg:text-6xl w-80 sm:w-full'>A Different Approach, Using a New Method of Manufacturing</h1>
        <div className='flex flex-col md:items-end mb-5'>
          <div className='mr-7'>
            <p className='md:w-[375px] lg:w-[446px] lg:mt-9 pr-4'>
              Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes the business unique and how users can benefit from choosing it.
            </p>

            <button className="mt-8 w-[261px] md:w-[180px] flex justify-between items-center pb-1 hover:opacity-70 border-b">
              <span>READ MORE</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full m-0 p-0">
        <img src={assets.homeImage5} alt="" className="w-full block" />
      </div>
    </div>
  )
}

export default WhyVolaso