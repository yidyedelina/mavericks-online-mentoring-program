import React from 'react'

const MenteeProfile = () => {
  return (
    <div className="bg-gray-100 relative pb-32">
    <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-cyan-500 to-cyan-600"></div>
    <div className="container mx-auto px-4 relative">
      <div className="py-16">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-cyan-500 h-20"></div>
          <div className="px-6 py-8">
            <h1 className="text-4xl font-bold mb-8">Create a Profile</h1>
            <form>
              <div className="mb-4">
                <label className="block text-lg font-medium mb-2" htmlFor="name">Name</label>
                <input className="rounded-lg border-2 border-gray-300 py-2 px-4 w-full" type="text" id="name" name="name" placeholder="Enter your name"/>
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
                <input className="rounded-lg border-2 border-gray-300 py-2 px-4 w-full" type="email" id="email" name="email" placeholder="Enter your email"/>
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium mb-2" htmlFor="password">Password</label>
                <input className="rounded-lg border-2 border-gray-300 py-2 px-4 w-full" type="password" id="password" name="password" placeholder="Enter your password"/>
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium mb-2" htmlFor="interests">Interests</label>
                <textarea className="rounded-lg border-2 border-gray-300 py-2 px-4 w-full" id="interests" name="interests" rows="4" placeholder="Enter your interests"></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium mb-2" htmlFor="bio">Bio</label>
                <textarea className="rounded-lg border-2 border-gray-300 py-2 px-4 w-full" id="bio" name="bio" rows="4" placeholder="Enter your bio"></textarea>
              </div>
              <div className="flex justify-end">
                <button className="bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700" type="submit">Create Profile</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MenteeProfile