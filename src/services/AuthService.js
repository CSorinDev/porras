import HttpService from './HttpService'

class AuthService extends HttpService {
  static async register(name, email, password) {
    return this.post('/register', { name, email, password })
  }

  static async login(email, password) {
    return this.post('/login', { email, password })
  }

  static async me() {
    return this.get('/me')
  }

  static async logout() {
    return this.post('/logout')
  }
}

export default AuthService

