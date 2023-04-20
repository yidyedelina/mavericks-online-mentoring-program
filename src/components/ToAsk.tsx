import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
} from 'firebase/firestore'
import { db } from '../config/firebase'

interface Props {
  onClose: () => void
  isOpen: boolean
}
const ToAsk = ({ isOpen, onClose }: Props) => {
  const [Question, setQuestion] = useState<string>('')
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const docRef = await addDoc(collection(db, 'Questions'), {
        Firstname: 'Yonas',
        Lastname: 'Kebede',
        question: Question,
        answer: [],
      })
      console.log('Document written with ID: ', docRef.id)
      onClose()
    } catch (e) {
      console.error('Error adding document: ', e)
    }
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
                Add Question
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
            <div className="space-y-6 p-3">
              <div className=" rounded-md bg-sky-100 p-2 leading-5">
                <p className="mb-4 text-black dark:text-cyan-400">Tips:</p>
                <ul className="leading-4">
                  <li className="mb-4">
                    <span className="text-cyan-500 dark:text-cyan-400">
                      Make sure your question is clear and concise.
                    </span>
                  </li>
                  <li className="mb-4">
                    <span className="text-cyan-500 dark:text-cyan-400">
                      Keep your question short and to the point.
                    </span>
                  </li>
                  <li className="mb-4">
                    <span className="text-cyan-500 dark:text-cyan-400">
                      Double-check grammar and spelling.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="my-4">
                <label className="mb-2 block text-sm font-medium text-cyan-900">
                  Question
                </label>
                <ReactQuill value={Question} onChange={setQuestion} />
              </div>
            </div>
            {/* Modal footer */}
            <div className="flex items-center space-x-2 rounded-b border-t border-cyan-200 p-6 dark:border-cyan-600">
              <button
                data-modal-hide="defaultModal"
                type="button"
                onClick={handleSubmit}
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ToAsk
