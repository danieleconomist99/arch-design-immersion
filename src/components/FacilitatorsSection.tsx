import { Award, Globe, Trophy } from "lucide-react";

const FacilitatorsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
              Facilitadores
            </h2>
            <h3 className="text-3xl md:text-5xl font-light leading-tight">
              Aprende de los{" "}
              <span className="font-semibold">mejores del mundo</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-medium text-lg">Trayectoria Global</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Directores de diseño de las firmas más representativas a nivel internacional
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                <Trophy className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-medium text-lg">Ganadores de Bienales</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Reconocimientos en concursos internacionales y bienales de arquitectura
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-medium text-lg">Proyectos a Gran Escala</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Expertos en proyectos de alto impacto y complejidad técnica
              </p>
            </div>
          </div>
          
          <div className="bg-muted/50 p-8 md:p-12 rounded-sm border border-border/50">
            <p className="text-center text-lg leading-relaxed text-foreground/90">
              EXKEMA reúne a mentores y tutores con trayectoria comprobada en el diseño 
              arquitectónico de clase mundial, comprometidos con elevar el estándar técnico 
              de la nueva generación de arquitectos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitatorsSection;
