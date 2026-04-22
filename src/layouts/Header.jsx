import { NavLink } from 'react-router'
import { useTheme } from '../contexts/theme-context'
import { SunIcon } from 'lucide-react'
import { MoonIcon } from 'lucide-react'

export default function Header() {
  const navLinks = [
    {
      title: 'Inicio',
      path: '/',
    },
    {
      title: 'Iniciar Sesión',
      path: '/login',
    },
  ]

  const { theme, toggleTheme } = useTheme()

  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border shadow-sm p-4 fixed top-0 left-0 w-full flex justify-between items-center z-50 transition-colors duration-300">
      <NavLink to="/" className="text-xl font-bold tracking-tight text-primary">
        <h2>LOGO</h2>
      </NavLink>
      <nav>
        <ul className="flex items-center gap-4">
          {navLinks.map(({ title, path }) => (
            <li key={title}>
              <NavLink
                className={({ isActive }) =>
                  `relative py-2 px-1 transition-colors hover:text-primary ${
                    isActive ? 'text-primary after:w-full' : 'text-muted-foreground after:w-0'
                  } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300`
                }
                to={path}
              >
                {title}
              </NavLink>
            </li>
          ))}
          <div className="flex items-center gap-4 ml-2 pl-4 border-l border-border">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon size={20} /> : <SunIcon size={20} />}
            </button>
          </div>
        </ul>
      </nav>
    </header>
  )
}
