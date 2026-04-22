import { NavLink } from 'react-router'
import { LoaderCircle } from 'lucide-react'
import RegisterAction from '../actions/registerAction'

export default function RegisterPage() {
  const { state, registerAction, loading } = RegisterAction()

  return (
    <form className="form" action={registerAction}>
      <h1>Registrarse</h1>

      <label htmlFor="name">Nombre</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" />

      <label htmlFor="password">Contraseña</label>
      <input type="password" name="password" id="password" />

      <label htmlFor="confirmPassword">Confirmar Contraseña</label>
      <input type="password" name="confirmPassword" id="confirmPassword" />

      <button disabled={loading}>
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <LoaderCircle className="animate-spin" />
            Registrando...
          </span>
        ) : (
          'Registrarse'
        )}
      </button>
      {state?.error && <p className="error">{state.error}</p>}
      <p>
        ¿Ya tienes cuenta? <NavLink to="/login">Inicia Sesión</NavLink>
      </p>
    </form>
  )
}
