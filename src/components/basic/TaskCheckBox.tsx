import { useState } from 'react'

import type { Tasks } from '../../services/Courses/types'
import {
  useMarkTaskCompletedMutation,
  useRemoveTaskMutation,
} from '../../services/Courses/courseapi'

export default function TaskCheckBox({ task }: { task: Tasks }) {
  const [checked, setChecked] = useState(task.completed)
  const [addTask, status] = useMarkTaskCompletedMutation()
  const [removeTask, status2] = useRemoveTaskMutation()
  const handleChange = async () => {
    try {
      if (checked) {
        await removeTask(task.id)
      } else {
        await addTask(task.id)
      }
      setChecked(!checked)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-600"
        checked={checked}
        onChange={handleChange}
      />
      <p>Task 1</p>
    </div>
  )
}
