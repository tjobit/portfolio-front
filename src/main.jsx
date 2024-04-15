import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Landing from './pages/Landing'
import Profile from './pages/Profile'
import Projects from './pages/Projects'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/projects',
    element: <Projects />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
