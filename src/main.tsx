import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import { store } from './store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MenteesDashBoard from './pages/MenteesDashBoard'
import Homepage from './pages/Homepage'
import CourseDetail from './components/CourseDetail'
import Root from './pages/Root'
import MentorDashBoard from './pages/MentorDashBoard'
import MentorRoot from './pages/MentorRoot'
import MenteeSignin from './pages/MenteeSignin'
import MenteeSignup from './pages/MenteeSignup'
import MentorSignin from './pages/MentorSignin'
import MentorSignup from './pages/MentorSignup'
import MentorsPage from './components/MentorChoose/MentorsPage'
import AskForumPage from './components/AskForumPage'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/mentees/login',
    element: <MenteeSignin />,
  },
  {
    path: '/mentees/signup',
    element: <MenteeSignup />,
  }, 
  {
    path: '/mentors/login',
    element: <MentorSignin />,
  },
  {
    path: '/mentors/signup',
    element: <MentorSignup />,
  },
  {
    path: '/mentees',
    element: <Root />,
    children: [
      {
        path: '/mentees',
        element: <MenteesDashBoard />,
      },
      {
        path: 'mentees/taskDetails/:id',
        element: <CourseDetail />,
      },
    ],
  },
  {
    path: '/mentors',
    element: <MentorRoot/>,
    children: [
      {
        path: '/mentors',
        element: <MentorDashBoard/>
      },
      {
        path: '/mentors/taskDetails/:id',
        element: <CourseDetail/>
      }
    ]
  },
  {
    path: '/askforum',
    element: <AskForumPage />,
  },

  
  
])
const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
