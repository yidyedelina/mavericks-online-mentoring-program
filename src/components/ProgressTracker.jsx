import { useEffect, useState } from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'

import MilestoneDetails from './MilestoneDetails'
import TaskDetails from './TaskDetails'

const ProgressTracker = () => {
  const [mentees, setMentees] = useState([])

  useEffect(() => {
    // fetch mentees from db
    console.log('fetching mentees from db')
    // simulation of fetching mentees from db
    setMentees([
      {
        id: 1,
        name: 'Mentee 1',
        tasks: [
          { completed: true, id: 1, name: 'Task 1' },
          { completed: true, id: 2, name: 'Task 2' },
          { completed: false, id: 3, name: 'Task 3' },
          { completed: false, id: 4, name: 'Task 4' },
        ],
      },
      {
        id: 2,
        name: 'Mentee 2',
        tasks: [
          { completed: true, id: 1, name: 'Task 1' },
          { completed: true, id: 2, name: 'Task 2' },
          { completed: false, id: 3, name: 'Task 3' },
          { completed: false, id: 4, name: 'Task 4' },
        ],
      },
    ])
  }, [])

  return (
    <>
      <h2 className="mb-5 text-3xl">Mentee Progress</h2>
      <div className="grid h-full grid-cols-2 grid-rows-1 gap-1">
        <table className="h-fit text-left">
          <thead>
            <tr>
              <th>Mentee</th>
              <th>Tasks Completed</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {mentees.map((mentee) => {
              return (
                <tr key={mentee.id}>
                  <td>
                    <Link to={`/${mentee.id}/*`}>{mentee.name}</Link>
                  </td>
                  <td>
                    {
                      mentee.tasks.filter((task) => task.completed === true)
                        .length
                    }
                  </td>
                  <td>
                    {(
                      (mentee.tasks.filter((task) => task.completed === true)
                        .length /
                        mentee.tasks.length) *
                      100
                    ).toFixed(1)}
                    %
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="bg-blue-500">
          <Routes>
            <Route
              path="/"
              element={<h1>Click on a mentee to see their progress</h1>}
            />
            {mentees.map((mentee) => {
              return (
                <>
                  <Route
                    key={mentee.id}
                    path={`/${mentee.id}/*`}
                    element={
                      <div className="flex flex-col gap-3 p-6">
                        <h3 className="text-2xl font-bold"> {mentee.name} </h3>
                        <p>
                          <Link to={`/${mentee.id}/tasks`}>Go to Tasks</Link>
                        </p>
                        <p>
                          <Link to={`/${mentee.id}/milestones`}>
                            Go to Milestones
                          </Link>
                        </p>
                      </div>
                    }
                  />
                  <Route
                    key={`${mentee.id}_tasks`}
                    path={`/${mentee.id}/tasks`}
                    element={<TaskDetails mentee={mentee} />}
                  />
                  <Route
                    key={`${mentee.id}_milestone`}
                    path={`/${mentee.id}/milestones`}
                    element={<MilestoneDetails mentee={mentee} />}
                  />
                </>
              )
            })}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default ProgressTracker
