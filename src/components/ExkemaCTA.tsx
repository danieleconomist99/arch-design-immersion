import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const ExkemaCTA = () => {
  return (
    <section className="py-32 bg-accent text-accent-foreground">
      <div className="container">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="space-y-6">
            <span className="text-foreground/60 text-xs font-bold tracking-[0.3em] uppercase block">
              Últimas Plazas Disponibles
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
              Asegura tu Lugar en las{" "}
              <span className="text-primary">Inmersiones EXKEMA</span>
            </h2>
            <p className="text-xl text-accent-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Grupos limitados. Inscripciones abiertas ahora. No pierdas la oportunidad 
              de aprender con los mejores mentores de la industria.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-8">
            <div className="bg-primary text-primary-foreground p-8 border-2 border-primary">
              <h3 className="text-2xl font-bold mb-4">Inmersión Parte 1</h3>
              <p className="text-primary-foreground/80 mb-2">9 - 13 de Diciembre</p>
              <p className="text-3xl font-bold text-accent mb-6">20 horas</p>
              <Button 
                size="lg" 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold group h-14"
              >
                Inscribirme Parte 1
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="bg-primary text-primary-foreground p-8 border-2 border-primary">
              <h3 className="text-2xl font-bold mb-4">Inmersión Parte 2</h3>
              <p className="text-primary-foreground/80 mb-2">12 - 17 de Enero 2026</p>
              <p className="text-3xl font-bold text-accent mb-6">28 horas</p>
              <Button 
                size="lg" 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold group h-14"
              >
                Inscribirme Parte 2
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div className="pt-8">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold h-14 px-8"
            >
              Quiero Más Información
            </Button>
          </div>
          
          <div className="pt-12 border-t-2 border-accent-foreground/20 max-w-2xl mx-auto">
            <p className="text-sm text-accent-foreground/70 mb-6">
              ¿Necesitas ayuda con tu inscripción?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
              <a href="mailto:info@exkema.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span className="font-medium">info@exkema.com</span>
              </a>
              <a href="tel:+525512345678" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+52 (55) 1234 5678</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExkemaCTA;
