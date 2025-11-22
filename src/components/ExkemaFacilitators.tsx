import { Award, Globe, Trophy, Users } from "lucide-react";

const ExkemaFacilitators = () => {
  return (
    <section id="facilitadores" className="py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
              Facilitadores
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              Mentores de{" "}
              <span className="text-accent">Clase Mundial</span>
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              EXKEMA reúne directores de diseño de firmas nacionales e internacionales 
              reconocidas por su liderazgo y proyectos a gran escala
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 border-2 border-accent">
                <Globe className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-bold text-lg">Trayectoria Global</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                Expertos con proyectos en múltiples continentes
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 border-2 border-accent">
                <Trophy className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-bold text-lg">Ganadores de Bienales</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                Reconocimientos en concursos internacionales
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 border-2 border-accent">
                <Award className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-bold text-lg">Gran Escala</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                Proyectos de alto impacto y complejidad técnica
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 border-2 border-accent">
                <Users className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-bold text-lg">Liderazgo en Firmas</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                Directores de las firmas más representativas
              </p>
            </div>
          </div>
          
          <div className="bg-accent/10 border-2 border-accent/30 p-8 lg:p-12">
            <p className="text-center text-lg lg:text-xl leading-relaxed">
              Nuestros facilitadores están comprometidos con elevar el estándar técnico 
              de la nueva generación de arquitectos, transmitiendo conocimiento aplicado 
              y visión estratégica basada en experiencia real en proyectos de{" "}
              <strong className="text-accent font-bold">talla internacional</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExkemaFacilitators;
