import React from 'react'
import img1 from '../assets/images/mentorship.jpg'
import img2 from '../assets/images/backend.jpg'
import img3 from '../assets/images/logoE.jpg'
import img4 from '../assets/images/logoC-removebg-preview.png'

const Service = ({img, title}) => {
    return (
        <div className="w-1/4 p-4 m-4 mt-1 bg-blue-50 transform hover:scale-110">
            <div className="flex items-center">
            <div >
                <img className="w-auto h-12 rounded-full mr-4" alt = "expressive" src = {img}></img>
            </div>
            <div>
                <h2 className="text-lg text-cyan-900 font-medium">{title}</h2>
            </div>
            </div>
        </div>
    )
}


const Services = () => {
  return (
    <div className="flex flex-row">
        <Service 
            img = {img1}
            title="Mentorship"

        />
        <Service
            img = {img2}
            title="Education"
        />
        <Service 
            img = {img3}
            title="Community"

        />
        <Service
            img = {img4}
            title="Support Our Mission"
        />
    </div>
  )
}

export default Services

