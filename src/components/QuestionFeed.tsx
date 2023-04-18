import { faCheck, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const QuestionFeed = () => {
  const AnswerButton = () => {
    return (
      <button className="rounded-md bg-slate-200 p-1 px-3">
        <FontAwesomeIcon icon={faCheck} />
        &nbsp; Answers
      </button>
    )
  }
  return (
    <div className="max-w-xl rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 flex items-center space-x-4">
        <div className="space-y-1 font-medium dark:text-white">
          <p>Jese Leos</p>
          <hr />
        </div>
      </div>
      <div>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          What is a tutorial flowchart to test whether given three sides can
          form a triangle or not?
        </p>
      </div>
      <AnswerButton />
      <div></div>
    </div>
  )
}
export default QuestionFeed
