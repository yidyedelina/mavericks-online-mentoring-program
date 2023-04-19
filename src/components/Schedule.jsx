import React from 'react'

const Schedule = () => {
  return (
    <div className='mb-90'>
    <div className="bg-cyan-100 rounded-lg p-4">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-bold text-cyan-700">Upcoming Courses</h2>
      <button className="bg-cyan-500 text-white rounded-lg px-4 py-2 hover:bg-cyan-600">Start a new course</button>
    </div>
    <ul className="divide-y divide-cyan-200">
      <li className="py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500 w-6 h-6 mr-2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <div>
              <h3 className="text-base font-medium text-cyan-800">Introduction to React</h3>
              <p className="text-sm text-cyan-600">Starts in 3 days</p>
            </div>
          </div>
          <button className="bg-cyan-500 text-white rounded-lg px-4 py-2 hover:bg-cyan-600">Schedule meeting</button>
        </div>
      </li>
      <li className="py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500 w-6 h-6 mr-2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <div>
              <h3 className="text-base font-medium text-cyan-800">Advanced CSS Techniques</h3>
              <p className="text-sm text-cyan-600">Starts in 10 days</p>
            </div>
          </div>
          <button className="bg-cyan-500 text-white rounded-lg px-4 py-2 hover:bg-cyan-600">Schedule meeting</button>
        </div>
      </li>
    </ul>
  </div>
    
    </div>
  )
}

export default Schedule