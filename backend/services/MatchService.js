import Match from '../models/Match.js'

class MatchService {
  static async setMatch(home_team, away_team, rules, data, time) {
    try {
      const match = await Match.create({
        home_team,
        away_team,
        rules,
        data,
        time,
      })
      if (!match) return { error: 'No se pudo crear el partido' }
      return match
    } catch (error) {
      return { error: error.message }
    }
  }

  static async getOne(id) {
    try {
      const match = Match.findOne({ where: { id } })
      if (!match) return { error: 'Partido no encontrado' }
      return match
    } catch (error) {
      return { error: error.message }
    }
  }

  static async getAll() {
    try {
      const matches = Match.findAll()
      if (!matches) return { error: 'No hay partidos' }
      return matches
    } catch (error) {
      return { error: error.message }
    }
  }
}

export default MatchService
