class AuthService {
  static async register(name, email, password) {
    try {
      const res = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      })
      return res
    } catch (error) {
      return error
    }
  }
}

export default AuthService
