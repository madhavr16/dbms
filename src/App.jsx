import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About12 from './components/About12'
import { Routes, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import TripsPage from './components/TripsPage';
import PackagesPage from './components/PackagesPage';
import FeedbackPage from './components/FeedbackPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <LandingPage />
            <Marquee />
            <About12 />
          </>
        } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/trips" element={<TripsPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App

