import React from 'react'
import { useSelector } from 'react-redux'

import mentor1 from '../../assets/images/mentor1.jpg'
import mentor2 from '../../assets/images/mentor2.jpg'
import mentor3 from '../../assets/images/mentor3.jpg'
import mentor4 from '../../assets/images/mentor4.jpg'
import mentor5 from '../../assets/images/mentor5.jpeg'
import mentor6 from '../../assets/images/mentor6.jpg'
import mentor7 from '../../assets/images/mentor7.jpg'
import mentor8 from '../../assets/images/mentor8.jpg'
import {
  useGetMentorQuery,
  useGetMentorsListQuery,
} from '../../services/Courses/courseapi'
import type { RootState } from '../../store'

import MentorrCard from './MentorrCard'

function MentorsPage() {
  const auth = useSelector((state: RootState) => state.auth)
  const courseId = useSelector((state: RootState) => state.auth.user.course)
  const {
    data: mentor,
    isLoading: isLoading2,
    error2,
  } = useGetMentorQuery(auth.user.mentor)
  const { data, isLoading, error } = useGetMentorsListQuery(
    courseId !== null ? courseId.trim() : ''
  )
  return (
    <>
      {auth.user.mentor !== undefined ? (
        <>
          <h1 className="mb-4 text-3xl font-bold text-cyan-400">
            Here's Your Mentor
          </h1>
          {mentor && (
            <>
              {isLoading2 ? <div>Loading...</div> : null}
              <MentorrCard mentor={mentor} selected={true} />
            </>
          )}
        </>
      ) : (
        <>
          {isLoading ? <div>Loading...</div> : null}
          <div className="min-h-screen bg-cyan-800 py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="mb-4 text-3xl font-bold text-white">
                Meet Our Mentors
              </h1>
              <p className="mb-8 text-white">
                Browse our list of mentors and find the right one for you.
              </p>
              <div className="flex flex-wrap">
                {data?.map((mentor) => (
                  <MentorrCard
                    key={mentor.name}
                    mentor={mentor}
                    selected={false}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default MentorsPage
