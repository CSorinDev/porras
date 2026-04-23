import { useActionState } from 'react'
import AuthService from '../services/AuthService.js'
import useAuth from '../hooks/useAuth.jsx'

export default function RegisterAction() {
  const { login: contextLogin } = useAuth()
  const [state, registerAction, loading] = useActionState(
    handleRegisterAction,
    {
      success: false,
      error: null,
    }
  )

  async function handleRegisterAction(state, formData) {
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')

    if (!name || !email || !password || !confirmPassword) {
      return {
        success: false,
        error: 'Todos los campos son obligatorios',
      }
    }

    if (password !== confirmPassword) {
      return {
        success: false,
        error: 'Las contraseñas no coinciden',
      }
    }

    try {
      const res = await AuthService.register(name, email, password)
      const data = await res.json()

      if (res.status === 201) {
        // Auto-login logic
        const loginRes = await AuthService.login(email, password)
        if (loginRes.ok) {
          const loginData = await loginRes.json()
          contextLogin(loginData.user)
        }
        return { success: true, ...data }
      }

      return { success: false, error: data.message || 'Error al registrar' }
    } catch (error) {
      return { success: false, error: 'Error de conexión' }
    }
  }

  return { state, registerAction, loading }
}
