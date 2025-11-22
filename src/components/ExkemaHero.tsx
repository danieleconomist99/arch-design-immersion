import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-exkema.jpg";

const ExkemaHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(24,24,24,0.95), rgba(24,24,24,0.75)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase">
                EXKEMA — Inmersiones 2024-2025
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
              Planos de Detalle y Expresión{" "}
              <span className="text-accent">Constructiva</span>
            </h1>
            
            <p className="text-xl text-white/80 font-light leading-relaxed max-w-xl">
              Desarrolla dominio técnico en dibujo arquitectónico con mentores de talla internacional. 
              Dos programas intensivos, estándares globales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold group h-14 px-8"
              >
                Reservar mi Cupo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 h-14 px-8 font-medium"
              >
                Ver Programas
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-none">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-accent" />
                <h3 className="text-white font-bold text-lg">Inmersión Parte 1</h3>
              </div>
              <div className="space-y-3 text-white/80">
                <p className="text-sm"><span className="font-semibold text-white">Fechas:</span> 9 - 13 de Diciembre</p>
                <p className="text-sm"><span className="font-semibold text-white">Duración:</span> 20 horas</p>
                <p className="text-sm"><span className="font-semibold text-white">Horario:</span> 8:00 AM - 1:00 PM</p>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-none">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-accent" />
                <h3 className="text-white font-bold text-lg">Inmersión Parte 2</h3>
              </div>
              <div className="space-y-3 text-white/80">
                <p className="text-sm"><span className="font-semibold text-white">Fechas:</span> 12 - 17 de Enero 2026</p>
                <p className="text-sm"><span className="font-semibold text-white">Duración:</span> 28 horas</p>
                <p className="text-sm"><span className="font-semibold text-white">Horario:</span> 8:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExkemaHero;
