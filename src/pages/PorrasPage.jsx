import useMatches from '../hooks/useMatches'

export default function PorrasPage() {
  const { matches } = useMatches()
  return (
    <section className="flex flex-wrap justify-center gap-4">
      {matches.map(({ id, home_team, away_team, date, time, rules }) => (
        <article
          key={id}
          className="max-w-sm overflow-hidden rounded-xl border border-gray-200 p-4 shadow-lg"
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold">{home_team}</h2>
            <p className="text-2xl font-bold">vs</p>
            <h2 className="text-2xl font-bold">{away_team}</h2>
            <p className="text-sm text-gray-500">
              {date
                ? new Date(date).toLocaleDateString('es-ES', {
                    month: 'long',
                    day: 'numeric',
                  })
                : ''}
            </p>
            <p className="text-sm text-gray-500">{time}</p>
          </div>
          <p>{rules}</p>
        </article>
      ))}
    </section>
  )
}
