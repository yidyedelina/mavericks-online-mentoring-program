import { useState } from "react"

export function Test() {
  const data = [
    { description: "Activity 1", completed: false },
    { description: "Activity 2", completed: false },
    { description: "Activity 3", completed: false },
    { description: "Activity 4", completed: false },
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
  const [actions, setActions] = useState([
    {
      title: 'Completed Lesson 1',
      timestamp: '2023-04-18T12:34:56.789Z',
      link: '/lessons/1',
    },
    {
      title: 'Started Lesson 2',
      timestamp: '2023-04-17T09:12:34.567Z',
      link: '/lessons/2',
    },
    {
      title: 'Created Account',
      timestamp: '2023-04-16T15:43:21.098Z',
      link: '/account',
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)

  const handleLoadMore = () => {
    setPage(page + 1)
  }

  return (
    <div className="mx-auto max-w-md">
      <h2 className="mb-4 text-xl font-medium">Recent Actions</h2>
      <ul className="divide-y divide-gray-400">
        {actions.map((action, index) => (
          <li key={index} className="py-4">
            <div className="flex items-center justify-between">
              <div className="mr-4">
                <p className="text-lg font-medium">{action.title}</p>
                <p className="text-gray-500">{action.timestamp}</p>
              </div>
              <div className="text-blue-500">
                <a href={action.link}>View</a>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {!isLoading && (
        <button className="mt-4 text-blue-500" onClick={handleLoadMore}>
          See More
        </button>
      )}
    </div>
  )
}

export default RecentActions
