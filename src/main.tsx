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
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
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
])
const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
