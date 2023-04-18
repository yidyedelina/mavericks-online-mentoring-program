import React from 'react'

import './App.css'
import Navbar from './components/NavbarForum'
import { Counter } from './features/counter/Counter'
import logo from './logo.svg'
import { useGetDocsListQuery } from './services/docs'

const App: React.FC = () => {
  return (
    <>
      <Navbar />
    </>
  )
}

export default App
