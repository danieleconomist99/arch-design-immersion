const ObjectiveSection = () => {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
                Objetivo del Programa
              </h2>
              <h3 className="text-3xl md:text-4xl font-light leading-tight mb-6">
                Dominio técnico y gráfico del{" "}
                <span className="font-semibold">dibujo arquitectónico</span>
              </h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Desarrolla la capacidad para comunicar ideas de diseño a través de planos 
                precisos, claros y profesionales, con una visión interdisciplinar y actualizada.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Potencia tu capacidad de tomar decisiones técnicas fundamentadas y forma 
                parte de talleres competitivos de talla internacional.
              </p>
            </div>
          </div>
          
          <div className="mt-16 pt-16 section-divider">
            <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-sm">
              <h4 className="text-2xl font-light mb-4">
                Para qué sirve esta inmersión
              </h4>
              <p className="text-primary-foreground/90 leading-relaxed text-lg font-light">
                Brinda habilidades que te permiten ser parte de un taller competitivo 
                de talla internacional y desarrollar proyectos arquitectónicos con un{" "}
                <strong className="font-semibold">alto estándar de competitividad</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;
