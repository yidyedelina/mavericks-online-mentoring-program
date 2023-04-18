import React from 'react'
import bgvid from '../assets/videos/bgvideo.mp4'
import "./Body.css"

const Body = () => {
  return (
    <div className='video'>
    <video autoPlay loop muted playsInline className="w-full h-full object-cover fixed top-0 left-0 z-[-1] bg-gradient-to-tl">
    <source src={bgvid} type="video/mp4" />
  </video>
  <div className="relative z-10 flex items-center justify-center h-screen">
   <h1 className='text-6xl font-bold text-center text-white'>Your mentors in life are important,<br></br> so choose them wisely!</h1>

  <button className="text-gray-200 bg-transparent rounded-full px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none transform hover:-translate-y-1 active:scale-90">
  Get Started
  </button>
  </div>
    </div>
  )
}

export default Body
// add linear gradient into the the video background    