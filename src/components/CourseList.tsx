import { Link } from 'react-router-dom'
import { Tasks } from '../services/Courses/types'

export default function CourseList({
  title,
  tasks,
}: {
  title: string
  tasks: Tasks[]
}) {
  const weeks = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
  } as const
  return (
    <div className="w-full">
      <h1> {title} </h1>
      <ul className="rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
        {tasks.map((task: Tasks) => (
          <Link to={`/mentors/taskDetails/${task.id}`}>
            <li class="w-full rounded-t-lg border-b border-gray-200 px-4 py-2 dark:border-gray-600">
              <p className="text-sm font-semibold">{task.title}</p>
              <p className="text-xs text-gray-400">
                {weeks[parseInt(task.day) <= 7 ? parseInt(task.day) : 1]}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
