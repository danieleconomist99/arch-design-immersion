import { Button } from "@/components/ui/button";

// Componente de navegación principal
function NavigationBar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-header-background">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-tight">
          <span className="text-foreground">EXK</span>
          <span className="text-accent">EMA</span>
        </h1>

        {/* Enlaces de navegación */}
        <ul className="hidden gap-8 items-center md:flex">
          <li>
            <a
              href="#programas"
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              Programas
            </a>
          </li>
          <li>
            <a
              href="#metodologia"
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              Metodología
            </a>
          </li>
          <li>
            <a
              href="#facilitadores"
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              Facilitadores
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              FAQ
            </a>
          </li>
        </ul>

        {/* Botón de inscripción */}
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
          Inscribirme
        </Button>
      </div>
    </nav>
  );
}

export default NavigationBar;

