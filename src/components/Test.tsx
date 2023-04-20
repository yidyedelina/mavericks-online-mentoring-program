import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useGetMenteesTasksQuery } from '../services/Courses/courseapi'
import { Tasks } from '../services/Courses/types'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export function Test() {
  const data = [
    { completed: false, description: 'Activity 1' },
    { completed: false, description: 'Activity 2' },
    { completed: false, description: 'Activity 3' },
    { completed: false, description: 'Activity 4' },
  ]
  const [tasks, setTasks] = useState(data)

  const handleTaskComplete = (index) => {
    const newTasks = [...tasks]
    newTasks[index].completed = !newTasks[index].completed
    setTasks(newTasks)
  }

  return (
    <div className="mx-auto max-w-md">
      <h2 className="mb-4 text-2xl font-medium">Today's Activities</h2>
      <ul className="divide-y divide-gray-300">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center py-4">
            <input
              type="checkbox"
              className="form-checkbox mr-2 h-5 w-5 text-blue-500"
              checked={task.completed}
              onChange={() => handleTaskComplete(index)}
            />
            <span
              className={`flex-1 ${
                task.completed ? 'text-gray-500 line-through' : ''
              }`}
            >
              {task.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const RecentActions = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const { data, isLoading, error } = useGetMenteesTasksQuery(
    {
     menteesId:  auth.user.id,
   }
  )
  return (
    <div className="mx-auto max-full">
      <h2 className="mb-4 text-xl font-medium">Recent Actions</h2>
      <ul className="divide-y divide-gray-400">
        {isLoading ? (
          <li className="w-full px-4 py-2">Loading...</li>
        ) : error ? (
          <li className="w-full px-4 py-2">Error: {'something went wrong'}</li>
        ) : ''}
        {data?.map((action: Tasks, index) => (
          <li key={index} className="py-4">
            <div className="flex items-center justify-between">
              <div className="mr-4">
                <p className="text-lg font-medium">{action.title}</p>
                <p className="text-gray-500">{new Date('2018-05-18T04:00:00Z').toUTCString()}</p>
              </div>
              <div className="text-blue-500">
                <Link to={`mentees/taskDetails/${action.id}`}>view</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentActions
