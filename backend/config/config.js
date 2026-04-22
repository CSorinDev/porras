/* eslint-disable no-undef */

process.loadEnvFile()

const PORT = process.env.PORT ?? 3001
const CORS_ORIGIN = process.env.CORS_ORIGIN ?? '*'

export { PORT, CORS_ORIGIN }
