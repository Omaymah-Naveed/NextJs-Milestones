import React from 'react'
import { MdMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";


const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="zoom-in-up">Contact Me</h2>
                <p className='text-gray-600 text-[18px] pt-2' data-aos="fade-up">
                    Drop me a line, give me a call, or Send me Meassage by Submitting the form.
                </p>

                <div className='flex gap-3 items-center'data-aos="fade-up">
                  <MdMailOutline size={30} /> omymahnaveed94@gmail.com
                </div>

                <div className='flex gap-3 items-center' data-aos="fade-up">
                  <BsTelephone size={30} /> (0332) 239-1394
                </div>

            </div>

            <div className='space-y-8'>
              <div className='flex flex-col gap-1'>
                <label htmlFor="name">Name : </label>
                <input type="text"
                className='h-[40px] bg-transparent border border-yellow-500'
                id='name'/>
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email : </label>
                <input type="text"
                className='h-[40px] bg-transparent border border-yellow-500'
                id='email'/>
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor="msg">Message : </label>
                <textarea
                className='bg-transparent border border-yellow-500'
                id='msg'rows={8}>
                </textarea>
              </div>

              <button className='bg-yellow-500 text-black p-3 px-6' data-aos="zoom-in-up">Send</button>

            </div>
        </div>
      
    </div>
  )
}

export default Contact
