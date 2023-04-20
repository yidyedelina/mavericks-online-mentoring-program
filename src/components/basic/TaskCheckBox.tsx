import { useState } from 'react'

import {
  useMarkTaskCompletedMutation,
  useRemoveTaskMutation,
} from '../../services/Courses/courseapi'
import type { Tasks } from '../../services/Courses/types'
import { Link } from 'react-router-dom'

export default function TaskCheckBox({ task }: { task: Tasks }) {
  const [checked, setChecked] = useState(task.completed)
  const [addTask, status] = useMarkTaskCompletedMutation()
  const [removeTask, status2] = useRemoveTaskMutation()
  const handleChange = async () => {
    try {
      if (checked) {
        await removeTask(task.id)
      } else {
        await addTask(task)
      }
      setChecked(!checked)
    } catch (error) {
      
    }
  }
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-cyan-400"
        checked={checked}
        onChange={handleChange}
      />
      <Link to={`mentees/taskDetails/${task.id}`}>{task.title}</Link>
    </div>
  )
}
