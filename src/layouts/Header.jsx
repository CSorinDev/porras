import { NavLink } from 'react-router'
import { useTheme } from '../contexts/theme-context'
import { SunIcon, MoonIcon, LogOut, User } from 'lucide-react'
import useAuth from '../hooks/useAuth'
import HamburgerButton from './HamburgerButton'
import { useState } from 'react'
import ThemeButton from './ThemeButton'

export default function Header() {
  const { user, logout, isAuthenticated } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-background border-border fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between border-b p-4 shadow-sm backdrop-blur-md transition-colors duration-300">
      <NavLink
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        to="/"
        className="text-primary text-xl font-bold tracking-tighter"
      >
        <h2>LOGO</h2>
      </NavLink>
      <HamburgerButton isMenuOpen={isMenuOpen} onClick={toggleMenu} />
      <nav
        className={`${isMenuOpen ? 'h-dvh' : 'h-0'} absolute top-0 left-0 -z-10 grid w-full place-items-center overflow-hidden bg-inherit transition-all duration-300 md:static md:z-auto md:h-auto md:w-auto`}
      >
        <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
          <li>
            <NavLink
              className={({ isActive }) =>
                `hover:text-primary relative px-1 py-2 text-sm font-semibold uppercase transition-colors ${
                  isActive
                    ? 'text-primary after:w-full'
                    : 'text-muted-foreground after:w-0'
                } after:bg-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300`
              }
              to="/"
            >
              Inicio
            </NavLink>
          </li>

          {!isAuthenticated ? (
            <li>
              <NavLink
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={({ isActive }) =>
                  `hover:text-primary relative px-1 py-2 text-sm font-semibold uppercase transition-colors ${
                    isActive
                      ? 'text-primary after:w-full'
                      : 'text-muted-foreground after:w-0'
                  } after:bg-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300`
                }
                to="/login"
              >
                Iniciar Sesión
              </NavLink>
            </li>
          ) : (
            <li className="items-center gap-4 md:flex md:flex-col md:gap-0">
              <button
                onClick={logout}
                className="text-muted-foreground hover:text-destructive mt-2 flex cursor-pointer items-center gap-1 text-sm font-medium transition-colors md:mt-0"
              >
                <LogOut className="text-destructive" size={16} />
                <span className="text-destructive inline">Cerrar Sesión</span>
              </button>
            </li>
          )}

          <ThemeButton toggleTheme={toggleTheme} theme={theme} />
        </ul>
      </nav>
    </header>
  )
}
