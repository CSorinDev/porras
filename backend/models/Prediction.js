import sequelize from '../database/database.js'
import { DataTypes } from 'sequelize'

const Prediction = sequelize.define('Prediction', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  home_score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    min: 0,
  },
  away_score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    min: 0,
  },
})

export default Prediction
