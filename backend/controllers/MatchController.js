import MatchService from '../services/MatchService.js'

class MatchController {
  static async getAll(req, res) {
    try {
      const matches = await MatchService.getAll()
      return res.json(matches)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  static async getOne(req, res) {
    try {
      const { id } = req.params
      const match = await MatchService.getOne(id)
      if (match.error) {
        return res.status(404).json(match)
      }
      return res.json(match)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  static async setMatch(req, res) {
    try {
      const { home_team, away_team, rules, date, time } = req.body
      const user_id = req.user.id // Obtenido del token por isAuthenticated

      if (!home_team || !away_team || !rules || !date || !time) {
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
      
      if (match.error) {
        return res.status(400).json(match)
      }

      return res.status(201).json({ message: 'Partido agregado correctamente', match })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

export default MatchController

