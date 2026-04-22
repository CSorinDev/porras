import { Router } from 'express'
import AuthController from '../controllers/AuthController.js'

const routes = Router()

// HEALTH
routes.get('/health', (req, res) => {
  res.status(200).json({ message: 'Servidor corriendo' })
})

// AUTH
routes.post('/register', AuthController.register)

export default routes
