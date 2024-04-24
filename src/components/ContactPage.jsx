import React from 'react'
import facebookIcon from '../images/facebook-icon.png'; // replace with your image path
import twitterIcon from '../images/twitter-icon.png'; // replace with your image path
import linkedinIcon from '../images/linkedin-icon.png'; // replace with your image path

function ContactPage() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='text-[3vw] leading-[3.5vw] tracking-tight'>
        Contact Us
      </h1>
      <div className='w-full border-t-[2px] pt-20 mt-10 border-[#a1b562]'>
        <h2 className='text-[2vw]'>Our Address</h2>
        <p>1234 Street Name, City, State, Country</p>
        <h2 className='text-[2vw] mt-10'>Phone</h2>
        <p>+1 234 567 890</p>
        <h2 className='text-[2vw] mt-10'>Email</h2>
        <p>info@ourcompany.com</p>
        <h2 className='text-[2vw] mt-10'>Follow Us</h2>
        <div className='flex gap-4 mt-2'>
          <a href='https://www.facebook.com/ourcompany' target='_blank' rel='noreferrer'>
            <img src={facebookIcon} alt='Facebook' width='32' height='32' />
          </a>
          <a href='https://www.twitter.com/ourcompany' target='_blank' rel='noreferrer'>
            <img src={twitterIcon} alt='Twitter' width='32' height='32' />
          </a>
          <a href='https://www.linkedin.com/company/ourcompany' target='_blank' rel='noreferrer'>
            <img src={linkedinIcon} alt='LinkedIn' width='32' height='32' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactPage