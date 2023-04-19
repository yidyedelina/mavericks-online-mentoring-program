import React from 'react'
import MentorSignin from './pages/MentorSignin'
import MenteeSignup from './pages/MenteeSignup'
import MenteeSignin from './pages/MenteeSignin'
import MentorSignup from './pages/MentorSignup'

const App = () => {
  return (
    <div>
      <MentorSignup />
      <MentorSignin />
      <MenteeSignup />
      <MenteeSignin />
    </div>
  )
}

export default App
