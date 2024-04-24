import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from './Carousel';

function About12() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='text-[3vw] leading-[3.5vw] tracking-tight'>
        Welcome to our travel agency, where we specialize in creating unforgettable travel experiences for our clients. With years of experience in the industry, our team of expert travel advisors are dedicated to helping you plan the perfect getaway.
      </h1>
      <div className='w-full border-t-[2px] pt-20 mt-10 flex gap-5 border-[#a1b562]'>
        <div className='w-1/2'>
            <h1 className='text-[3vw]'>Our Approach:</h1>
            <button className='flex gap-6 items-center uppercase px-8 py-4 mt-8 bg-zinc-900 rounded-full text-white'>
              Read More
              <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
        </div>
        <div className='w-1/2 h-[60vh] '>
          <Carousel />
        </div>
      </div>
    </div>
  )
}

export default About12