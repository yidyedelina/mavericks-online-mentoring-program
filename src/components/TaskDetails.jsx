import { Link } from 'react-router-dom'
/**
 * @param {mentee} : { id: number,
 *                     name: string,
 *                     tasks: {
 *                          id: number,
 *                          name: string,
 *                          completed: boolean}[]
 *                    }
 *
 */

const TaskDetails = ({ mentee }) => {
  const performance =
    mentee.tasks.filter((task) => task.completed === true).length /
    mentee.tasks.length
  return (
    <div className="flex flex-col gap-6 p-6">
      <header className="flex items-center justify-between">
        <h2 className="text-3xl">Mentee Tasks Progress</h2>
        <Link
          to={`/${mentee.id}/milestones`}
          className="rounded-md border border-slate-200 px-3 py-1"
        >
          Milestones
        </Link>
      </header>
      <h3 className="text-2xl">{mentee.name}</h3>
      <p>
        Performance: {performance * 100}% |{' '}
        {performance >= 0.5 ? 'Good' : 'Bad'}
      </p>
      <table className="w-full bg-blue-400 text-left">
        <thead>
          <tr>
            <th> Tasks </th>
            <th>Complete</th>
          </tr>
        </thead>
        <tbody>
          {mentee.tasks.map((task) => {
            return (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>{task.completed ? 'Yes' : 'No'}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default TaskDetails
