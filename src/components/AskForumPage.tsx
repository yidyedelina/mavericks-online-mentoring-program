import React, { useState } from 'react'
import Footer from '../FooterForum'
import Navbar from './NavbarForum'
import QuestionFeeds from './QuestionFeeds'
import SideBar from './SideBar'
import ToAnswer from './ToAnswer'
import ToAsk from './ToAsk'

const AskForumPage = () => {
  const [toAsk, setToAsk] = useState<boolean>(false)

  const onClose = () => {
    setToAsk(false)
  }
  const Open = () => {
    setToAsk(true)
  }

  return (
    <div className="relative bg-cyan-50">
      <ToAsk onClose={onClose} isOpen={toAsk} />
      <Navbar onOpen={Open} />
      <div className="flex pt-5">
        <div className="w-1/3 pl-4">
          <SideBar />
        </div>
        <div className="flex w-2/3 flex-col gap-4">
          <QuestionFeeds />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AskForumPage
