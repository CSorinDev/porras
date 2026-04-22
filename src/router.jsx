import { createBrowserRouter } from 'react-router'
import HomePage from './pages/HomePage'
import Layout from './layouts/Layout'

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
])

export default router
