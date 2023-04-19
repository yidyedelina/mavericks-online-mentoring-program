import React from 'react'
import Footer from '../FooterForum'
import Navbar from './NavbarForum'
import QuestionFeed from './QuestionFeed'
import SideBar from './SideBar'

const QuestionFeeds = () => {
  return (
    <div>
      <div className="flex w-1/3 flex-col gap-4">
        <QuestionFeed />
        <QuestionFeed />
      </div>
    </div>
  )
}

export default QuestionFeeds
