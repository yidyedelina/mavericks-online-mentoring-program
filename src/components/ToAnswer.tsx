import { setDoc, collection } from '@firebase/firestore'
import { doc, getDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { db } from '../config/firebase'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { Navigate } from 'react-router-dom'

interface Props {
  onClose: () => void
  isOpen: Boolean
  qid: string
}

const ToAnswer = ({ isOpen, onClose, qid }: Props) => {
  const auth = useSelector((state: RootState) => state.auth)
 
  const [answer, setAnswer] = useState<string>('')
  const name = useSelector((state: RootState) => state.auth.user.name)
   if(auth.isLoggedin === false) return <Navigate to="/login" />
  const handle = async () => {
    const docRef = doc(db, 'Questions', qid)
    const snapShot = await getDoc(docRef)
    const data = {
      ...snapShot.data(),
    }
    data.answer.push({
      answer,
      Firstname: name.split(' ')[0],
      Lastname: name.split(' ')[1],
    })
    await setDoc(docRef, data)
  }

  if (!isOpen) return null
  return (
    <>
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed inset-0 z-50 flex items-center justify-center bg-cyan-900 bg-opacity-50"
      >
        <div className="relative max-h-full w-full max-w-2xl">
          {/* Modal content */}
          <div className="relative rounded-lg bg-white shadow dark:bg-cyan-700">
            {/* Modal header */}
            <div className="flex items-start justify-between rounded-t border-b p-4 dark:border-cyan-600">
              <h3 className="text-lg font-medium text-cyan-900 dark:text-white">
                Write Your Answer
              </h3>
              <button
                type="button"
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-cyan-400 hover:bg-cyan-200 hover:text-cyan-900 dark:hover:bg-cyan-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
                onClick={onClose}
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
            </div>
            <div className="space-y-6 p-6">
              <div className="my-4">
                <label className="mb-2 block text-sm font-medium text-cyan-900">
                  Answer
                </label>
                <ReactQuill value={answer} onChange={setAnswer} />
              </div>
            </div>
            {/* Modal footer */}
            <div className="flex items-center space-x-2 rounded-b border-t border-cyan-200 p-6 dark:border-cyan-600">
              <button
                data-modal-hide="defaultModal"
                type="button"
                onClick={handle}
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ToAnswer
