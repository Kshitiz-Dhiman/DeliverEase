import React, { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar"

const AboutUs = () => {
 
  return (
    <>
    <Navbar />
    <div className="bg-white py-28 px-10 sm:px-16">
      <div className=" flex justify-between">
        <div className='w-3/5'>
          <h1
            className={'text-8xl font-bold text-gradient-to-r from-orange-400 to-orange m-3'}
          > <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-400'>
            About DeliverEase
            </span>
          </h1>
        <div>
      </div>
          <p
            className={'text-4xl text-stone-800 m-4 text-justify mt-6' }
          >
            We are DeliverEase, a platform designed for the students, by the students.
          </p>
          <h1 className='text-2xl text-stone-800 m-4  text-justify mt'>
          Our team is dedicated to connecting students on campus and empowering them with a seamless delivery experience. By linking hostellers who need essential items with day scholars who can deliver them, we make campus life a little easier and more connected.

          </h1>
        </div>
      <div className='w-2/5'>
      <img
          src="https://cdn-icons-png.flaticon.com/512/8893/8893666.png"
          alt=""
          className="w-56 h-56 rounded-full mx-auto mb-6 mt-10 flex"
        />
      </div>
      </div>
      <br />
      <div className="mb-32">
          <h2
            className={'text-6xl font-bold text- m-3 mb-10'}
          >
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
            {/* Kshitiz */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 hover:rotate-2 h-96" >
              <img
                src="https://cdn-icons-png.flaticon.com/512/8893/8893666.png"
                alt="Kshitiz"
                className="w-56 h-56 rounded-full mx-auto mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-800">Kshitiz</h3>
              <p className="text-gray-500">Developer</p>
            </div>

            {/* Lakshay */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 hover:rotate-2 h-96">
              <img
                src="https://cdn-icons-png.flaticon.com/512/8893/8893666.png"
                alt="Lakshay Aggarwal "
                className="w-56 h-56 rounded-full mx-auto mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-800">Lakshay Aggarwal </h3>
              <p className="text-gray-500">Developer</p>
            </div>

            {/* Nimish */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 hover:rotate-2 h-96">
              <img
                src="https://cdn-icons-png.flaticon.com/512/8893/8893666.png"
                alt="Nimish Kochher"
                className="w-56 h-56 rounded-full mx-auto mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-800">Nimish Kochhar</h3>
              <p className="text-gray-500">Developer</p>
            </div>

            {/* Moksh */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 hover:rotate-2 h-96">
              <img
                src="https://cdn-icons-png.flaticon.com/512/8893/8893666.png"
                alt="Moksh Thukral"
                className="w-56 h-56 rounded-full mx-auto mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-800">Moksh Thukral</h3>
              <p className="text-gray-500">Developer</p>
            </div>
          </div>
        </div>
        <div className='bg-slate-200 border-x-2 rounded-xl '>
        <div className="p-4">
          <div className='m-4 w-3/5'>
            <h2
            className={'text-6xl font-bold text-black mb-8'}
            >
              What is DeliverEase?
            </h2>
            <p
              className={'text-3xl text-stone-800 ml-2'}
            >
              DeliverEase is a web platform designed to bridge the gap between hostellers and day scholars at university campuses. It allows hostellers to request products that are unavailable on campus, and day scholars can accept these requests to deliver the items. This not only helps hostellers get the products they need but also provides day scholars with an opportunity to earn extra money. We are dedicated to providing an efficient and reliable service.
            </p>
          </div> 
        </div>

        <div className="mt-20">
          <h2
            className={'text-5xl  text-black mb-8 flex justify-center font-bold'}
          >
            Why Choose DeliverEase?
          </h2>
          <div className="text-2xl text-stone-800 space-y-4 flex justify-evenly ml-11">
            <p className='w-1/4 h-24 mt-auto'>✔ Quick and easy access to products unavailable on campus.</p>
            <p className='w-1/4 h-24 '>✔ Efficient deliveries within campus, saving a lot of time.</p>
            <p className='w-1/4 h-24 '> ✔ Opportunity for day scholars to earn extra money by making deliveries.</p>
            <p className='w-1/4 h-24 '>✔ Simple user interface for both hostellers and day scholars.</p>
          </div> 
         </div>
        </div>
              {/* Values Section */}
        <br />
      <div className="values text-center w-full h-40 mb-12 mt-10 ">
        <blockquote className="text-3xl italic text-gray-700 w-2/3 mx-auto">
          DeliverEase truly values a supportive campus community. We work hard to make a difference in students' lives, and at the end of the day, everyone can focus on their studies and social life.
        </blockquote>
      </div>
      <div className='m-5 flex justify-center '>
        <h1 className='text-5xl italic text-gray-700 mx-auto'>
          Let's get started on something great together!
        </h1>
      </div>
      <div className='m-5 flex justify-center'>
        <button className='bg-slate-900 text-white rounded-full hover:bg-black text-2xl w-44 h-16 mx-auto hover:scale-95'>
          Join us now
        </button>
      </div>
    </div>
    </>
  );
};

export default AboutUs;