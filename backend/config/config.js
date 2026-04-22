/* eslint-disable no-undef */

process.loadEnvFile()

const PORT = process.env.PORT ?? 3000
const CORS_ORIGIN = process.env.CORS_ORIGIN ?? '*'
const JWT_SECRET = process.env.JWT_SECRET ?? 'super-secret-key-123'

export { PORT, CORS_ORIGIN, JWT_SECRET }
