import { Card } from "@/components/ui/card";
import { FileText, Layers, CheckCircle2 } from "lucide-react";

const CurriculumSection = () => {
  const modules = [
    {
      number: "01",
      title: "Conceptos Básicos de Representación",
      icon: FileText,
      topics: [
        "Línea, escala, simbología y cotas",
        "Normas técnicas NTS, ISO y simbología CAD",
        "Lectura y análisis de planos reales",
        "Nomenclaturas y estructuras según ISO 13567/19650",
        "Estructura del rótulo y control de versiones",
      ],
      exercise: "Dibujo a mano alzada y digital de planta arquitectónica básica"
    },
    {
      number: "02",
      title: "Planimetría Arquitectónica",
      icon: Layers,
      topics: [
        "Representación de plantas, cortes y fachadas",
        "Convenciones gráficas y jerarquía de líneas",
        "Estructuración profesional de planos",
        "Organización de layers, escalas, tramas y cotas",
        "Listas de chequeo para control de calidad",
        "Simbología de referenciación y coordinación",
      ],
      exercise: "Revisión cruzada aplicando checklists de consistencia"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
              Temario
            </h2>
            <h3 className="text-3xl md:text-5xl font-light leading-tight">
              Contenido del{" "}
              <span className="font-semibold">Programa</span>
            </h3>
          </div>
          
          <div className="space-y-8">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <Card key={index} className="p-8 md:p-10 hover:shadow-lg transition-shadow border-border/50">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10">
                          <Icon className="w-7 h-7 text-accent" />
                        </div>
                        <span className="text-4xl font-light text-accent/40">
                          {module.number}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-6">
                      <h4 className="text-2xl font-medium leading-tight">
                        {module.title}
                      </h4>
                      
                      <div className="space-y-3">
                        {module.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground leading-relaxed">
                              {topic}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="pt-4 border-t border-border/50">
                        <p className="text-sm font-medium text-foreground mb-2">
                          Ejercicio Práctico:
                        </p>
                        <p className="text-muted-foreground italic">
                          {module.exercise}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
