import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import rightSvg from './images/right.svg';
import { NavLink } from 'react-router-dom';
import video from './video/sample.mp4';
import Horizontal from '../components/Horizontal';
import Lenis from 'lenis';
import bulb from './images/bulb.svg';
import illustrate from './images/illustrate.png'
const Hero = () => {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.utils.toArray('.card').forEach((card) => {
            gsap.to(card, {
                scale: 0.8,
                opacity: 0.1,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 15%',
                    bottom: 'top 15%',
                    scrub: true,
                }
            })
        })
    })
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, [])
    return (
        <div className='min-h-screen w-full '>
            <Navbar />
            <div className="h-full md:p-[100px] bg-#[f6f6f6]">
                <div className='gap-y-3 flex flex-col w-full h-full py-20'>
                    <div className='overflow-hidden text-center'>
                        <h1 className='heading text-[140px] font-bold  tracking-tighter  md:leading-[120px] bg-gradient-to-r from-[#7c7c7f] to-[#2f2f33] inline-block text-transparent bg-clip-text'>
                            Doorstep<span className='block'>Convenience</span>
                        </h1>
                    </div>
                    <div className='overflow-hidden'>
                        <h3 className='text-center text-[#5e5e63] subtext uppercase md:text-4xl'>
                            With
                        </h3>
                    </div>
                    <div className='overflow-hidden text-center gap-2 flex flex-col items-center'>
                        <NavLink to='/register'>
                            <h3 className='heading font-semibold p-5 maintext py-2 text-black-1/2 w-max text-3xl md:text-7xl    cursor-pointer hover:underline transition ease-in-out delay-150 bg-red-400 rounded-lg'>
                                DeliverEase
                                <img src={rightSvg} alt="Right Arrow" className='animated-icon text-3xl ml-2 w-10 h-10 font-bold inline-block ' />
                            </h3>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='h-screen w-full p-[100px] flex justify-center items-center'>
                <div className='h-full w-full flex justify-center items-center rounded-[40px] shadow-2xl'>
                    <video className='w-full h-full object-cover object-center rounded-[40px] ' autoPlay loop muted>
                        <source src={video} type='video/mp4' />
                    </video>
                </div>
            </div>
            <Horizontal />
            <div className='
                w-full p-20 flex flex-col items-center justify-center gap-5 py-[15vh] text-black
            '>
                <div className='flex flex-col text-center gap-3 my-10 '>
                    <h1 className='text-red-400 text-2xl'>Benefits</h1>
                    <p className='text-6xl font-bold'>
                        Our services streamlines your <br />
                        existing delivery process
                    </p>
                </div>
                <div className='card h-[50vh] sticky top-[15vh] bg-[#f5f5f5] w-[65vw] flex gap-5 rounded-[20px] p-10 shadow-sm'>
                    <div className='w-full flex flex-col gap-4'>
                        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                            <img src={bulb} alt="" />
                        </div>
                        <h1 className='font-bold text-4xl'>Empower and Connect</h1>
                        <h2 className='text-xl text-gray-500'>Utilize our platform to foster community <br /> engagement and collaboration</h2>
                    </div>
                    <div className='w-full'>
                        <div className='
                            w-full h-full flex justify-center items-center
                        '>
                            <img src={illustrate} alt="" />
                        </div>
                    </div>
                </div>
                <div className='card h-[50vh] sticky top-[15vh] bg-[#f5f5f5] w-[65vw] flex gap-5 rounded-[20px] p-10 shadow-sm'>
                    <div className='w-full flex flex-col gap-4'>
                        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                            <img src={bulb} alt="" />
                        </div>
                        <h1 className='font-bold text-4xl'>Empower and Connect</h1>
                        <h2 className='text-xl text-gray-500'>Utilize our platform to foster community <br /> engagement and collaboration</h2>
                    </div>
                    <div className='w-full'>
                        <div className='
                            w-full h-full flex justify-center items-center
                        '>
                            <img src={illustrate} alt="" />
                        </div>
                    </div>
                </div>
                <div className='card h-[50vh] sticky top-[15vh] bg-[#f5f5f5] w-[65vw] flex gap-5 rounded-[20px] p-10 shadow-sm'>
                    <div className='w-full flex flex-col gap-4'>
                        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                            <img src={bulb} alt="" />
                        </div>
                        <h1 className='font-bold text-4xl'>Empower and Connect</h1>
                        <h2 className='text-xl text-gray-500'>Utilize our platform to foster community <br /> engagement and collaboration</h2>
                    </div>
                    <div className='w-full'>
                        <div className='
                            w-full h-full flex justify-center items-center
                        '>
                            <img src={illustrate} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='
                w-full h-screen bg-red-300
            '>

            </div>
        </div>
    );
};

export default Hero;
