import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-light leading-tight">
            Reserva tu cupo en la{" "}
            <span className="font-semibold">Inmersión</span>
          </h2>
          
          <p className="text-xl text-primary-foreground/90 font-light max-w-2xl mx-auto leading-relaxed">
            Plazas limitadas. Asegura tu participación en esta experiencia 
            intensiva con mentores de talla internacional.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 py-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-4">
              <Calendar className="w-6 h-6 text-accent" />
              <p className="font-medium">9 - 13 Diciembre</p>
              <p className="text-sm text-primary-foreground/70">5 días</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <Clock className="w-6 h-6 text-accent" />
              <p className="font-medium">8:00 AM - 1:00 PM</p>
              <p className="text-sm text-primary-foreground/70">20 horas totales</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <MapPin className="w-6 h-6 text-accent" />
              <p className="font-medium">Modalidad Presencial</p>
              <p className="text-sm text-primary-foreground/70">Ubicación TBD</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium group"
            >
              Inscribirme Ahora
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Quiero Más Información
            </Button>
          </div>
          
          <p className="text-sm text-primary-foreground/60 pt-4">
            ¿Tienes dudas? Contáctanos y te ayudaremos con el proceso de inscripción
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
