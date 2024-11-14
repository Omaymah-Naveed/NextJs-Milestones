import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div 
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      id="hero"
      className='min-h-screen bg-no-repeat bg-[url(/mypic1.png)] bg-cover' 
      style={{backgroundSize:"35%", backgroundPosition:"left 100px top 100px"}}>
      
      <Navbar />

      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>

        <div className='text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-in" className="text-center">I'm</p>
            <p data-aos="zoom-in" className="text-center">Omaymah</p>
            <p data-aos="zoom-in" className="text-center">Naveed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
