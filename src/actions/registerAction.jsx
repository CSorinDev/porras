import { useActionState } from 'react'
import AuthService from '../services/AuthService.js'

export default function RegisterAction() {
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

    const res = await AuthService.register(name, email, password)
    const data = await res.json()
    console.log(data)
    return data
  }

  return { state, registerAction, loading }
}
