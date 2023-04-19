import React, { useState } from 'react'

const SideBar = () => {
  const [isDisabled, setIsDisabled] = useState(false)
  const handle = () => {
    setIsDisabled(!isDisabled)
  }
  return (
    <div
      className=" max-w-xs justify-center gap-12
     rounded-lg border border-gray-200 bg-gray-200 p-6 shadow "
    >
      <div>
        <button
          type="button"
          onClick={handle}
          className={`inline-flex items-center  rounded-md  px-3 py-1 text-sm  ${
            !isDisabled
              ? 'cursor-not-allowed bg-gray-100 text-gray-400'
              : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
          }`}
        >
          {' '}
          Community
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={handle}
          className={`mt-5 inline-flex items-center  rounded-md  px-3 py-1 text-sm  ${
            isDisabled
              ? 'cursor-not-allowed bg-gray-100 text-gray-400'
              : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
          }`}
        >
          {' '}
          By You
        </button>
      </div>
    </div>
  )
}
export default SideBar
