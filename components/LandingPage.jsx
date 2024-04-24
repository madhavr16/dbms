import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textStructure mt-52  px-20'>
        <div className='masker'>
            <h1 className='text-7xl leading-none font-bold font-["Gilroy"] text-red-600'>Travel</h1>
            <h1 className='text-9xl leading-none font-bold font-["Gilroy"]'>With Us</h1>
        </div>
      </div>
      <div className='border-t-[1px] mt-32 flex justify-between items-center py-5 px-20 border-zinc-400'>
        {["Travel to your dream destination", "Get the best deals", "Experience the best services"].map((item, index) => (
            <p className='text-md font-light leading-none'>{item}</p>
        ))}
        <div className='start'>
            <div className='px-4 py-2 border-[2px] border-zinc-500 font-light text-sm capitalize'>Book Now</div>
            <div className='w-3 h-3 rounded-full'>
                <FaArrowUpLong />
            </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
