import User from '../models/User.js'

class AuthService {
  static async register(name, email, password) {
    const userExists = await User.findOne({ where: { email } })
    if (userExists) throw new Error('El usuario ya existe')

    try {
      const user = await User.create({
        name,
        email,
        password,
      })

      return user
    } catch (err) {
      throw new Error(`Error al registrar el usuario: ${err}`)
    }
  }
}

export default AuthService
