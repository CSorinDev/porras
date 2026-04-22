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
