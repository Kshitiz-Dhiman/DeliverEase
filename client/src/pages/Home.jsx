import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import rightSvg from './images/right.svg';
import { NavLink } from 'react-router-dom';
import Horizontal from '../components/Horizontal';
import Lenis from 'lenis';
import bulb from './images/bulb.svg';
import illustrate from './images/illustrate.png';
import community from './images/community.png';
import fastandreliabledelivery from './images/fast and reliable delivery.png';
import profile from './images/profile.png';
import sample from './video/sample.mp4';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
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
        const particles = document.querySelectorAll('.particle');

        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            particles.forEach((particle) => {
                const rect = particle.getBoundingClientRect();
                const dx = (clientX - rect.left - rect.width / 2) * 0.02;
                const dy = (clientY - rect.top - rect.height / 2) * 0.02;
                gsap.to(particle, {
                    x: dx,
                    y: dy,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [])
    return (
        <>
            <main className='min-h-screen w-full'>
                <Navbar className='navbar' />
                <header className="h-full md:p-[100px]">
                    <div className='gap-y-3 flex flex-col w-full h-full py-20 relative z-[4]'>
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
                    <div className='absolute h-[60vh] w-[70vw] z-[3] top-[0px] left-[150px] m-32'>
                        <div className=' particle
                            bg-black opacity-[0.3] absolute w-[30px] h-[30px] rounded-[10px]
                            transform right-[232px] rotate-45 top-[10px]
                        '>
                        </div><div className=' particle
                            bg-black absolute opacity-[0.2] w-[20px] h-[20px] rounded-[5px]
                            transform right-[50px] top-[100px] rotate-45
                        '>
                        </div>
                        <div className='particle
                            bg-black absolute opacity-[0.1] w-[17px] h-[17px] rounded-[5px]
                            transform right-[130px] bottom-[290px] rotate-45
                        '>
                        </div>
                        <div className='particle
                            bg-black absolute opacity-[0.16] w-[40px] h-[40px] rounded-[10px]
                            transform left-[232px] rotate-[45deg]
                        '>
                        </div>
                        <div className='particle
                            bg-black absolute opacity-[0.3] w-[20px] h-[20px] rounded-[5px]
                            transform rotate-[70deg] left-[20px] top-[100px]
                        '>
                        </div>
                        <div className='particle
                            absolute bg-black opacity-[0.2] w-[45px] h-[45px] rounded-xl
                            transform left-[90px] bottom-[290px] rotate-45
                        '>
                        </div>
                    </div>
                </header>
                <section className='video h-screen w-full p-[100px] flex justify-center items-center'>
                    <div className='h-full w-full flex justify-center items-center rounded-[40px] shadow-2xl'>
                        <video className='w-full h-full object-cover object-center rounded-[40px] ' autoPlay loop muted>
                            <source src={sample} type='video/mp4' />
                        </video>
                    </div>
                </section>
                <Horizontal />

                <section className='w-full flex flex-col items-center justify-center gap-5 text-black p-20'>
                    <div className='flex flex-col text-center gap-3 my-10 '>
                        <h1 className='text-red-400 text-2xl'>Features</h1>
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
                            <h1 className='font-bold text-4xl'>Convenience and Efficiency</h1>
                            <h2 className='text-l text-gray-500'>DeliverEase will lead to a measurable increase in convenience and efficiency for hostellers in acquiring essential items. Hostellers are expected to experience a reduction in the time and effort spent obtaining necessities.</h2>
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
                            <h1 className='font-bold text-4xl'>Fast and Reliable</h1>
                            <h2 className='text-l text-gray-500'>DeliverEase prioritizes timely and efficient deliveries. Our platform uses advanced algorithms to optimize delivery routes and ensure orders are fulfilled promptly.</h2>
                        </div>
                        <div className='w-full'>
                            <div className='w-full h-full flex justify-center items-center'>
                                <img src={fastandreliabledelivery} alt="" />
                            </div>
                        </div>
                    </article>
                    <article className='card h-[50vh] sticky top-[15vh] bg-[#f5f5f5] w-[65vw] flex gap-5 rounded-[20px] p-10 shadow-sm'>
                        <div className='w-full flex flex-col gap-4'>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                                <img src={bulb} alt="" />
                            </div>
                            <h1 className='font-bold text-4xl'>Community Building</h1>
                            <h2 className='text-l text-gray-500'>DeliverEase will foster a sense of community and enhance social interaction between day scholars and hostellers. By facilitating interactions and cooperation through the delivery process, the platform is expected to promote a sense of belonging and mutual support within the university community.</h2>
                        </div>
                        <div className='w-full'>
                            <div className='w-full h-full flex justify-center items-center'>
                                <img src={community} alt="" />
                            </div>
                        </div>
                    </article>
                </section>


                <section className='w-full min-h-screen p-20 flex flex-col gap-7'>
                    <div className='text-center'>
                        <h1 className='text-orange-500 uppercase text-xl'>Feedbacks</h1>
                        <p className='text-6xl font-bold'>What our customers are saying</p>
                    </div>
                    <div class="grid grid-rows-3 h-full grid-flow-col gap-4 px-4 py-4 leading-10">
                        <div class="p-4 bg-[#f5f5f5] shadow-sm rounded-xl row-span-3 w-full ">
                            <div className='flex flex-col gap-3'>
                                <div class="flex gap-4 items-center">
                                    <div class="flex h-12 w-12 items-center bg-gray-500 justify-center rounded-full">
                                        <img src={profile} alt="User 1" />
                                    </div>
                                    <h1 className='
                                    text-[25px] font-bold hover:underline cursor-pointer transition
                                '>Gurniaz</h1>
                                </div>
                                <div>
                                    <p class="text-gray-500 leading-7">"At first, I was a bit hesitant to use DeliverEase. I wasn't sure if it would be reliable or if the delivery would take forever. But I was pleasantly surprised.The entire process was smooth,from placing the order to receiving the item. The delivery was quick, and the dayscholar was very polite. I'm now a regular user and have recommended DeliverEase to all my friends."</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 w-full bg-[#f5f5f5] shadow-sm rounded-xl col-span-2">
                            <div className='flex flex-col gap-3'>
                                <div class="flex gap-4 items-center">
                                    <div class="flex h-12 w-12 items-center bg-gray-500 justify-center rounded-full">
                                        <img src={profile} alt="User 2" />
                                    </div>
                                    <h1 className='
                                    text-[25px] font-bold hover:underline cursor-pointer transition
                                '>Sarthak Sharma</h1>
                                </div>
                                <div>
                                    <p class="text-gray-500 leading-7">"DeliverEase has been a lifesaver for me.Being able to order items directly from the app has been incredibly convenient. The dayscholars are always friendly and efficient. I'd definitely recommend DeliverEase to any student living in a hostel."</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 w-full bg-[#f5f5f5] shadow-sm rounded-xl row-span-2 col-span-2">
                            <div className='flex flex-col gap-3'>
                                <div class="flex gap-4 items-center">
                                    <div class="flex h-12 w-12 items-center bg-gray-500 justify-center rounded-full">
                                        <img src={profile} alt="User 3" />
                                    </div>
                                    <h1 className='
                                    text-[25px] font-bold hover:underline cursor-pointer transition
                                '>Tanya Goyal</h1>
                                </div>
                                <div>
                                    <p class="text-gray-500 leading-7">"I love the technology behind DeliverEase. The app is well-designed and user-friendly. The real-time tracking feature is especially helpful. I can see exactly where my order is and when it will arrive. The payment process is secure, and the overall experience is seamless. I'm impressed."</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 w-full bg-[#f5f5f5] shadow-sm rounded-xl col-span-2 row-span-2">
                            <div className='flex flex-col gap-3'>
                                <div class="flex gap-4 items-center">
                                    <div class="flex h-12 w-12 items-center bg-gray-500 justify-center rounded-full">
                                        <img src={profile} alt="User 4" />
                                    </div>
                                    <h1 className='
                                    text-[25px] font-bold hover:underline cursor-pointer transition
                                '>Shrishti Mahajan</h1>
                                </div>
                                <div>
                                    <p class="text-gray-500 leading-7">"With my hectic schedule, I often don't have time to go shopping for groceries or other essentials. DeliverEase has been a game-changer. I can simply place an order from my phone and have everything delivered to my doorstep. It's so convenient and saves me a lot of time."</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 w-full bg-[#f5f5f5] shadow-sm rounded-xl row-span-1 col-span-2">
                            <div className='flex flex-col gap-3'>
                                <div class="flex gap-4 items-center">
                                    <div class="flex h-12 w-12 items-center bg-gray-500 justify-center rounded-full">
                                        <img src={profile} alt="User 5" />
                                    </div>
                                    <h1 className='
                                    text-[25px] font-bold hover:underline cursor-pointer transition
                                '>Harsh Duggal</h1>
                                </div>
                                <div>
                                    <p class="text-gray-500 leading-7">"I really appreciate how DeliverEase helps connect hostellers and day scholars. It’s not just about deliveries—it’s also creating a sense of community. I’ve had seamless experiences so far, and the quick responses from day scholars have been impressive!"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
                <section className='w-full h-[70vh] flex gap-10 p-32 px-40'>
                    <div className='w-full flex flex-col gap-3'>
                        <h1 className='text-orange-500 uppercase text-xl'>faq</h1>
                        <p className='text-6xl'>
                            Questions? <br />
                            Answers.
                        </p>
                        <p className='text-2xl text-gray-500'>
                            We have a lot to offer, <br />
                            here is a sneak peak
                        </p>
                    </div>
                    <div className='w-full flex flex-col gap-5'>
                        <details className='shadow-md rounded-lg p-5 bg-[#f5f5f5]'>
                            <summary className='text-xl'>What is DeliverEase?</summary>
                            <p className='
                                text-gray-500 text-xl py-5
                            '>DeliverEase is a delivery service that connects you with the best delivery agents in your area</p>
                        </details>
                        <details className='shadow-md rounded-lg p-5 bg-[#f5f5f5]'>
                            <summary className='text-xl'>How does DeliverEase work?</summary>
                            <p className='text-gray-500 text-xl py-5'>
                                DeliverEase uses a network of local delivery agents to pick up and deliver your items quickly and efficiently.
                            </p>
                        </details>
                        <details className='shadow-md rounded-lg p-5 bg-[#f5f5f5]'>
                            <summary className='text-xl'>What areas do you serve?</summary>
                            <p className='text-gray-500 text-xl py-5'>
                                We currently serve major metropolitan areas and are continuously expanding to new locations.
                            </p>
                        </details>
                        <details className='shadow-md rounded-lg p-5 bg-[#f5f5f5]'>
                            <summary className='text-xl'>How can I track my delivery?</summary>
                            <p className='text-gray-500 text-xl py-5'>
                                You can track your delivery in real-time through our app or website using the tracking number provided.
                            </p>
                        </details>
                        <details className='shadow-md rounded-lg p-5 bg-[#f5f5f5]'>
                            <summary className='text-xl'>What if I need to change my delivery details?</summary>
                            <p className='text-gray-500 text-xl py-5'>
                                You can easily update your delivery details through our app or by contacting our customer support team.
                            </p>
                        </details>
                    </div>
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
                    '><NavLink to="/contact">Contact us</NavLink></button>
                    </div>
                </footer>
            </main>
        </>
    );
};

export default Hero;
