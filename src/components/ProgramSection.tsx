import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Calendar, Target } from "lucide-react";

const ProgramSection = () => {
  return (
    <section id="programas" className="py-32 bg-background">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
              Nuestros Programas
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
              Dos Niveles de{" "}
              <span className="text-accent">Inmersión Técnica</span>
            </h2>
          </div>
          
          {/* Programa 1 */}
          <div className="mb-24">
            <Card className="border-2 border-border overflow-hidden">
              <div className="bg-primary text-primary-foreground p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                  <div>
                    <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-2 block">
                      Inmersión Parte 1
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                      Planos de Detalle y Expresión Constructiva
                    </h3>
                    <div className="flex flex-wrap gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span>9 - 13 Diciembre</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-accent" />
                        <span>20 horas totales</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-accent" />
                        <span>8:00 AM - 1:00 PM</span>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shrink-0">
                    Inscribirme Parte 1
                  </Button>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 space-y-10">
                <div className="grid lg:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-accent"></div>
                      Objetivo
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">
                          Desarrollar dominio técnico y gráfico del dibujo arquitectónico para 
                          comunicar ideas mediante planos precisos y profesionales
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">
                          Desarrollar capacidad de tomar decisiones técnicas fundamentadas
                        </span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-accent"></div>
                      ¿Para qué sirve?
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Adquirir habilidades que permiten competir en talleres de talla internacional 
                      y desarrollar proyectos arquitectónicos con altos estándares profesionales.
                    </p>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-border">
                  <h4 className="text-xl font-bold mb-6">Módulos</h4>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="text-accent font-bold text-lg shrink-0">01</span>
                        <div>
                          <h5 className="font-bold mb-2">Conceptos Básicos de Representación</h5>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Línea, escala, simbología y cotas</li>
                            <li>• Normas técnicas NTS, ISO, simbología CAD</li>
                            <li>• Nomenclaturas según ISO 13567/19650</li>
                            <li>• Control de versiones y trazabilidad</li>
                          </ul>
                          <p className="text-xs text-accent mt-3 font-medium">
                            Ejercicio: Dibujo de planta arquitectónica básica
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="text-accent font-bold text-lg shrink-0">02</span>
                        <div>
                          <h5 className="font-bold mb-2">Planimetría Arquitectónica</h5>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Plantas, cortes y fachadas</li>
                            <li>• Convenciones gráficas y jerarquía</li>
                            <li>• Organización de layers y escalas</li>
                            <li>• Checklists de calidad</li>
                          </ul>
                          <p className="text-xs text-accent mt-3 font-medium">
                            Ejercicio: Revisión cruzada entre pares
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Programa 2 */}
          <div>
            <Card className="border-2 border-accent/30 overflow-hidden">
              <div className="bg-accent text-accent-foreground p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                  <div>
                    <span className="text-foreground/70 text-xs font-bold tracking-[0.3em] uppercase mb-2 block">
                      Inmersión Parte 2 — Nivel Avanzado
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                      Planos de Detalle y Expresión Constructiva
                    </h3>
                    <div className="flex flex-wrap gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>12 - 17 Enero 2026</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>28 horas totales</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        <span>8:00 AM - 1:00 PM</span>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shrink-0">
                    Inscribirme Parte 2
                  </Button>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 space-y-10">
                <div className="grid lg:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-accent"></div>
                      Objetivo
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">
                          Profundizar en dominio técnico enfocado en detalles constructivos reales
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">
                          Desarrollar criterios de decisión técnica fundamentada
                        </span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-accent"></div>
                      ¿Para qué sirve?
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Capacidades técnicas para integrarse en talleres y estudios altamente 
                      competitivos a nivel internacional.
                    </p>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-border">
                  <h4 className="text-xl font-bold mb-6">Módulos</h4>
                  <div className="space-y-8">
                    <div className="flex items-start gap-3">
                      <span className="text-accent font-bold text-lg shrink-0">01</span>
                      <div>
                        <h5 className="font-bold mb-2">Planos de Detalle y Expresión Constructiva</h5>
                        <ul className="grid lg:grid-cols-2 gap-2 text-sm text-muted-foreground">
                          <li>• Componentes: muros, pisos, cubiertas</li>
                          <li>• Escalas de detalle 1:10, 1:5, 1:2</li>
                          <li>• Criterios: agua, fuego, sonido</li>
                          <li>• Física de la construcción</li>
                          <li>• Constructabilidad y montaje</li>
                          <li>• Micro APU y mantenibilidad</li>
                        </ul>
                        <p className="text-xs text-accent mt-3 font-medium">
                          Ejercicio: Elaboración de detalles constructivos
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-accent font-bold text-lg shrink-0">02</span>
                      <div>
                        <h5 className="font-bold mb-2">Integración de Diseño y Documentación</h5>
                        <ul className="grid lg:grid-cols-2 gap-2 text-sm text-muted-foreground">
                          <li>• Del concepto al plano técnico</li>
                          <li>• Coordinación ARQ-STR-MEP</li>
                          <li>• Simulación BIM/CDE</li>
                          <li>• Detección de interferencias</li>
                          <li>• Normas ISO 19650</li>
                        </ul>
                        <p className="text-xs text-accent mt-3 font-medium">
                          Ejercicio: Set de planos coordinado
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-accent font-bold text-lg shrink-0">03</span>
                      <div>
                        <h5 className="font-bold mb-2">Presentación Profesional y Portafolios</h5>
                        <ul className="grid lg:grid-cols-2 gap-2 text-sm text-muted-foreground">
                          <li>• Organización de dossier técnico</li>
                          <li>• Diagramación y rotulación</li>
                          <li>• Versionado y control de cambios</li>
                          <li>• Defensa oral del detalle</li>
                        </ul>
                        <p className="text-xs text-accent mt-3 font-medium">
                          Evaluación: Presentación y retroalimentación
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
