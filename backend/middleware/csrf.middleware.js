import AuthService from '../services/AuthSerivce.js'

export const validateCSRF = (req, res, next) => {
  // Solo validamos métodos que mutan datos (POST, PUT, DELETE, PATCH)
  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
    return next()
  }

  const cookieToken = req.cookies['csrf_token']
  const headerToken = req.headers['x-csrf-token']

  if (!cookieToken || !headerToken || cookieToken !== headerToken) {
    return res.status(403).json({ message: 'Error de seguridad: Validación CSRF fallida' })
  }

  next()
}

export const isAuthenticated = (req, res, next) => {
  const token = req.cookies['auth_token']

  if (!token) {
    return res.status(401).json({ message: 'No autorizado: No hay sesión' })
  }

  const decoded = AuthService.verifyToken(token)
  if (!decoded) {
    return res.status(401).json({ message: 'No autorizado: Sesión inválida' })
  }

  req.user = decoded
  next()
}
