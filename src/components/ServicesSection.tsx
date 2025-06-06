
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Video, Phone } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Consulta Individual",
      description: "Sessão personalizada focada em suas questões específicas",
      duration: "60 minutos",
      price: "R$ 150",
      icon: Users,
      features: [
        "Análise completa do momento atual",
        "Orientações para decisões importantes",
        "Gravação da consulta inclusa",
        "Suporte pós-consulta por WhatsApp"
      ],
      popular: false
    },
    {
      title: "Consulta Premium",
      description: "Sessão aprofundada com múltiplas tiragens e orientações",
      duration: "90 minutos",
      price: "R$ 220",
      icon: Video,
      features: [
        "Múltiplas tiragens temáticas",
        "Análise de relacionamentos",
        "Orientação profissional e financeira",
        "Mapa energético personalizado",
        "Follow-up em 30 dias"
      ],
      popular: true
    },
    {
      title: "Consulta Express",
      description: "Resposta rápida para questões urgentes",
      duration: "30 minutos",
      price: "R$ 80",
      icon: Phone,
      features: [
        "Foco em uma questão específica",
        "Orientação direta e objetiva",
        "Ideal para decisões urgentes",
        "Disponível em horários flexíveis"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-mystical-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mystical-graphite mb-6">
              Tipos de <span className="gold-text">Consulta</span>
            </h2>
            <p className="text-xl text-mystical-midnight max-w-3xl mx-auto">
              Escolha a modalidade que melhor se adapta às suas necessidades e momento atual
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`mystical-card p-8 relative transform hover:scale-105 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-mystical-purple' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold-gradient text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="bg-mystical-purple rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-cinzel text-2xl font-semibold text-mystical-graphite mb-2">
                    {service.title}
                  </h3>
                  <p className="text-mystical-midnight mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-center gap-2 text-mystical-purple mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{service.duration}</span>
                  </div>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-mystical-graphite">{service.price}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-mystical-midnight">
                      <div className="w-2 h-2 bg-mystical-purple rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    service.popular 
                      ? 'mystical-button' 
                      : 'bg-mystical-purple hover:bg-mystical-purple-dark text-white'
                  }`}
                >
                  Agendar Agora
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-mystical-midnight mb-4">
              Todas as consultas podem ser realizadas presencialmente ou online
            </p>
            <Button 
              variant="outline" 
              className="border-mystical-purple text-mystical-purple hover:bg-mystical-purple hover:text-white"
            >
              Ver Horários Disponíveis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
