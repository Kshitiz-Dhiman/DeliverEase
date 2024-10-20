import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image from './images/image.jpeg';
import sample from './images/sample.png';
const Horizontal = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const pin = gsap.fromTo(sectionRef.current, {
            translateX: 0
        }, {
            translateX: "-100vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "2000 top",
                scrub: 0.6,
                pin: true
            }
        })

        return () => {
            pin.kill();
        }
    })

    return (
        <section className='scroll-section-outer'>
            <div ref={triggerRef}>
                <div ref={sectionRef} className='scroll-section-inner'>
                    <div className="scroll-section flex p-40">
                        <div className='w-full py-32 px-10 '>
                            <img src={image} alt="pic here" className='
                            w-full h-full object-cover object-center rounded-[20px]
                            '/>
                        </div>
                        <div className='w-full py-36 px-10'>
                            <p className='text-2xl text-red-400 uppercase'>Offering</p>
                            <p className='text-[50px] font-bold leading-[59px]'>Unparalleled flexibility that will fit any pharmacy's needs</p>
                            <p className='text-[27px] text-gray-500'>We give you the flexibility to deploy various last-mile offerings</p>
                        </div>
                    </div>
                    <div className="scroll-section flex gap-6 p-44">
                        <div className='bg-[#f5f5f5] w-full rounded-3xl flex p-8'>
                            <div class="flex flex-col gap-6">
                                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                                    <span>1</span>
                                </div>
                                <div>
                                    <img class="object-contain" width="1113" height="1113" src={sample} />
                                </div>
                                <div>
                                    <p className='text-[27px] text-gray-500'>We give you the flexibility to deploy various last-mile offerings</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#f5f5f5] w-full rounded-3xl flex p-8'>
                            <div class="flex flex-col gap-6">
                                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                                    <span>1</span>
                                </div>
                                <div>
                                    <img class="object-contain" width="1113" height="1113" src={sample} />
                                </div>
                                <div>
                                    <p className='text-[27px] text-gray-500'>We give you the flexibility to deploy various last-mile offerings</p>
                                </div>
                            </div>

                        </div>
                        <div className='bg-[#f5f5f5] w-full rounded-3xl flex p-8'>
                            <div class="flex flex-col gap-6">
                                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                                    <span>1</span>
                                </div>
                                <div>
                                    <img class="object-contain" width="1113" height="1113" src={sample} />
                                </div>
                                <div>
                                    <p className='text-[27px] text-gray-500'>We give you the flexibility to deploy various last-mile offerings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Horizontal
