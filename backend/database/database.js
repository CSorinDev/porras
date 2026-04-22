import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './lib/database.sqlite',
  logging: false,
})

export default sequelize