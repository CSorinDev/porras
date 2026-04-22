/* eslint-disable */

class AuthService {
  static getCSRFToken() {
    const name = 'csrf_token='
    const decodedCookie = decodeURIComponent(document.cookie)
    const ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  }

  static async register(name, email, password) {
    try {
      const res = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': this.getCSRFToken(),
        },
        credentials: 'include',
        body: JSON.stringify({ name, email, password }),
      })
      return res
    } catch (error) {
      return {
        ok: false,
        json: async () => ({ error: 'Error de conexión' }),
      }
    }
  }

  static async login(email, password) {
    try {
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': this.getCSRFToken(),
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      })
      return res
    } catch (error) {
      return {
        ok: false,
        json: async () => ({ error: 'Error de conexión' }),
      }
    }
  }

  static async me() {
    try {
      const res = await fetch('http://localhost:3000/api/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })
      return res
    } catch (error) {
      return {
        ok: false,
        json: async () => ({ error: 'Error de conexión' }),
      }
    }
  }

  static async logout() {
    try {
      const res = await fetch('http://localhost:3000/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': this.getCSRFToken(),
        },
        credentials: 'include',
      })
      return res
    } catch (error) {
      return {
        ok: false,
        json: async () => ({ error: 'Error de conexión' }),
      }
    }
  }
}

export default AuthService
