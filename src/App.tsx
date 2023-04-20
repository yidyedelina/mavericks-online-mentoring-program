import React from 'react'
import Accordion from './components/Accordion'
import Acc from './components/Accordion'
import Navbar from './components/NavbarForum'
import QuestionFeed from './components/QuestionFeed'
import ToAnswer from './components/ToAnswer'
import { Counter } from './features/counter/Counter'
import logo from './logo.svg'
import { useGetDocsListQuery } from './services/docs'
import SideBar from './components/SideBar'
import QuestionFeeds from './components/QuestionFeeds'
import AskForumPage from './components/AskForumPage'
import MyForm from './components/check'
import Help from './components/check'

const App: React.FC = () => {
  return (
    <>
      <AskForumPage />
    </>
  )
}

export default App
