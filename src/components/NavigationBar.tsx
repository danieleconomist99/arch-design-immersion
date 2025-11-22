import { Button } from "@/components/ui/button";

const NavigationBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tracking-tight">
              <span className="text-foreground">EXK</span>
              <span className="text-accent">EMA</span>
            </h1>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#programas" className="text-sm font-medium hover:text-accent transition-colors">
              Programas
            </a>
            <a href="#metodologia" className="text-sm font-medium hover:text-accent transition-colors">
              Metodología
            </a>
            <a href="#facilitadores" className="text-sm font-medium hover:text-accent transition-colors">
              Facilitadores
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-accent transition-colors">
              FAQ
            </a>
          </div>
          
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
            Inscribirme
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
