import AuthService from '../services/AuthSerivce.js'

class AuthController {
  static async register(req, res) {
    try {
      if (!req.body)
        return res
          .status(400)
          .json({ message: 'Todos los campos son obligatorios' })

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
}

export default AuthController
