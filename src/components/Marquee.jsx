import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full rounded-tl-3xl rounded-tr-3xl  py-[7vh] bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap'>
        <motion.h1 initial= {{x:0}} animate= {{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 8}} className='tracking-tighter text-[15vw]  font-["Gilroy"] font-semibold  leading-tight uppercase'>Explore the World! Choose Us</motion.h1>
        <motion.h1 initial= {{x:0}} animate= {{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 8}} className='tracking-tighter text-[15vw]  font-["Gilroy"] font-semibold  leading-tight uppercase'>Explore the World! Choose Us</motion.h1>
      </div>
    </div>
  )
}

export default Marquee