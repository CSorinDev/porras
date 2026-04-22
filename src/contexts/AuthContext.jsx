/* eslint-disable */

import { createContext, useEffect, useState } from 'react'
import AuthService from '../services/AuthService'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await AuthService.me()
        if (res.ok) {
          const userData = await res.json()
          setUser(userData)
        }
      } catch (err) {
        console.error('Error al verificar sesión:', err)
      } finally {
        setLoading(false)
      }
    }

    checkSession()
  }, [])

  const login = (userData) => {
    setUser(userData)
  }

  const logout = async () => {
    await AuthService.logout()
    setUser(null)
    window.location.href = '/login'
  }

  return (
    <AuthContext.Provider
      value={{ user, loading, login, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  )
}
