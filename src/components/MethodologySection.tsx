import { BookOpen, Users, Target, Award } from "lucide-react";

const MethodologySection = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: "Aprendizaje Práctico",
      description: "Ejercicios basados en proyectos reales con retroalimentación inmediata de expertos"
    },
    {
      icon: Users,
      title: "Grupos Reducidos",
      description: "Atención personalizada para maximizar tu desarrollo técnico individual"
    },
    {
      icon: Target,
      title: "Estándares Internacionales",
      description: "Normas ISO, BIM y metodologías aplicadas en estudios de clase mundial"
    },
    {
      icon: Award,
      title: "Certificación EXKEMA",
      description: "Reconocimiento que valida tu dominio técnico ante la industria"
    }
  ];

  return (
    <section id="metodologia" className="py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
              Metodología
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              Cómo{" "}
              <span className="text-accent">Aprendes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Una experiencia intensiva diseñada para transformar tu capacidad técnica 
              en tiempo récord
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index} 
                  className="bg-card border-2 border-border p-8 hover:border-accent transition-colors group"
                >
                  <div className="flex items-start gap-6">
                    <div className="shrink-0">
                      <div className="w-16 h-16 bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="bg-primary text-primary-foreground p-8 lg:p-12 border-2 border-primary">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold">
                Programa Integral con{" "}
                <span className="text-accent">Enfoque Progresivo</span>
              </h3>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Ambas inmersiones están diseñadas para complementarse. La Parte 1 establece 
                fundamentos sólidos mientras la Parte 2 te lleva al nivel de detalle constructivo 
                y coordinación BIM que exigen los estudios internacionales.
              </p>
              <div className="pt-4">
                <p className="text-sm text-accent font-bold tracking-wider uppercase">
                  Comienza donde estés • Avanza al siguiente nivel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
