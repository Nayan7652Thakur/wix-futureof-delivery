import React from 'react'
import Navbar from './Navbar'
import { video } from '../assets/assets'


const Hero = () => {
    return (
        <div className="relative h-screen w-screen">
            {/* Navbar above everything */}
            <div className="z-10 absolute top-0 left-0 w-full">
                <Navbar />
            </div>

            {/* Background video */}
            <video autoPlay muted loop className="w-full h-full object-cover z-0">
                <source src={video.video1} type="video/mp4" />
            </video>

            {/* Text content */}
            <div className="absolute top-32 left-24 z-20 text-white">
                <h1 className="tracking-[-0.02em] leading-[1.1] text-[90px] font-light">
                    The Future of <br /> Delivery Is Here
                </h1>
                <p className="mt-4 text-lg">
                    DISCOVER A GREENER, FASTER SELF-DRIVING <br />
                    DELIVERY SOLUTION WITH VOLASO.
                </p>
            </div>
        </div>
    )
}

export default Hero
