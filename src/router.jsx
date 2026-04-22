import { createBrowserRouter } from 'react-router'
import HomePage from './pages/HomePage'
import Layout from './layouts/Layout'
import LoginPage from './pages/LoginPage'
import RegisterForm from './pages/RegisterForm'

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: '/login',
        Component: LoginPage,
      },
      {
        path: '/register',
        Component: RegisterForm,
      },
    ],
  },
])

export default router
