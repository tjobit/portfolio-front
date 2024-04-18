import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate
} from 'react-router-dom'
import Landing from './pages/Landing'
import Profile from './pages/Profile'
import Projects from './pages/Projects'
import ProjectInfos from './pages/ProjectInfos'
import AdminProjects from './pages/admin/AdminProjects'
import AdminUsers from './pages/admin/AdminUsers'
import { getProject } from './services'
import './index.css'

function isAuthenticated() {
  const token = localStorage.getItem('accessToken');

  return token ? true : false
}

function ProtectedRoute({element}) {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated()) {
      // Redirect to login or another route if not authenticated
      navigate('/');
    }
  }, [navigate]);

  return <>{element}</>;
}

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
  },
  {
    path: '/projectInfos/:id',
    element: <ProjectInfos />,
    loader: async ({ params }) => {
      return {
        project: await getProject(params.id)
      }
    }
  },
  {
    path: '/adminProjects',
    element: <ProtectedRoute element={<AdminProjects />} />
  },
  {
    path: '/adminUsers',
    element: <ProtectedRoute element={<AdminUsers />} />
  },
  {
    path: '*',
    element: <div>Not found</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
