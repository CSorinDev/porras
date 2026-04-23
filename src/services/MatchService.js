import HttpService from './HttpService'

class MatchService extends HttpService {
  /**
   * Obtiene todos los partidos.
   */
  static async getAll() {
    const res = await this.get('/matches')
    return res.json()
  }

  /**
   * Obtiene un partido por su ID.
   */
  static async getOne(id) {
    const res = await this.get(`/matches/${id}`)
    return res.json()
  }

  /**
   * Crea un nuevo partido.
   */
  static async setMatch(matchData) {
    const res = await this.post('/matches/set', matchData)
    return res.json()
  }
}

export default MatchService