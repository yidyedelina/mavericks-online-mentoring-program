import { useSelector } from 'react-redux';
import { useGetTodayTaskQuery } from '../services/Courses/courseapi'
import { RootState } from '../store';
import TaskCheckBox from './basic/TaskCheckBox';

export default function TodaysTask() {
  const auth = useSelector((state: RootState) => state.auth);
  const { data, error, isLoading } = useGetTodayTaskQuery({
    courseId: auth.user.course.trim(),
    menteesId: auth.user.id,
  });
  return (
    <ul className="w-full rounded-lg border border-gray-200 bg-white text-left text-sm font-medium text-gray-900">
      <li className="w-full rounded-t-lg border-b border-gray-200 px-4 py-2 dark:border-gray-600">
        Today's Activity
      </li>
      {isLoading ? (
        <li className="w-full px-4 py-2">Loading...</li>
      ) : error ? (
        <li className="w-full px-4 py-2">Error: {'something went wrong'}</li>
      ) : (
        data?.map((task,index) => (
          <li className="w-full px-4 py-2" key={task.id}>
            <div className="flex items-center">
              <TaskCheckBox task={task} />
            </div>
            <p className="text-xs text-gray-400">{task.type}</p>
          </li>
        ))
      )}
    </ul>
  )
}
