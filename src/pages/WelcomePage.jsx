import { NavLink } from "react-router";
import Button from "../components/Button";

export default function WelcomePage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-lg flex-col items-center justify-center">
      <h1 className="text-foreground/80! text-center">
        Bienvenido a <br />
        <span className="text-primary">Porras Entre Amigos</span>
      </h1>
      <h2 className="text-muted-foreground mb-12 text-center">
        La plataforma definitiva para gestionar tus porras con amigos de forma
        rápida y segura.
      </h2>
      <div className="flex justify-center gap-4">
        <Button>
          <NavLink to="/login">Inicia Sesión</NavLink>
        </Button>
        <Button>
          <NavLink to="/register">Registrarse</NavLink>
        </Button>
      </div>
    </section>
  )
}
