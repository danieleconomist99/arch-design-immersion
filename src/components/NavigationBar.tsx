import { Button } from "@/components/ui/button";

/**
 * Barra de navegación principal.
 * - Fondo azul definido por la variable `--background`.
 * - Textos en blanco (usa `text-primary-foreground`).
 * - Botón de inscripción en rojo (usa `bg-primary`).
 */
function NavigationBar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-tight text-primary-foreground">
          EXKEMA
        </h1>

        {/* Enlaces de menú */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <a
              href="#programas"
              className="text-sm font-medium text-primary-foreground hover:underline"
            >
              Programas
            </a>
          </li>
          <li>
            <a
              href="#metodologia"
              className="text-sm font-medium text-primary-foreground hover:underline"
            >
              Metodología
            </a>
          </li>
          <li>
            <a
              href="#facilitadores"
              className="text-sm font-medium text-primary-foreground hover:underline"
            >
              Facilitadores
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="text-sm font-medium text-primary-foreground hover:underline"
            >
              FAQ
            </a>
          </li>
        </ul>

        {/* Botón rojo de inscripción */}
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
          Inscribirme
        </Button>
      </div>
    </nav>
  );
}

export default NavigationBar;
