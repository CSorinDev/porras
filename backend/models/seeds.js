import bcrypt from 'bcrypt'
import Match from './Match.js'
import Prediction from './Prediction.js'
import User from './User.js'

export default async function seedDB() {
  const password = await bcrypt.hash('holamundo', 10)
  const users = [
    {
      name: 'Admin',
      email: 'admin@example.com',
      password: password,
    },
    {
      name: 'Andrei',
      email: 'andrei@example.com',
      password: 'holamundo',
    },
  ]

  users.forEach(async (user) => {
    const res = await User.create(user)
  })

  const user1ID = await User.findOne({ where: { email: 'admin@example.com' } }).id

  const matches = [
    {
      home_team: 'Real Madrid',
      away_team: 'Barcelona',
      date: '2022-01-01',
      time: '12:00',
      user_id: user1ID,
    },
    {
      home_team: 'Atletico Madrid',
      away_team: 'Valencia',
      date: '2022-01-02',
      time: '12:00',
      user_id: user1ID,
    },
  ]

  matches.forEach(async (match) => {
    const res = await Match.create(match)
  })

  const match1ID = await Match.findOne({ where: { home_team: 'Real Madrid' } }).id

  const predictions = [
    {
      home_score: 2,
      away_score: 1,
      user_id: user1ID, 
      match_id: match1ID,
    },
    {
      home_score: 1,
      away_score: 2,
      user_id: user1ID,
      match_id: match1ID,
    },
  ]

  predictions.forEach(async (prediction) => {
    const res = await Prediction.create(prediction)
  })
}
