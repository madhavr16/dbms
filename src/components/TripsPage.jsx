import React from 'react'

function TripsPage() {
  const trips = [
    { id: 1, name: 'Trip 1', description: 'Description of Trip 1' },
    { id: 2, name: 'Trip 2', description: 'Description of Trip 2' },
    { id: 3, name: 'Trip 3', description: 'Description of Trip 3' },
    { id: 4, name: 'Trip 4', description: 'Description of Trip 4' },
    { id: 5, name: 'Trip 5', description: 'Description of Trip 5' },
  ];

  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='text-[3vw] leading-[3.5vw] tracking-tight'>
        Explore our trips
      </h1>
      <div className='w-full border-t-[2px] pt-20 mt-10 flex flex-wrap gap-5 border-[#a1b562]'>
        {trips.map((trip) => (
          <div key={trip.id} className='w-1/2'>
            <h1 className='text-[2vw]'>{trip.name}</h1>
            <p>{trip.description}</p>
            <button className='flex gap-6 items-center uppercase px-8 py-4 mt-8 bg-zinc-900 rounded-full text-white'>
              Book Now
              <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TripsPage