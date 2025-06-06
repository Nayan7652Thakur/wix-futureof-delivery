import React from 'react'
import { assets } from '../assets/assets'

const WhyVolaso = () => {
  return (
    <div className='bg-black text-white pt-36'>
      <div className='ml-24 flex flex-col gap-11'>
        <div className="w-full h-[2px] flex rounded-full overflow-hidden">
          <div className="w-[10%] bg-white" />
          <div className="w-[82%] bg-gray-500" />
        </div>
        <p className='text-base'>WHY VOLASO</p>
        <h1 className='text-4xl  lg:text-7xl w-10/12'>A Different Approach, Using a New Method of Manufacturing</h1>
        <div className='flex flex-col lg:items-end mb-5'>
          <div>
            
          <p className='w-[446px] mr-9'>
            Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes the business unique and how users can benefit from choosing it.
          </p>

          <button className="mt-8 w-[261px] flex justify-between items-center pb-1 hover:opacity-70 border-b">
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