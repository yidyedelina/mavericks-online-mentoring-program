import { useEffect, useState } from 'react'
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

const MilestoneDetails = ({ mentee }) => {
  const [milestone, setMilestone] = useState({
    grading: {
      completeness: null,
      correctness: null,
      style: null,
      total: 0,
    },
    submission: 'https://github.com/sample_repo/assignment',
  })

  useEffect(() => {
    // Not sure what structure the milestone will be in
    // so I'm just going to simulate fetching them as an object
  }, [])

  const handleGrading = (e) => {
    // send the data to the server somehow
    e.preventDefault()
    // more code goes here
  }
  return (
    <div className="flex flex-col gap-6 p-6">
      <header className="flex items-center justify-between">
        <h2 className="text-3xl">Mentee Milestone Project</h2>
        <Link
          to={`/${mentee.id}/tasks`}
          className="rounded-md border border-slate-200 px-3 py-1"
        >
          Tasks
        </Link>
      </header>

      <h3 className="text-2xl">{mentee.name}</h3>
      <h2>Grade the Submission</h2>
      <p>Submission: {milestone.submission}</p>
      <form onSubmit={handleGrading} className="flex flex-col gap-2 ">
        <label htmlFor="complete">
          Completeness:
          <input
            type="number"
            onChange={(e) =>
              setMilestone((prevState) => ({
                ...prevState,
                grading: {
                  ...prevState.grading,
                  completeness: parseInt(e.target.value),
                },
              }))
            }
            value={milestone.grading.completeness}
            min={0}
            max={10}
            name="complete"
            id="complete"
          />
        </label>
        <label htmlFor="correct">
          Correctness:
          <input
            type="number"
            value={milestone.grading.correctness}
            onChange={(e) =>
              setMilestone((prevState) => ({
                ...prevState,
                grading: {
                  ...prevState.grading,
                  correctness: parseInt(e.target.value),
                },
              }))
            }
            min={0}
            max={10}
            name="correct"
            id="correct"
          />
        </label>
        <label htmlFor="style">
          Style:
          <input
            type="number"
            onChange={(e) =>
              setMilestone((prevState) => ({
                ...prevState,
                grading: {
                  ...prevState.grading,
                  style: parseInt(e.target.value),
                },
              }))
            }
            value={milestone.grading.style}
            min={0}
            max={10}
            name="style"
            id="style"
          />
        </label>
        <p>Total : {milestone.grading.total}</p>
        <button className="rounded-md border border-slate-200 px-3 py-1" type="submit">Submit</button>
      </form>
    </div>
  )
}
export default MilestoneDetails
