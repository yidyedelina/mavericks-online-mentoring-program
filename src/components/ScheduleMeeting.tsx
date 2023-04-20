import { handleRequest } from 'msw'
import React, { useState } from 'react'

import { useScheduleMeetingMutation } from '../services/Courses/courseapi'

import DatePicker from './Date'
import Toast from './basic/Toast'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

interface Props {
  modal: boolean
}

const ScheduleMeetings = ({ modal, onClick }: Props) => {
  const [mod, setMod] = useState<boolean>(modal)
  const [date, setDate] = useState<Date>(new Date())
  const [title, setTitle] = useState<string>('')
  const [type, setType] = useState<string>('Video Call')
  const [createSchedule, status] = useScheduleMeetingMutation()
  const close = () => {
    onClick(false)
  }
  const auth = useSelector((state: RootState) => state.auth)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title) return
    createSchedule({
      schedule: { date, mentor: auth.user.id, title, type },
    })
  }
  return (
    <>
      {modal && (
        <>
          <div
            id="authentication-modal"
            tabIndex={-1}
            aria-hidden="true"
            className="fixed bottom-40 w-1/3 right-0 z-50 max-h-full  overflow-y-auto overflow-x-hidden p-4"
          >
            <div className="relative max-h-full w-full max-w-md">
              {/* Modal content */}
              <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
                <button
                  onClick={close}
                  className="absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="px-6 py-6 lg:px-8">
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    Schedule Meeting
                  </h3>
                  <form className="space-y-6" action="#">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Meeting Topic/Title
                      </label>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        id="Meeting topic"
                        name="Meeting topic"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="countries_disabled"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Select Meeting Type
                      </label>
                      <select
                        id="countries_disabled"
                        onChange={(e) => setType(e.target.value)}
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      >
                        <option value="Video Call" selected>
                          Video Call
                        </option>
                        <option value="Voice Call">Voice call</option>
                        <option value="Text Chat">Chat</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Select Meeting Date
                      </label>
                      <DatePicker setDate={setDate} />
                    </div>
                    <button
                      onClick={(e) => handleSubmit(e)}
                      className="w-full rounded-lg bg-cyan-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-500 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      {status.isLoading ? 'Loading...' : 'Schedule Meeting'}
                    </button>
                    {status.isSuccess && (
                      <Toast message="Meeting Scheduled" type="success" />
                    )}
                    {status.isError && (
                      <Toast message="Error scheduling meeting" type="error" />
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
export default ScheduleMeetings
