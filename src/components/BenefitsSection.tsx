
import { Card } from "@/components/ui/card";
import { Compass, Heart, MessageCircle, FileText, Shield } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Compass,
      title: "Motivo Real do Sumiço",
      description: "Entenda com profundidade o que está por trás do comportamento dele(a)"
    },
    {
      icon: Heart,
      title: "Orientação Intuitiva e Prática",
      description: "Conselhos claros e respeitosos com base na sua energia e situação"
    },
    {
      icon: MessageCircle,
      title: "Áudio Exclusivo no WhatsApp",
      description: "Receba sua leitura em até 12h com voz acolhedora e direcionamento direto"
    },
    {
      icon: FileText,
      title: "PDF com Resumo + Mini Plano de Ação",
      description: "Leve sempre com você um guia claro para saber como agir após a leitura"
    },
    {
      icon: Shield,
      title: "Atendimento 100% Confidencial e Humano",
      description: "Nada de IA ou textos genéricos – leitura feita com atenção, ética e cuidado"
    }
  ];

  return (
    <section className="py-20 bg-mystical-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mystical-graphite mb-6">
              📦 O Que Você <span className="gold-text">Recebe</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="mystical-card p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-center">
                  <div className="bg-mystical-purple rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-mystical-graphite text-lg mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-mystical-midnight">
                    {benefit.description}
                  </p>
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
