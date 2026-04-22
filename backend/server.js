import express from 'express'
import cors from 'cors'
import { PORT, CORS_ORIGIN } from './config/config.js'
import routes from './routes/routes.js'
import sequelize from './database/database.js'

const app = express()
app.use(express.json())

app.use(
  cors({
    origin: CORS_ORIGIN,
  })
)

sequelize.sync()

app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})