import sequelize from '../database/database.js'
import { DataTypes } from 'sequelize'

const Match = sequelize.define('Match', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  home_team: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  away_team: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  home_score: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  away_score: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
})

export default Match
