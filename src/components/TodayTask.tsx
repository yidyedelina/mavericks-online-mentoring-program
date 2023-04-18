import { useGetTodayTaskQuery } from '../services/Courses/courseapi'

export default function TodaysTask() {
  const { data, error, isLoading } = useGetTodayTaskQuery({
    courseId: 'FX7gxWWG5ZLDCykuaQYn',
    menteesId: 'K8zcusNSikRmBrOp8J7x',
  })
  return (
    <ul className="w-96 rounded-lg border border-gray-200 bg-white text-left text-sm font-medium text-gray-900">
      <li className="w-full rounded-t-lg border-b border-gray-200 px-4 py-2 dark:border-gray-600">
        Today's Activity
      </li>
      {isLoading ? (
        <li className="w-full px-4 py-2">Loading...</li>
      ) : error ? (
        <li className="w-full px-4 py-2">Error: {'something went wrong'}</li>
      ) : (
        data?.map((task) => (
          <li className="w-full px-4 py-2" key={task.id}>
            <div className="flex items-center">
              <input
                checked={task.completed}
                disabled={task.completed}
                id="checked-checkbox"
                type="checkbox"
                defaultValue=""
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checked-checkbox"
                className="ml-2 text-base font-medium"
              >
                {task.title}
              </label>
            </div>
            <p className="text-xs text-gray-400">{task.type}</p>
          </li>
        ))
      )}
    </ul>
  )
}
