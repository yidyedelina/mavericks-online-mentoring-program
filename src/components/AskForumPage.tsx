import React, { useState } from 'react'
import Footer from '../FooterForum'
import Navbar from './NavbarForum'
import QuestionFeed from './QuestionFeed'
import SideBar from './SideBar'
import ToAnswer from './ToAnswer'
import ToAsk from './ToAsk'

const AskForumPage = () => {
  const [toAsk, setToAsk] = useState<boolean>(false)
  const [Toanswer, setToAnswer] = useState<boolean>(false)
  const onClose = () => {
    setToAsk(false)
  }
  const Open = () => {
    setToAsk(true)
  }
  const OpenToAnswer = () => {
    setToAnswer(true)
  }
  const CloseToAnswer = () => {
    setToAnswer(false)
  }
  return (
    <div className="relative">
      <ToAsk onClose={onClose} isOpen={toAsk} />
      <ToAnswer onClose={CloseToAnswer} isOpen={Toanswer} />
      <Navbar onOpen={Open} />
      <div className="flex pt-5">
        <div className="w-1/3">
          <SideBar />
        </div>
        <div className="flex w-1/3 flex-col gap-4">
          <QuestionFeed ToAnswer={OpenToAnswer} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AskForumPage
