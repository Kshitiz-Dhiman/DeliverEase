import React, { useRef, forwardRef, useLayoutEffect } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";



const Section = forwardRef((props, ref) => (
    <div className='section h-screen w-full text-[#f0f0ec] font-bold text-5xl p-20 flex items-center justify-center flex-col'>
        <p className='reveal leading-normal' ref={ref}>
            <h1 className='text-9xl  font-bold'>Header: </h1><br />
            React js is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. React is a declarative, efficient
        </p>
    </div>
));

const navbar = () => {
    const scrollref = useRef();
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        const children = scrollref.current;
        const text = new SplitType(children, { types: "chars" });
        text.chars.forEach((char, i) => {
            gsap.from(char, {
                scrollTrigger: {
                    trigger: char,
                    start: "top 95%",
                    end: "top 80%",
                    scrub: 1,
                },
                y: 100,
                opacity: 0.1,
                duration: 2,
                color: '#000000',
                delay: i * 0.01,
                // ease: "elastic"
            });
        })

    }, []);

    return (
        <div className='bg-zinc-800 h-full w-full'>
            <Section ref={scrollref} />
            <div className='bg-grey-800 h-screen w-full flex items-center justify-center text-white text-9xl'>
                HELLO
            </div>

        </div>
    );
};

export default navbar;
