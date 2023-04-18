import React from 'react'

import './App.css'
import AskQ from './components/AskQ'
import Navbar from './components/NavbarForum'
import QuestionFeed from './components/QuestionFeed'
import ToAnswer from './components/ToAnswer'
import { Counter } from './features/counter/Counter'
import logo from './logo.svg'
import { useGetDocsListQuery } from './services/docs'

const App: React.FC = () => {
  return (
    <>
      <ToAnswer />
    </>
  )
}

export default App
