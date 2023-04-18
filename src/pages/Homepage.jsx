import React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Courses from '../components/course/Courses'
import Footer from '../components/Footer'
import Testimonies from '../components/testimony/Testimonies'


const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Body />
        <Courses />
        <Testimonies />
        <Footer />
    </div>
  )
}

export default Homepage
