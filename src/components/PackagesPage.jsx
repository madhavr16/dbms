import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from '../images/img1.jpg'; // replace with your image path
import img2 from '../images/Bg2.jpg'; // replace with your image path
import img3 from '../images/TravelBg.jpg'; // replace with your image path

function PackagesPage() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='text-[3vw] leading-[3.5vw] tracking-tight font-normal'>
        Explore our travel packages
      </h1>
      <Carousel className='mt-10'>
        <div style={{ backgroundImage: `url(${img1})`, height: '50vh', backgroundSize: 'cover' }}>
          <h1 className='text-[3vw]'>Package 1:</h1>
          <p>Description of Package 1</p>
          <button className='flex gap-6 items-center uppercase px-8 ml-[39vw] py-4 mt-8 bg-zinc-900 rounded-full text-white'>
            Book Now
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div style={{ backgroundImage: `url(${img2})`, height: '50vh', backgroundSize: 'cover' }}>
          <h1 className='text-[3vw]'>Package 2:</h1>
          <p>Description of Package 2</p>
          <button className='flex gap-6 items-center uppercase px-8 ml-[39vw] py-4 mt-8 bg-zinc-900 rounded-full text-white'>
            Book Now
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div style={{ backgroundImage: `url(${img3})`, height: '50vh', backgroundSize: 'cover' }}>
          <h1 className='text-[3vw]'>Package 3:</h1>
          <p>Description of Package 3</p>
          <button className='flex gap-6 items-center uppercase px-8 py-4 ml-[39vw] mt-8 bg-zinc-900 rounded-full text-white'>
            Book Now
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
      </Carousel>
    </div>
  )
}

export default PackagesPage