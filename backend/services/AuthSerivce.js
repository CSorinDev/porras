import User from '../models/User.js'
import bcrypt from 'bcrypt'

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
}

export default AuthService
