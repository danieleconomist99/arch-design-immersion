const ExkemaFooter = () => {
  return (
    <footer className="py-16 bg-primary text-primary-foreground border-t-2 border-accent">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-primary-foreground">EXK</span>
                <span className="text-accent">EMA</span>
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                Elevando el estándar de la arquitectura mediante programas 
                intensivos con mentores de clase mundial.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-accent text-sm tracking-wider uppercase">
                Programas
              </h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>
                  <a href="#programas" className="hover:text-accent transition-colors">
                    Inmersión Parte 1
                  </a>
                </li>
                <li>
                  <a href="#programas" className="hover:text-accent transition-colors">
                    Inmersión Parte 2
                  </a>
                </li>
                <li>
                  <a href="#metodologia" className="hover:text-accent transition-colors">
                    Metodología
                  </a>
                </li>
                <li>
                  <a href="#facilitadores" className="hover:text-accent transition-colors">
                    Facilitadores
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-accent text-sm tracking-wider uppercase">
                Contacto
              </h4>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li>
                  <span className="block text-primary-foreground font-medium mb-1">Email</span>
                  <a href="mailto:info@exkema.com" className="hover:text-accent transition-colors">
                    info@exkema.com
                  </a>
                </li>
                <li>
                  <span className="block text-primary-foreground font-medium mb-1">Teléfono</span>
                  <a href="tel:+525512345678" className="hover:text-accent transition-colors">
                    +52 (55) 1234 5678
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/60">
              © {new Date().getFullYear()} EXKEMA. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-xs text-primary-foreground/60">
              <a href="#" className="hover:text-accent transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ExkemaFooter;
