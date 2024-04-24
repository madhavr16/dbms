import React from 'react'

function AboutPage() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='text-[3vw] leading-[3.5vw] tracking-tight'>
        About Us
      </h1>
      <div className='w-full border-t-[2px] pt-20 mt-10 border-[#a1b562]'>
        <h2 className='text-[2vw]'>Who We Are</h2>
        <p>
          We are a leading travel company offering the best travel packages. Our team is dedicated to providing the best service to our customers. We believe in making your travel experience memorable and enjoyable.
        </p>
        <h2 className='text-[2vw] mt-10'>Our Mission</h2>
        <p>
          Our mission is to provide high-quality travel experiences that exceed our customers expectations. We aim to make travel accessible and enjoyable for everyone, regardless of their budget or destination.
        </p>
        <h2 className='text-[2vw] mt-10'>Our Values</h2>
        <ul>
          <li>Customer Satisfaction: We strive to exceed our customers expectations in all aspects of our service.</li>
          <li>Integrity: We conduct our business with honesty and transparency.</li>
          <li>Innovation: We constantly seek new and creative ways to improve our services.</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutPage