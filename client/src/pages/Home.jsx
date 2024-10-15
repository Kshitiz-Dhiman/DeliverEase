import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Navbar from '../components/Navbar';
const Hero = () => {
    gsap.registerPlugin(useGSAP);
    useGSAP(() => {
        gsap.from(".heading", {
            y: 150,
            opacity: 0,
            delay: 0.5,
            duration: 0.9,
            stagger: 1
        })
        gsap.from(".subtext", {
            y: 150,
            opacity: 0,
            delay: 1,
            duration: 0.9,
            stagger: 1
        })
        gsap.from(".maintext", {
            y: 200,
            opacity: 0,
            delay: 1.5,
            duration: 0.9,
        })
    })

    return (
        <div className='min-h-screen w-full bg-cream'>
            <Navbar />
            <div className="h-full p-[100px] bg-[#131e2a]">
                <div className=' gap-y-8 flex flex-col w-full h-full py-20'>
                    <div className='overflow-hidden text-white text-center font-semibold'>
                        <h1 className='heading text-[180px] uppercase tracking-tighter leading-[160px]'>Doorstep<span className='block'>  Convenience</span></h1>
                    </div>
                    <div className='overflow-hidden'>
                        <h3 className='text-center subtext uppercase text-4xl'>
                            with
                        </h3>
                    </div>
                    <div className='overflow-hidden text-center gap-2 flex flex-col items-center'>
                        <h3 className='maintext py-2 bg-red-400 text-black w-max text-7xl cursor-pointer hover:underline'>
                            DeliverEase
                        </h3>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero;
