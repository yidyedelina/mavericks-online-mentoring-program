import React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Testimonies from '../components/testimony/Testimonies'
import Description from '../components/Description'
import Goals from '../components/goal/Goals'
import Schedule from '../components/Schedule'
import Help from '../components/Help'
import Courses from '../components/course/Courses'
import Mentors from '../components/mentor/Mentors'


const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Body />
        <Courses />
        <Schedule />
        <Goals />
        <Help />
        <Mentors />
        <Testimonies />
        <Description />
        <Help />
        <Footer />
    </div>
  )
}

export default Homepage
