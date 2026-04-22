/* eslint-disable */

import AuthService from '../services/AuthSerivce.js'
import User from '../models/User.js'

class AuthController {
  static async register(req, res) {
    try {
      const { name, email, password } = req.body

      if (!name || !email || !password) {
        return res
          .status(400)
          .json({ message: 'Todos los campos son obligatorios' })
      }

      const user = await AuthService.register(name, email, password)
      if (user)
        return res
          .status(201)
          .json({ message: 'Usuario registrado correctamente' })
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body

      if (!email || !password) {
        return res
          .status(400)
          .json({ message: 'Todos los campos son obligatorios' })
      }

      const user = await AuthService.login(email, password)
      const token = AuthService.generateToken(user)
      const csrfToken = AuthService.generateCSRFToken()

      res.cookie('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })

      res.cookie('csrf_token', csrfToken, {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
      })

      return res.status(200).json({
        message: 'Login exitoso',
        user: { id: user.id, name: user.name, email: user.email },
      })
    } catch (err) {
      return res.status(401).json({ message: err.message })
    }
  }

  static async me(req, res) {
    try {
      const token = req.cookies['auth_token']
      if (!token) return res.status(401).json({ message: 'No autenticado' })

      const decoded = AuthService.verifyToken(token)
      if (!decoded) return res.status(401).json({ message: 'Token inválido' })

      const user = await User.findByPk(decoded.id, {
        attributes: ['id', 'name', 'email'],
      })

      if (!user) return res.status(404).json({ message: 'Usuario no encontrado' })

      return res.status(200).json(user)
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  }

  static async logout(req, res) {
    res.clearCookie('auth_token')
    res.clearCookie('csrf_token')
    return res.status(200).json({ message: 'Sesión cerrada' })
  }
}

export default AuthController
