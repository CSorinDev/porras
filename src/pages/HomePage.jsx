import { NavLink } from 'react-router'
import Button from '../components/Button'
import useAuth from '../hooks/useAuth'
import PorrasPage from './PorrasPage'
import WelcomePage from './WelcomePage'

export default function HomePage() {
  const { isAuthenticated } = useAuth()

  return !isAuthenticated ? <WelcomePage /> : <PorrasPage />
}
