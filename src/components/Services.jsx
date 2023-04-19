import React from 'react'
import img1 from '../assets/images/frontend.jpg'
import img2 from '../assets/images/backend.jpg'
import img3 from '../assets/images/fullstack.jpg'
import img4 from '../assets/images/logo.jpg'

const Service = ({img, title, description}) => {
    return (
        <div className="w-1/4 p-4 m-4 bg-gray-200 transform hover:scale-110">
            <div className="flex items-center">
            <div >
                <img className="w-12 h-12 rounded-full mr-4" alt = "expressive" src = {img}></img>
            </div>
            <div>
                <h2 className="text-lg font-medium">{title}</h2>
                <p className="text-gray-600 text-sm">{description}</p>
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
            description="Lorem ipsum dolor sit amet"

        />
        <Service
            img = {img2}
            title="Education"
            description="Lorem ipsum dolor sit amet"
        />
        <Service 
            img = {img3}
            title="Community"
            description="Lorem ipsum dolor sit amet"

        />
        <Service
            img = {img4}
            title="Support Our Mission"
            description="Lorem ipsum dolor sit amet"
        />
    </div>
  )
}

export default Services

