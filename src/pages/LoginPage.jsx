import { NavLink } from 'react-router'
import { LoaderCircle } from 'lucide-react'
import LoginAction from '../actions/loginAction'

export default function LoginPage() {
  const { state, loginAction, loading } = LoginAction()

  return (
    <form className="form" action={loginAction}>
      <h1>Iniciar Sesión</h1>

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" required />

      <label htmlFor="password">Contraseña</label>
      <input type="password" name="password" id="password" required />

      <button disabled={loading}>
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <LoaderCircle className="animate-spin" />
            Iniciando sesión...
          </span>
        ) : (
          'Iniciar Sesión'
        )}
      </button>

      {state?.error && <p className="error">{state.error}</p>}

      <p>
        ¿No tienes cuenta? <NavLink to="/register">Regístrate</NavLink>
      </p>
    </form>
  )
}