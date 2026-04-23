/* eslint-disable */

import { Router } from 'express'
import AuthController from '../controllers/AuthController.js'
import AuthService from '../services/AuthSerivce.js'
import MatchController from '../controllers/MatchController.js'
import { isAuthenticated } from '../middleware/csrf.middleware.js'

const routes = Router()

// HEALTH
routes.get('/health', (req, res) => {
  if (!req.cookies['csrf_token']) {
    const csrfToken = AuthService.generateCSRFToken()
    res.cookie('csrf_token', csrfToken, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    })
  }
  res.status(200).json({ message: 'Servidor corriendo' })
})

// AUTH
routes.post('/register', AuthController.register)
routes.post('/login', AuthController.login)
routes.post('/logout', AuthController.logout)
routes.get('/me', AuthController.me)

// MATCHES
routes.get('/matches/all', isAuthenticated, MatchController.getAll)
routes.get('/matches/one/:id', isAuthenticated, MatchController.getOne)
routes.post('/matches/set', isAuthenticated, MatchController.setMatch)

export default routes
