/**
 * HttpService
 * Base service for handling HTTP requests with common configuration.
 */
class HttpService {
  static baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

  /**
   * Retrieves the CSRF token from document cookies.
   * @returns {string} The CSRF token or empty string if not found.
   */
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

  /**
   * Generic request handler.
   * @param {string} endpoint - The API endpoint (e.g., '/login').
   * @param {Object} options - Fetch options.
   * @returns {Promise<Response>} The fetch response or a mock error response.
   */
  static async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`

    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    }

    // Automatically add CSRF token for state-changing requests
    const csrfToken = this.getCSRFToken()
    if (csrfToken && options.method && options.method !== 'GET') {
      headers['X-CSRF-Token'] = csrfToken
    }

    const config = {
      ...options,
      headers,
      credentials: 'include',
    }

    try {
      const response = await fetch(url, config)
      return response
    } catch (error) {
      console.error(`HTTP Request Error [${options.method || 'GET'} ${url}]:`, error)
      return {
        ok: false,
        json: async () => ({ error: 'Error de conexión' }),
      }
    }
  }

  /**
   * Performs a GET request.
   */
  static async get(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'GET' })
  }

  /**
   * Performs a POST request.
   */
  static async post(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  /**
   * Performs a PUT request.
   */
  static async put(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  /**
   * Performs a DELETE request.
   */
  static async delete(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'DELETE' })
  }
}

export default HttpService
