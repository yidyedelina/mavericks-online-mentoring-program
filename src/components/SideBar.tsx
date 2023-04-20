import React, { useState } from 'react'

const SideBar = () => {
  const [isDisabled, setIsDisabled] = useState(false)
  const handle = () => {
    setIsDisabled(!isDisabled)
  }
  return (
    <div
      className=" max-w-xs justify-center gap-12
     rounded-lg border border-cyan-200 bg-cyan-200 p-6 shadow "
    >
      <div>
        <button
          type="button"
          onClick={handle}
          className={`inline-flex items-center  rounded-md  px-3 py-1 text-sm  ${
            !isDisabled
              ? 'cursor-not-allowed bg-cyan-100 text-cyan-400'
              : 'bg-cyan-200 text-cyan-900 hover:bg-cyan-300'
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
              ? 'cursor-not-allowed bg-cyan-100 text-cyan-400'
              : 'bg-cyan-200 text-cyan-900 hover:bg-cyan-300'
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
