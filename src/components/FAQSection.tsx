import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Necesito experiencia previa?",
      answer: "Esta inmersión está diseñada tanto para estudiantes como para profesionales que deseen fortalecer sus habilidades técnicas en representación arquitectónica. Se recomienda conocimientos básicos de dibujo técnico."
    },
    {
      question: "¿Qué software necesito?",
      answer: "Se trabajará con software CAD estándar de la industria. Los requisitos específicos y las licencias necesarias se comunicarán antes del inicio del programa."
    },
    {
      question: "¿Recibiré algún certificado?",
      answer: "Sí, al completar las 20 horas del programa recibirás un certificado de participación avalado por EXKEMA y los facilitadores internacionales."
    },
    {
      question: "¿Cuál es el tamaño del grupo?",
      answer: "Los grupos son limitados para garantizar atención personalizada por parte de los facilitadores y una experiencia de aprendizaje óptima."
    },
    {
      question: "¿Hay modalidad virtual?",
      answer: "El programa está diseñado como una inmersión presencial para maximizar la interacción con los mentores y el aprendizaje colaborativo."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
              FAQ
            </h2>
            <h3 className="text-3xl md:text-4xl font-light leading-tight">
              Preguntas{" "}
              <span className="font-semibold">Frecuentes</span>
            </h3>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-sm px-6 data-[state=open]:bg-muted/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
