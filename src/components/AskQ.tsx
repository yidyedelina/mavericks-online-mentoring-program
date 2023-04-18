import React from 'react'

const AskQ = () => {
  return (
    <>
      <div className="w-128 mx-auto  my-4 h-80 max-w-sm p-4 align-middle">
        <div className="relative max-h-full w-full max-w-md">
          {/* Modal content */}
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-hide="authentication-modal"
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
            <div className=" px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Add Qusetions
              </h3>
              <div className=" rounded-md bg-sky-100 p-2 leading-5">
                <p className="mb-4 text-black dark:text-gray-400">Tips:</p>
                <ul className="leading-4">
                  <li className="mb-4">
                    <span className="text-gray-500 dark:text-gray-400">
                      Make sure your question is clear and concise.
                    </span>
                  </li>
                  <li className="mb-4">
                    <span className="text-gray-500 dark:text-gray-400">
                      Keep your question short and to the point.
                    </span>
                  </li>
                  <li className="mb-4">
                    <span className="text-gray-500 dark:text-gray-400">
                      Double-check grammar and spelling.
                    </span>
                  </li>
                </ul>
              </div>
              <br />
              <form className="space-y-6" action="#">
                <>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Question
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Start your question with 'What', 'How', 'Why', etc."
                  />
                </>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add Question
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AskQ
