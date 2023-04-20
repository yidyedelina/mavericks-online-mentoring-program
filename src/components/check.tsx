import React from 'react'

const Help = () => {
  return (
    <div className="h-60">
      <div className="rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 p-6 shadow-lg">
        <div className="flex flex-col items-center justify-center text-white">
          <h2 className="mb-2 text-3xl font-bold ">Support Our Mission</h2>
          <p className="mb-4 text-lg">
            Help us provide free quality education and mentoring to everyone.
          </p>
          <button className="rounded-full bg-white px-6 py-2 font-semibold text-cyan-500 shadow-lg hover:bg-cyan-50 hover:text-cyan-500">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Help
