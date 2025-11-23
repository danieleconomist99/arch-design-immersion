import { Button } from "@/components/ui/button";

/**
 * Barra de navegación principal con fondo sólido:
 * - Usa la variable CSS --header-background para el fondo.
 * - Textos en blanco (text-white).
 * - Botón de inscripción en rojo EXKEMA.
 */
function NavigationBar() {
  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 border-b border-border"
      style={{ backgroundColor: "var(--header-background)" }}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-tight text-white">
          EXKEMA
        </h1>

        {/* Menú de enlaces */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <a
              href="#programas"
              className="text-sm font-medium text-white hover:underline"
            >
              Programas
            </a>
          </li>
          <li>
            <a
              href="#metodologia"
              className="text-sm font-medium text-white hover:underline"
            >
              Metodología
            </a>
          </li>
          <li>
            <a
              href="#facilitadores"
              className="text-sm font-medium text-white hover:underline"
            >
              Facilitadores
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="text-sm font-medium text-white hover:underline"
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
