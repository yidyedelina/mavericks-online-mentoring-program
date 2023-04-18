import React from 'react'
import img from '../assets/images/bg.jpg'
import Courses from './course/Courses'

const Body = () => {
  return (
    <div className='h-screen'>
    <div className="relative bg-gradient-to-b from-cyan-800 to-black h-2/3">
    <img src={img} alt="Your" className="w-full object-cover opacity-75 h-full " />
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-white text-6xl font-bold text-center mb-8">Your mentors in life are important,<br></br> so choose them wisely!</h1>
      <button className="bg-transparent border-2 border-white rounded-full px-8 py-3 text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none w-64">
      Get Started
      </button>
    </div>
    <Courses />
    
  </div>
  </div>
  )
}

export default Body
