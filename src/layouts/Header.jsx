import { NavLink } from 'react-router'
import { useTheme } from '../contexts/theme-context'
import { SunIcon, MoonIcon, LogOut, User } from 'lucide-react'
import useAuth from '../hooks/useAuth'

export default function Header() {
  const { user, logout, isAuthenticated } = useAuth()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="bg-background/80 border-border fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between border-b p-4 shadow-sm backdrop-blur-md transition-colors duration-300">
      <NavLink
        to="/"
        className="text-primary text-xl font-bold tracking-tighter"
      >
        <h2>LOGO</h2>
      </NavLink>
      <nav>
        <ul className="flex items-center gap-4">
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
            <li className="flex items-center gap-4">
              <div className="bg-secondary flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium">
                <User size={16} className="text-primary" />
                <span className="text-foreground/80">{user?.name}</span>
              </div>
              <button
                onClick={logout}
                className="text-muted-foreground hover:text-destructive flex cursor-pointer items-center gap-1 text-sm font-medium transition-colors"
              >
                <LogOut size={16} />
                <span className="hidden sm:inline">Cerrar Sesión</span>
              </button>
            </li>
          )}

          <div className="border-border ml-2 flex items-center gap-4 border-l pl-4">
            <button
              onClick={toggleTheme}
              className="hover:bg-secondary text-muted-foreground hover:text-foreground cursor-pointer rounded-full p-2 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <MoonIcon size={20} />
              ) : (
                <SunIcon size={20} />
              )}
            </button>
          </div>
        </ul>
      </nav>
    </header>
  )
}
