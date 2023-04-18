import React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Testimonies from '../components/testimony/Testimonies'
import Description from '../components/Description'
import Goals from '../components/goal/Goals'


const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Body />
        <Goals />
        <Description />
        <Testimonies />
        <Footer />
    </div>
  )
}

export default Homepage
