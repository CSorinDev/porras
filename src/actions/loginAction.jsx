import { useActionState } from 'react'
import AuthService from '../services/AuthService.js'
import useAuth from '../hooks/useAuth.jsx'
import { useNavigate } from 'react-router'

export default function LoginAction() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [state, loginAction, loading] = useActionState(handleLoginAction, {
    success: false,
    error: null,
  })

  async function handleLoginAction(state, formData) {
    const email = formData.get('email')
    const password = formData.get('password')

    if (!email || !password) {
      return {
        success: false,
        error: 'Todos los campos son obligatorios',
      }
    }

    const res = await AuthService.login(email, password)
    const data = await res.json()

    if (!res.ok) {
      return {
        success: false,
        error: data.message || data.error || 'Error al iniciar sesión',
      }
    }

    login(data.user)
    navigate('/')

    return {
      success: true,
      error: null,
      message: data.message,
    }
  }

  return { state, loginAction, loading }
}
