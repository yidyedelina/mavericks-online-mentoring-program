/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const AddTaskContent = ({
  task,
  setTask
}: {
  task: string
  setTask: (val: string) => void
}) => {
  const handleTaskChange = (value: string) => {
    setTask(value)
  }

  return (
    <div className="my-4">
      <label className="mb-2 block text-sm font-medium text-gray-900">
        Task
      </label>
      <ReactQuill value={task} onChange={handleTaskChange} />
    </div>
  )
}
export default AddTaskContent
