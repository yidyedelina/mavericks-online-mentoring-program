import React from 'react'


const CourseCard = ({ title, description}) => {
    return (


<div className="p-4 mx-4 bg-cyan-500 text-gray-100 transform hover:scale-110 rounded-lg h-54">
            <div className="flex items-center text-gray-100 ">
            <div>
                <h2 className="text-xl font-medium pb-5 text-gray-800 ">{title}</h2>
                <p className="text-gray-600 text-sm text-gray-800 ">{description}</p>
            </div>
            
            </div>
            <button className="w-1/2 mt-2 ml-32 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-800 to-cyan-500 group-hover:from-cyan-500 group-hover:to-cyan-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Enroll Now
            </span>
          </button>
        </div>
        
    )
}


export default CourseCard

