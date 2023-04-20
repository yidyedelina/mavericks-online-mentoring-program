import React from 'react'
import img1 from '../assets/images/mentorship.jpg'
import img2 from '../assets/images/backend.jpg'
import img3 from '../assets/images/logoE.jpg'
import img4 from '../assets/images/logoC-removebg-preview.png'

const Component = ({ title, image }) => {
    return (
      <div className="w-full sm:w-1/2 md:w-1/4 p-2 colo mt-0">
        <div className="bg-blue-200 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-200 m-0">
          <div className="flex items-center p-4">
            <div className="flex-shrink-0">
              <img className="h-12 w-12" src={image} alt={title} />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  };


const Services = () => {
  return (
    <div className="py-8 mt-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-2">
          <Component
            title="Mentorship"
            image={img1}
          />
          <Component
            title=" Education"
            image={img2}
          />
          <Component
            title="Inclusive Environment"
            image={img3}
          />
          <Component
            title="Support Us"
            image={img4}
          />
        </div>
      </div>
    </div>
  )
}

export default Services

