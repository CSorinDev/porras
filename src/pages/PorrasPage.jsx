import { useEffect } from 'react'
import MatchService from '../services/MatchService'

export default function PorrasPage() {
  useEffect(() => {
    const getMatches = async () => {
      try {
        const matches = await MatchService.getOne(1)
        console.log(matches)
      } catch (error) {
        console.error(error)
      }
    }

    getMatches()
  }, [])
  return (
    <section>
      <p>porras page</p>
    </section>
  )
}
