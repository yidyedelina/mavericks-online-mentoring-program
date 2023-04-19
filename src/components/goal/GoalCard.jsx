import React from 'react'

const GoalCard = () => {
  return (
    <div>
    <div className="py-12 bg-gray-100">
    <div className="container max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center">Our Goals<i> <p className="mt-2 text-gray-400 text-lg">"Providing an engaging and impactful mentoring programs in a wide range of subjects and skills."</p></i></h2>
      <div className="mt-12 flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/3 px-4">
          <div className="p-8 bg-white rounded shadow-lg">
          <div className='flex juistify-between'>
          <div className='mt-1'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500 w-6 h-6">
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                </svg>   
                </div>     
            <div>
                <h3 className="text-2xl font-bold ml-2">Quality Mentoring</h3>
            </div>
            </div>
            <p className="mt-2 text-gray-600">providing a supportive and safe online platform where peers can connect and engage in positive mentoring relationships</p>
          </div>  
        </div>
        <div className="w-full lg:w-1/3 px-4">
          <div className="p-8 bg-white rounded shadow-lg">
          <div className='flex juistify-between'>
            <div className='mt-1'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500 w-6 h-6">
                <path d="M12 20h9"></path>
                <path d="M4 20h5"></path>
                <path d="M16.5 3a6 6 0 0 1 6 6v6"></path>
                <path d="M8.5 3a6 6 0 0 0-6 6v6"></path>
                <line x1="12" y1="4" x2="12" y2="20"></line>
                </svg>     
            </div>   
            <div >
                <h3 className="text-2xl font-bold ml-3">Quality Education</h3>
            </div>
            </div>
            <p className="mt-2 text-gray-600">providing a platform where peers can learn from one another in a supportive and collaborative environment</p>
          </div>  
        </div>
        <div className="w-full lg:w-1/3 px-4">
          <div className="p-8 bg-white rounded shadow-lg">
          <div className='flex juistify-between'>
            <div className='mt-1'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500 w-6 h-6">
                <path d="M12 2.5C6.20101 2.5 1.5 7.20101 1.5 13C1.5 18.799 6.20101 23.5 12 23.5C17.799 23.5 22.5 18.799 22.5 13C22.5 7.20101 17.799 2.5 12 2.5Z"></path>
                <path d="M10.5 8H13.5V16H10.5V8Z"></path>
                <path d="M12 16.5C12.8284 16.5 13.5 15.8284 13.5 15C13.5 14.1716 12.8284 13.5 12 13.5C11.1716 13.5 10.5 14.1716 10.5 15C10.5 15.8284 11.1716 16.5 12 16.5Z"></path>
                </svg>
            </div>
            <div>   
                <h3 className="text-2xl font-bold ml-3">Inclusive Environment</h3>
            </div>  
            </div>  
            <p className="mt-2 text-gray-600">providing a platform where everyone feels welcome and supported</p>
           
          </div>  
        </div>
      </div>
    </div>
  </div>
    
    </div>
  )
}

export default GoalCard