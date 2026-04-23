import Match from '../models/Match.js'
import MatchService from '../services/MatchService.js'

class MatchController {
  static async getAll(req, res) {
    try {
      const matches = await Match.findAll()
      return res.json(matches)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  static async setMatch(req, res) {
    try {
      const { home_team, away_team, rules, date, time, user_id } = req.body

      if (!home_team || !away_team || !rules || !date || !time || !user_id) {
        return res
          .status(400)
          .json({ message: 'Todos los campos son obligatorios' })
      }

      const match = await MatchService.setMatch(
        home_team,
        away_team,
        rules,
        date,
        time,
        user_id
      )
      return res.status(201).json({ message: 'Partido agregado correctamente' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  static async getOne(req, res) {
    try {
      const { id } = req.params
      const match = await MatchService.getOne(id)
      return res.json(match)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  static async getAll(req, res) {
    try {
      const matches = await MatchService.getAll()
      return res.json(matches)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

export default MatchController
