import React, { useState } from 'react'

import './App.css'
import Accordion from './components/Accordion'
import Modal from './components/basic/Modal'
import CreateTaskForm from './components/CreateTaskForm'
import MenteesTab from './components/MenteesTab'
import ProfileBanner from './components/ProfileBanner'
import TabBar from './components/TabBar'
import Banner from './components/Test'
import RecentActions from './components/Test'
import TodaysTask from './components/TodayTask'
import WeekBox from './components/WeekBox'
import CourseDetail from './components/CourseDetail'
const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true)
  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <main className="App">
      <CourseDetail />
      <ProfileBanner />
      <TabBar
        tabs={[
          {
            component: <RecentActions />,
            label: 'Recent Action',
          },
          {
            component: <TodaysTask />,
            label: "Today's Task",
          },
          {
            component: <WeekBox />,
            label: 'Week',
          },
        ]}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <CreateTaskForm />
      </Modal>
    </main>
  )
}

export default App
