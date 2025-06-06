import React from 'react'
import Navbar from './Navbar'
import { video } from '../assets/assets'


const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Navbar above everything */}
            <div className="absolute top-0 left-0 w-full">
                <Navbar />
            </div>

            {/* Background video */}
            <video autoPlay muted loop className="w-full h-full object-cover object-center z-0">
                <source src={video.video1} type="video/mp4" />
            </video>


            {/* Text content */}
            <div className="absolute top-32 w-full flex justify-center sm:justify-start md:justify-start z-20 text-white px-4 sm:px-10 lg:px-24">
                <div>
                    <h1 className="tracking-[-0.02em] leading-[1.1] text-5xl sm:text-6xl lg:text-8xl font-light md:text-left">
                        The Future of <br /> Delivery Is Here
                    </h1>
                    <p className="mt-4 text-xs md:text-base w-[244px] sm:w-[390px] md:text-left">
                        DISCOVER A GREENER, FASTER SELF-DRIVING <br />
                        DELIVERY SOLUTION WITH VOLASO.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Hero
