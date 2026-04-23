import { useState, useEffect } from 'react'
import MatchService from '../services/MatchService'

export default function useMatches() {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    const getMatches = async () => {
      try {
        const res = await MatchService.getAll()
        setMatches(res)
      } catch (error) {
        console.error(error)
      }
    }

    getMatches()
  }, [])

  const setMatch = async (matchData) => {
    try {
      const match = await MatchService.setMatch(matchData)
      setMatches([...matches, match])
    } catch (error) {
      console.error(error)
    }
  }

  return { matches, setMatch }
}