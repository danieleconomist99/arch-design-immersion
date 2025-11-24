import exkemaLogo from "@/assets/exkema_logo.png"; // Ajusta la ruta al nombre de tu archivo

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border/50">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-2xl font-light mb-2">
              <img src={exkemaLogo} alt="EXKEMA" className="h-6" />
              </p>
              <p className="text-sm text-muted-foreground">
                Elevando el estándar de la arquitectura
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 text-center md:text-left">
              <div>
                <p className="text-sm font-medium mb-1">Email</p>
                <p className="text-sm text-muted-foreground">info@exkema.com</p>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Teléfono</p>
                <p className="text-sm text-muted-foreground">+52 (55) 1234 5678</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border/50 text-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} EXKEMA. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
