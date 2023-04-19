import React from 'react'
import MenteeProfile from './pages/MenteeProfile'


import './App.css'

import ProfileBanner from './components/ProfileBanner'
import MenteesTab from './components/MenteesTab'
import TodaysTask from './components/TodayTask'


const App: React.FC = () => {
  return (
    <main className="App">
      <ProfileBanner/>
      <MenteesTab />
      <TodaysTask/>
    </main>

  )
}

export default App
