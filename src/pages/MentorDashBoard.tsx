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
import { useSelector } from 'react-redux'

export default function MentorDashBoard() {
  const { data, isLoading, error } = useGetCoursesQuery()
  const [components, setcomponents] = useState([])
  const [isMeetingOpen, setIsMeetingOpen] = useState(false)
  const counter = useSelector((state: any) => state.counter.value)
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
    setcomponents(dt ? dt : [])
  }, [data]);
  const [isOpen, setIsOpen] = useState(false)
  return (
    <main className="w-full">
      <h1 className='hidden'>{ counter}</h1>
      {data && (
        <TabBar
          tabs={components}
        />
      )}
      <div className='fixed bottom-20 right-20'>
        <FloatingButton onClick={setIsOpen}>create task</FloatingButton>
        <FloatingButton onClick={setIsMeetingOpen}>schedule</FloatingButton>
        <ScheduleMeeting modal={isMeetingOpen} onClick={setIsMeetingOpen} />
        <Modal isOpen={isOpen} onClose={setIsOpen}>
          <CreateTaskForm />
        </Modal>
      </div>
      

      
      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <CreateTaskForm />
      </Modal> */}
    </main>
  )
}
