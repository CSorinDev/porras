import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { PORT, CORS_ORIGIN } from './config/config.js'
import routes from './routes/routes.js'
import sequelize from './database/database.js'

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
)

import { validateCSRF } from './middleware/csrf.middleware.js'
import seedDB from './models/seeds.js'

await sequelize.sync({ force: true, alter: true }) 
await seedDB()


app.use('/api', validateCSRF, routes)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
  