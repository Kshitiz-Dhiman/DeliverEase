import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import rightSvg from './images/right.svg';
import { NavLink } from 'react-router-dom';
// import video from './video/sample.mp4';
import Horizontal from '../components/Horizontal';
import Lenis from 'lenis';
import bulb from './images/bulb.svg';
import illustrate from './images/illustrate.png';

const Hero = () => {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.utils.toArray('.card').forEach((card) => {
            gsap.to(card, {
                scale: 0.8,
                opacity: 0,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 20%',
                    bottom: 'top 20a%',
                    scrub: true,
                }
            })
        })
        gsap.to('.footer', {
            backgroundColor: 'black',
            color: 'white',
            transition: 'all 0.5s',
            scrollTrigger: {
                trigger: '.footer',
                start: 'top 10%',
                end: 'top 10%',
                scrub: true,
            },
        });
        gsap.to('.navbar', {
            backgroundColor: 'black',
            color: 'white',
            transition: 'all 0.5s',
            scrollTrigger: {
                trigger: '.footer',
                start: 'top 10%',
                end: 'top 10%',
                scrub: true,
            },
        });
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
        <>
            <div className='min-h-screen w-full'>
                <Navbar className='navbar' />
                <header className="h-full md:p-[100px]">
                    <div className='gap-y-3 flex flex-col w-full h-full py-20 relative z-[6]'>
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
                    <div className='absolute h-[60vh] w-[70vw] z-[5] top-[0px] left-[150px] m-32'>
                        <div className='
                            bg-black opacity-[0.3] absolute w-[30px] h-[30px] rounded-[10px]
                            transform right-[232px] rotate-45 top-[10px]
                        '>
                        </div><div className='
                            bg-black absolute opacity-[0.2] w-[20px] h-[20px] rounded-[5px]
                            transform right-[50px] top-[100px] rotate-45
                        '>
                        </div>
                        <div className='
                            bg-black absolute opacity-[0.1] w-[17px] h-[17px] rounded-[5px]
                            transform right-[130px] bottom-[290px] rotate-45
                        '>
                        </div>
                        <div className='
                            bg-black absolute opacity-[0.2] w-[40px] h-[40px] rounded-[10px]
                            transform left-[232px] rotate-[45deg]
                        '>
                        </div>
                        <div className='
                            bg-black absolute opacity-[0.3] w-[20px] h-[20px] rounded-[5px]
                            transform rotate-[70deg] left-[20px] top-[100px]
                        '>
                        </div>
                        <div className='
                            absolute bg-black opacity-[0.2] w-[45px] h-[45px] rounded-xl
                            transform left-[90px] bottom-[290px] rotate-45
                        '>
                        </div>
                    </div>
                </header>
                <section className='video h-screen w-full p-[100px] flex justify-center items-center'>
                    <div className='h-full w-full flex justify-center items-center rounded-[40px] shadow-2xl'>
                        <video className='w-full h-full object-cover object-center rounded-[40px] ' autoPlay loop muted>
                            {/* <source src={video} type='video/mp4' /> */}
                        </video>
                    </div>
                </section>
                <Horizontal />
                <section className='w-full flex flex-col items-center justify-center gap-5 text-black p-20'>
                    <div className='flex flex-col text-center gap-3 my-10 '>
                        <h1 className='text-red-400 text-2xl'>Benefits</h1>
                        <p className='text-6xl font-bold'>
                            Our services streamlines your <br />
                            existing delivery process
                        </p>
                    </div>
                    <article className='card h-[50vh] sticky top-[15vh] bg-[#f5f5f5] w-[65vw] flex gap-5 rounded-[20px] p-10 shadow-sm'>
                        <div className='w-full flex flex-col gap-4'>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                                <img src={bulb} alt="" />
                            </div>
                            <h1 className='font-bold text-4xl'>Empower and Connect</h1>
                            <h2 className='text-xl text-gray-500'>Utilize our platform to foster community <br /> engagement and collaboration</h2>
                        </div>
                        <div className='w-full'>
                            <div className='w-full h-full flex justify-center items-center'>
                                <img src={illustrate} alt="" />
                            </div>
                        </div>
                    </article>
                    <article className='card h-[50vh] sticky top-[15vh] bg-[#f5f5f5] w-[65vw] flex gap-5 rounded-[20px] p-10 shadow-sm'>
                        <div className='w-full flex flex-col gap-4'>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                                <img src={bulb} alt="" />
                            </div>
                            <h1 className='font-bold text-4xl'>Empower and Connect</h1>
                            <h2 className='text-xl text-gray-500'>Utilize our platform to foster community <br /> engagement and collaboration</h2>
                        </div>
                        <div className='w-full'>
                            <div className='w-full h-full flex justify-center items-center'>
                                <img src={illustrate} alt="" />
                            </div>
                        </div>
                    </article>
                    <article className='card h-[50vh] sticky top-[15vh] bg-[#f5f5f5] w-[65vw] flex gap-5 rounded-[20px] p-10 shadow-sm'>
                        <div className='w-full flex flex-col gap-4'>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                                <img src={bulb} alt="" />
                            </div>
                            <h1 className='font-bold text-4xl'>Empower and Connect</h1>
                            <h2 className='text-xl text-gray-500'>Utilize our platform to foster community <br /> engagement and collaboration</h2>
                        </div>
                        <div className='w-full'>
                            <div className='w-full h-full flex justify-center items-center'>
                                <img src={illustrate} alt="" />
                            </div>
                        </div>
                    </article>
                </section>
                <footer className=' footer
                w-full h-screen flex flex-col gap-2
            '>
                    <div className='h-full flex flex-col text-center justify-center items-center font-bold leading-tight'>
                        <p className='text-[70px]'>
                            Cost-effective, reliable and used by <br /> hundreds of deliveries today
                        </p>
                        <button className='
                        bg-red-400 text-white font-bold p-4 text-xl rounded-lg mt-5
                        hover:bg-red-400 transition ease-in-out delay-150
                    '>Contact Us</button>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Hero;
