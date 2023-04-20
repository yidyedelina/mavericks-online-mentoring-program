import React from 'react'

import type { Mentees, Mentors } from '../../services/Courses/types'
import { useSelectMentorMutation } from '../../services/Courses/courseapi'
import { useDispatch } from 'react-redux'
import { login } from '../../features/AuthState/auth'

function MentorrCard({
  mentor,
  selected,
}: {
  mentor: Mentors
  selected: boolean
}) {
  const [selectMentor, status] = useSelectMentorMutation()
  const handleSelectMentor = async () => {
    await selectMentor({
      mentorId: mentor.id,
    })
  }
  return (
    <div className="max-w-md overflow-hidden rounded-lg bg-white shadow-lg">
      <img
        className="h-48 w-full object-cover"
        src={mentor?.image}
        alt={mentor?.name}
      />
      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold">{mentor.name}</h2>
        <h3 className="mb-2 text-lg">{mentor.specialization}</h3>
        <p className="mb-4 text-base text-gray-700">{mentor.description}</p>
        <div className="flex flex-wrap">
          <span className="mr-2 text-sm text-gray-600">Areas:</span>
          {mentor?.areas?.map((project) => (
            <span
              key={project}
              className="mb-2 mr-2 rounded-lg bg-gray-200 px-2 py-1 text-sm text-gray-700"
            >
              {project}
            </span>
          ))}
        </div>
        {selected ? (
          <p>email: {mentor?.email}</p>
        ) : (
          <button
            type="button"
            onClick={handleSelectMentor}
            className="mb-2 mr-2 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
          >
            {status.isLoading ? 'Loading...' : 'Select Mentor'}
          </button>
        )}
      </div>
    </div>
  )
}

export default MentorrCard
