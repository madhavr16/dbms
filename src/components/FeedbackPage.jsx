import React, { useState } from 'react'

function FeedbackPage() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the feedback to your server
    console.log(feedback);
    setFeedback('');
  };

  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='text-[3vw] leading-[3.5vw] tracking-tight'>
        We value your feedback
      </h1>
      <form onSubmit={handleSubmit} className='w-full border-t-[2px] pt-20 mt-10 border-[#a1b562]'>
        <label htmlFor='feedback' className='block text-[2vw] mb-2'>Your Feedback:</label>
        <textarea id='feedback' value={feedback} onChange={(e) => setFeedback(e.target.value)} className='w-full h-32 p-2 mb-4 border-2 border-[#a1b562] rounded-md'></textarea>
        <button type='submit' className='flex gap-6 items-center uppercase px-8 py-4 mt-8 bg-zinc-900 rounded-full text-white'>
          Submit
          <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
        </button>
      </form>
    </div>
  )
}

export default FeedbackPage