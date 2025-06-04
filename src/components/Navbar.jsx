import React from 'react'

const Navbar = () => {
    return (
        <div className='px-7 mt-12'>
            <div className='flex justify-between items-center w-full px-18'>
                {/* Left */}
                <div>
                    <p className='text-xl text-white font-bold'>Volaso</p>
                </div>

                {/* Right */}
                <div className='flex gap-6 items-center'>
                    <a href=''><span className='text-white'>Technology</span></a>
                    <a href=''><span className='text-white'>About</span></a>
                    <button className='border bg-white py-2 px-6 text-black rounded-full hover:bg-black hover:text-white transition-colors duration-300'>
                        CONTACT
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
