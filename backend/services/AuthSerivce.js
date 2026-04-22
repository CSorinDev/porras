/* eslint-disable */

import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import { JWT_SECRET } from '../config/config.js'

class AuthService {
  static async register(name, email, password) {
    const userExists = await User.findOne({ where: { email } })
    if (userExists) throw new Error('El usuario ya existe')

    const hashedPassword = await bcrypt.hash(password, 10)

    try {
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      })

      return user
    } catch (err) {
      throw new Error(`Error al registrar el usuario: ${err}`)
    }
  }

  static async login(email, password) {
    const user = await User.findOne({ where: { email } })
    if (!user) throw new Error('Credenciales inválidas')

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) throw new Error('Credenciales inválidas')

    return user
  }

  static generateToken(user) {
    return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '7d',
    })
  }

  static verifyToken(token) {
    try {
      return jwt.verify(token, JWT_SECRET)
    } catch (err) {
      return null
    }
  }

  static generateCSRFToken() {
    return crypto.randomBytes(32).toString('hex')
  }
}

export default AuthService
