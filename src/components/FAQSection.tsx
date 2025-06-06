
import { Card } from "@/components/ui/card";
import { HelpCircle, Clock, MessageCircle, Calendar } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      icon: Clock,
      question: "E se eu não receber a leitura em 12h?",
      answer: "Envie a palavra 'Atraso' no WhatsApp que refazemos a leitura em até 6h ou devolvemos 100% do valor."
    },
    {
      icon: MessageCircle,
      question: "Como recebo o áudio da leitura?",
      answer: "Você receberá um link de download no próprio WhatsApp. Basta clicar para ouvir."
    },
    {
      icon: Calendar,
      question: "E se eu quiser conversar pessoalmente após a leitura?",
      answer: "Disponibilizamos consultoria individual (sessão 30 min) como upsell, mediante agendamento. Consulte valores no WhatsApp."
    }
  ];

  return (
    <section className="py-20 bg-mystical-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mystical-graphite mb-6">
              Perguntas <span className="gold-text">Frequentes</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="mystical-card p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-mystical-purple rounded-full p-3 flex-shrink-0">
                    <faq.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-mystical-graphite text-lg mb-3">
                      {faq.question}
                    </h4>
                    <p className="text-mystical-midnight leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
