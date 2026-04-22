import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from './router'
import './index.css'
import ThemeProvider from './contexts/ThemeContext'

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
)
