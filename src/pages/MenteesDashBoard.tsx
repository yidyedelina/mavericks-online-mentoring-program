import { useState } from "react"
import ProfileBanner from "../components/ProfileBanner"
import TabBar from "../components/TabBar"
import RecentActions from "../components/Test"
import TodaysTask from "../components/TodayTask"
import WeekBox from "../components/WeekBox"
import ProgressTracker from "../components/ProgressTracker"
import Navbar from "../components/Navbar"
import MentorsPage from "../components/MentorChoose/MentorsPage"
import { useSelector } from "react-redux"

export default function MenteesDashBoard() {
  const counter = useSelector((state: any) => state.counter.value)
  return (
    <main className="App">
      <h1 className='hidden'>{counter}</h1>
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
          {
            component: <MentorsPage />,
            label: 'Mentors',
          },
        ]}
      />
      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <CreateTaskForm />
      </Modal> */}
    </main>

  )
}