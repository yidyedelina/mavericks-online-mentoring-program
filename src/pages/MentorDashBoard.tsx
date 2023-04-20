import { useEffect, useState } from 'react'
import CourseList from '../components/CourseList'
import TabBar from '../components/TabBar'
import RecentActions from '../components/Test'
import TodaysTask from '../components/TodayTask'
import WeekBox from '../components/WeekBox'
import FloatingButton from '../components/basic/FloatingAction'
import { useGetCoursesQuery } from '../services/Courses/courseapi'
import { Tasks } from '../services/Courses/types'
import CreateTaskForm from '../components/CreateTaskForm'
import Modal from '../components/basic/Modal'
import MenteesList from '../components/MenteesList'
import ScheduleMeeting from '../components/ScheduleMeeting'

export default function MentorDashBoard() {
  const { data, isLoading, error } = useGetCoursesQuery()
  const [components, setcomponents] = useState([])
  useEffect(() => {
    let dt = data?.map((values) => {
      return {
        component: <CourseList title='' tasks={values.activities} />,
        label: `week ${values.week}`,
      }
    })
    dt?.push({
      component: <MenteesList />,
      label: 'Mentees'
    })
    dt?.push({
      component: <ScheduleMeeting modal={true}/>,
      label: 'schedule',
    })
    setcomponents(dt ? dt : [])
  }, [data]);
  const [isOpen, setIsOpen] = useState(false)
  return (
    <main className="w-full">
      {data && (
        <TabBar
          tabs={components}
        />
      )}
      <FloatingButton onClick={setIsOpen} />

      <Modal isOpen={isOpen} onClose={setIsOpen}>
        <CreateTaskForm />
      </Modal>
      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <CreateTaskForm />
      </Modal> */}
    </main>
  )
}
