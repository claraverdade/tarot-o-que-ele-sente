
import { Card } from "@/components/ui/card";
import { Check, Heart, Download, Clock, FileText } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Descubra o Motivo Real do 'Sumiço'",
      description: "Entenda as verdadeiras razões por trás do comportamento dele"
    },
    {
      icon: Heart,
      title: "Orientação Prática para Reconquistá-lo (ou Seguir em Frente)",
      description: "Estratégias claras baseadas na sua situação específica"
    },
    {
      icon: Heart,
      title: "Leitura Intuitiva e Empática, Feita Exclusivamente Para Você",
      description: "Análise personalizada com foco na sua energia e situação"
    },
    {
      icon: Clock,
      title: "Entrega Rápida: Áudio completo no WhatsApp em até 12h",
      description: "Receba sua leitura rapidamente quando mais precisar"
    },
    {
      icon: FileText,
      title: "PDF Resumido com os Pontos Principais e Mini-Plano de Ação",
      description: "Material de apoio para consultar sempre que necessário"
    }
  ];

  return (
    <section className="py-20 bg-mystical-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mystical-graphite mb-6">
              O Que Você Recebe Quando
              <span className="gold-text block mt-2">Encomenda Sua Leitura</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="mystical-card p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-mystical-purple rounded-full p-3 flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-mystical-graphite text-lg mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-mystical-midnight">
                      {benefit.description}
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

export default BenefitsSection;
