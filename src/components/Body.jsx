import React from 'react'
import img from '../assets/images/sitting-desktop.svg'
import Services from './Services'

const Body = () => {
  return (
    <div className='h-screen'>
    <div className="relative bg-gradient-to-b from-cyan-700 to-black h-3/4 mb-0">
    <img src={img} alt="Your" className="w-full object-cover opacity-75 h-full " />
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
    <div className="text-center">
    <h1 className="text-5xl font-bold text-gray-100">Quality Mentoring for African Students</h1>
    <p className="text-xl text-gray-200 mt-5">PeerLink provides a quality education and inclusive environment for students from Africa and beyond.</p>
    <button className="mt-24 bg-transparent border-2 border-white rounded-full px-8 py-3 text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none w-64">
      Get Started
      </button>
  </div>

    </div>
    <Services />
    
  </div>
  </div>
  )
}

export default Body
