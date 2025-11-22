import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ExkemaFAQ = () => {
  const faqs = [
    {
      question: "¿Puedo tomar solo una de las dos inmersiones?",
      answer: "Sí, cada inmersión funciona de manera independiente. Sin embargo, están diseñadas para complementarse. La Parte 1 establece fundamentos mientras la Parte 2 profundiza en detalles constructivos avanzados. Recomendamos ambas para una formación completa."
    },
    {
      question: "¿Necesito experiencia previa en CAD o software técnico?",
      answer: "Para la Parte 1 se recomienda conocimientos básicos de dibujo técnico. Para la Parte 2 es preferible haber cursado la Parte 1 o contar con experiencia práctica en representación arquitectónica. Los requisitos específicos de software se comunican antes del inicio."
    },
    {
      question: "¿Qué tipo de certificación recibiré?",
      answer: "Al completar cada inmersión recibirás un certificado avalado por EXKEMA que valida las horas cursadas y competencias adquiridas. Este certificado es reconocido por estudios de arquitectura y puede incluirse en tu portafolio profesional."
    },
    {
      question: "¿Cuál es el tamaño máximo de los grupos?",
      answer: "Los grupos son deliberadamente pequeños para garantizar atención personalizada de los facilitadores. Esto permite revisión detallada de ejercicios y retroalimentación individual durante las sesiones prácticas."
    },
    {
      question: "¿Ofrecen modalidad virtual o híbrida?",
      answer: "Las inmersiones están diseñadas como experiencias presenciales intensivas. Esto maximiza la interacción con mentores y el aprendizaje colaborativo entre pares, elementos clave de la metodología EXKEMA."
    },
    {
      question: "¿Qué incluye la inversión del programa?",
      answer: "La inversión incluye todas las sesiones presenciales, material didáctico, acceso a recursos digitales, certificación y seguimiento durante el programa. No incluye software (se especifican licencias necesarias previamente)."
    },
    {
      question: "¿Hay opciones de financiamiento?",
      answer: "Sí, ofrecemos planes de pago y opciones de financiamiento. Contacta a nuestro equipo para conocer las alternativas disponibles según tu situación."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
              Preguntas Frecuentes
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Todo lo que necesitas{" "}
              <span className="text-accent">saber</span>
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 border-border px-8 data-[state=open]:border-accent data-[state=open]:bg-muted/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-base font-bold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              ¿Tienes más preguntas?
            </p>
            <a 
              href="mailto:info@exkema.com" 
              className="text-accent font-bold hover:underline"
            >
              Contáctanos directamente
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExkemaFAQ;
