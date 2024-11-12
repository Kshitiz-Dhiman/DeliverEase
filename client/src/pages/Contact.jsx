import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const App = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_nx2xq1e', // Replace with your EmailJS service ID
      'template_zi49moe', // Replace with your EmailJS template ID
      {
        from_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      '4GK0OsNhRYBNnVV2r' // Replace with your EmailJS user ID
    ).then((result) => {
      alert('Message sent successfully!');
    }).catch((error) => {
      console.error('Failed to send message:', error);
      alert('Failed to send the message, please try again.');
    });
  };

  return (
    <div>
      <div className='text-center'>
        <p className='text-3xl font-bold mt-8 font-sans'>CONTACT OUR TEAM</p>
        <div className='w-2/3 mx-auto'>
          <p>Got any questions about the product or scaling our platform? We're here to help. Chat to our friendly team 24/7 and get onboard in less than 5 minutes.</p>
        </div>
      </div>
      <div className='flex justify-center mt-10'>
        <form onSubmit={handleSubmit}>
          <div className='flex'>
            <div>
              <label htmlFor='first-name' className='font-semibold text-[0.9rem]'>First name <br /></label>
              <input 
                type='text' 
                id='first-name' 
                name='firstName' 
                placeholder='Enter your first name ' 
                className='border p-2 rounded-md h-[2rem] text-[0.8rem]' 
                value={formData.firstName} 
                onChange={handleChange} 
              />
            </div>
            <div className='mx-[2rem]'>
              <label htmlFor='last-name' className='font-semibold text-[0.9rem]'>Last name <br /></label>
              <input 
                type='text' 
                id='last-name' 
                name='lastName' 
                placeholder='Enter your last name ' 
                className='border p-2 rounded-md h-[2rem] text-[0.8rem]' 
                value={formData.lastName} 
                onChange={handleChange} 
              />
            </div>
          </div>
          <br />
          
          <div className='mb-4'>
            <label htmlFor='email' className='text-[0.9rem] font-semibold relative bottom-2'>Email: </label> <br />
            <input 
              type='email' 
              id='email' 
              name='email' 
              placeholder='Enter your email ' 
              className='border p-2 rounded-md h-[2rem] text-[0.8rem]' 
              value={formData.email} 
              onChange={handleChange} 
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='phone' className='relative bottom-2 text-[0.9rem] font-semibold'>Phone number</label> <br />
            <input 
              type='text' 
              id='phone' 
              name='phone' 
              placeholder='Enter your phone number' 
              className='border p-2 rounded-md h-[2rem] text-[0.8rem]' 
              value={formData.phone} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label htmlFor='message' className='relative bottom-3 text-[0.9rem] font-semibold'>Message</label> <br />
            <textarea 
              id='message' 
              name='message' 
              placeholder='Enter your message' 
              className='border w-[15rem] h-[7rem]' 
              value={formData.message} 
              onChange={handleChange} 
            ></textarea>
          </div>
          <button 
            type='submit' 
            className='bg-black text-white text-[0.8rem] px-4 py-1 relative top-4 rounded'
          >
            Send Message
          </button>
        </form>
        <div>
          <h1 className='text-3xl font-bold'>Chat with us</h1>
          <p className='text-gray-500 text-[0.9rem] my-4'>Speak to our friendly team via live chat</p>
          <div className='text-[0.8rem] underline cursor-pointer font-semibold my-[2rem]'>
            <div>Start a live chat</div>
            <div>Shoot us an email</div>
            <div>Message us on X</div>
          </div>
          <div className='text-[0.8rem] cursor-pointer font-semibold my-[2rem]'>
            <div className=''>Call Us</div>
            <div className='text-gray-500'>Call our team</div>
            <div className='underline'>
              +90 123 456 789
            </div>
          </div>
          <div className='text-[0.8rem] cursor-pointer font-semibold my-[2rem]'>
            <div className=''>Visit Us</div>
            <div className='text-gray-500'>Chat to us in person</div>
            <div className='underline'>
              100 Rajpura Punjab near eagle chowk
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
