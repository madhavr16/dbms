import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg pt-1'>
      <div className='textStructure mt-52  px-20'>
        <div className='masker'>
            <h1 className='text-7xl leading-none font-bold font-["Gilroy"] text-green-600'>Travel</h1>
            <h1 className='text-9xl leading-none font-bold font-["Gilroy"]'>With Us</h1>
        </div>
      </div>
      <div className='border-t-[1px] mt-32 flex justify-between items-center py-5 px-20 border-zinc-400'>
        {["Travel to your dream destination", "Get the best deals", "Experience the best services"].map((item, index) => (
            <p className='text-md font-light leading-none'>{item}</p>
        ))}
        <div className='start flex items-center gap-3'>
            <div className='px-4 py-2 border-[1px] border-zinc-400 font-light text-md uppercase'>Book Now</div>
            <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full'>
              <span className='rotate-[45deg]'>
                <FaArrowUpLong />
              </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
