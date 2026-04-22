import { NavLink } from "react-router";

export default function RegisterForm() {
  return (
    <form className="form" action="">
      <h1>Registrarse</h1>
      <label htmlFor="username">Nombre</label>
      <input type="text" name="username" id="username" />
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" />
      <label htmlFor="password">Contraseña</label>
      <input type="password" name="password" id="password" />
      <label htmlFor="confirmPassword">Confirmar Contraseña</label>
      <input type="password" name="confirmPassword" id="confirmPassword" />
      <button>Registrarse</button>
      <p>
        ¿Ya tienes cuenta? <NavLink to='/login'>Inicia Sesión</NavLink>
      </p>
    </form>
  )
}
