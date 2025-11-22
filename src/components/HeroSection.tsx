import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-architecture.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
              EXKEMA — Inmersión Parte 1
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground leading-[1.1] text-balance">
            Planos de Detalle y <br />
            <span className="font-semibold">Expresión Constructiva</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto font-light leading-relaxed">
            Desarrolla el dominio técnico del dibujo arquitectónico con mentores de talla internacional
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium group"
            >
              Reservar Cupo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Ver Programa Completo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-primary-foreground/20 max-w-3xl mx-auto">
            <div>
              <p className="text-3xl font-semibold text-accent">20</p>
              <p className="text-sm text-primary-foreground/80 mt-1">Horas intensivas</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-accent">5</p>
              <p className="text-sm text-primary-foreground/80 mt-1">Días de inmersión</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-accent">Dec 9-13</p>
              <p className="text-sm text-primary-foreground/80 mt-1">8:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
