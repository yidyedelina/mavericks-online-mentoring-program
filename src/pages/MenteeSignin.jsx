import React, {useState} from 'react'

import { useNavigate } from 'react-router-dom'
import Toast from '../components/basic/Toast'
import { useSignInMenteeMutation } from '../services/Courses/courseapi'

const MenteeSignin = () => {
  const [signIn, status] = useSignInMenteeMutation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    let data = await signIn({ email, password })
    if (data.data === undefined) {
      setError("email or password is incorrect")
      return;
    }
    navigate('/mentees')
  }
  return (
    <div>
      <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12">
        <div className="relative py-3 sm:mx-auto sm:max-w-xl">
          <div className="to-light-blue-500 absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-cyan-400 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"></div>
          <div className="relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="mx-auto max-w-md">
              <div>
                <h1 className="text-2xl font-semibold">Mentee Signin</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <form
                  onSubmit={handleSubmit}
                  
                  className="space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7"
                >
                  <div className="relative">
                    <input
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="peer h-10 w-full border-b-2 border-gray-300 text-lg placeholder-transparent focus:border-cyan-400 focus:outline-none"
                      placeholder="Email Address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute -top-3.5 left-0 bg-white px-1 py-0.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-cyan-400"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
                      type="password"
                      name="password"
                      id="password"
                     
                      required
                      className="peer h-10 w-full border-b-2 border-gray-300 text-lg placeholder-transparent focus:border-cyan-400 focus:outline-none"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute -top-3.5 left-0 bg-white px-1 py-0.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-cyan-400"
                    >
                      Password
                    </label>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="to-light-blue-500 rounded-full bg-gradient-to-r from-cyan-400 px-6 py-2 font-semibold text-white"
                    >
                      {status.isLoading ? 'Loading...' : 'Signin'}
                    </button>
                  </div>
                </form>
                {error && <Toast message={error} type="error" />}
                {status.isError &&  <Toast message="email or password is incorrect" type="error" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenteeSignin
