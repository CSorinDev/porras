export default function HomePage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 flex flex-col items-center justify-center text-center">
      <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-6 bg-linear-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
          Bienvenido a Porras
        </h1>
        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
          La plataforma definitiva para gestionar tus porras con amigos de forma profesional, rápida y segura.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5">
            Empezar ahora
          </button>
          <button className="px-8 py-3 bg-secondary text-secondary-foreground border border-border rounded-full font-semibold hover:bg-muted transition-all hover:-translate-y-0.5">
            Saber más
          </button>
        </div>
      </div>
    </div>
  )
}
