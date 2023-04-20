import { useState } from "react"
import ProfileBanner from "../components/ProfileBanner"
import TabBar from "../components/TabBar"
import RecentActions from "../components/Test"
import TodaysTask from "../components/TodayTask"
import WeekBox from "../components/WeekBox"
import ProgressTracker from "../components/ProgressTracker"
import Navbar from "../components/Navbar"

export default function MenteesDashBoard() {
  return (
    <main className="App">
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
      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <CreateTaskForm />
      </Modal> */}
    </main>

  )
}