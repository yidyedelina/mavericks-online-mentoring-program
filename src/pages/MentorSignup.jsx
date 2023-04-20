import React from 'react'

const MentorSignup = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div className="relative py-3 sm:max-w-xl sm:mx-auto">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div className="max-w-md mx-auto">
        <div>
          <h1 className="text-2xl font-semibold">Mentor Signup</h1>
        </div>
        <div className="divide-y divide-gray-200">
          <form action="#" method="POST" className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div className="relative">
              <input type="text" name="name" id="name" required className="peer w-full h-10 border-b-2 border-gray-300 text-lg placeholder-transparent focus:outline-none focus:border-cyan-400" placeholder="Full Name" />
              <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm py-0.5 px-1 bg-white transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-cyan-400 peer-focus:text-sm">Full Name</label>
            </div>
            <div className="relative">
              <input type="email" name="email" id="email" required className="peer w-full h-10 border-b-2 border-gray-300 text-lg placeholder-transparent focus:outline-none focus:border-cyan-400" placeholder="Email Address" />
              <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm py-0.5 px-1 bg-white transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-cyan-400 peer-focus:text-sm">Email Address</label>
            </div>
            <div className="relative">
              <input type="password" name="password" id="password" pattern='8' required className="peer w-full h-10 border-b-2 border-gray-300 text-lg placeholder-transparent focus:outline-none focus:border-cyan-400" placeholder="Password" />
              <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm py-0.5 px-1 bg-white transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-cyan-400 peer-focus:text-sm">Password</label>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-gradient-to-r from-cyan-400 to-light-blue-500 text-white font-semibold px-6 py-2 rounded-full">Signup</button>
            </div>
          </form>
          <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
            <p>Or signup with</p>
            <div className="mt-2">
              <button className="bg-white border border-gray-300 shadow-sm hover:shadow-md text-gray-700 font-semibold px-6 py-2 rounded-full transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Logo" className="w-4 h-4 inline mr-2" />
                Google
              </button>
            </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

  )
}

export default MentorSignup
