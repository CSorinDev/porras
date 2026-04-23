import sequelize from '../database/database.js'
import { DataTypes } from 'sequelize'
import Match from './Match.js'
import Prediction from './Prediction.js'

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

// RELACIONES
User.hasMany(Match, { foreignKey: 'user_id' })
User.hasMany(Prediction, { foreignKey: 'user_id' })

Match.belongsTo(User, { foreignKey: 'user_id' })
Match.hasMany(Prediction, { foreignKey: 'match_id' })

Prediction.belongsTo(User, { foreignKey: 'user_id' })
Prediction.belongsTo(Match, { foreignKey: 'match_id' })

export default User
