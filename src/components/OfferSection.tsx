
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Clock, MessageCircle, FileText, Star } from "lucide-react";

const OfferSection = () => {
  return (
    <section className="py-20 bg-cosmic-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Oferta Básica */}
            <Card className="mystical-card p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gold-gradient text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Mais Popular
                </span>
              </div>

              <div className="text-center mb-6">
                <h3 className="font-cinzel text-2xl font-semibold text-mystical-graphite mb-2">
                  Leitura Rápida
                </h3>
                <p className="text-mystical-midnight mb-4">Resposta completa em até 12h</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-mystical-graphite">R$ 25</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-mystical-midnight">
                  <Check className="w-5 h-5 text-mystical-purple" />
                  <span>Áudio personalizado no WhatsApp</span>
                </li>
                <li className="flex items-center gap-2 text-mystical-midnight">
                  <Check className="w-5 h-5 text-mystical-purple" />
                  <span>Entrega em até 24h</span>
                </li>
                <li className="flex items-center gap-2 text-mystical-midnight">
                  <Check className="w-5 h-5 text-mystical-purple" />
                  <span>Análise da situação atual</span>
                </li>
                <li className="flex items-center gap-2 text-mystical-midnight">
                  <Check className="w-5 h-5 text-mystical-purple" />
                  <span>Orientações práticas</span>
                </li>
              </ul>

              <Button 
                className="mystical-button w-full text-lg py-4 h-auto"
                onClick={() => window.open('https://loja.infinitepay.io/franco-atendimento/nwl4332-1-pergunta-ao-tarot', '_blank')}
              >
                Quero Minha Leitura Agora
              </Button>
            </Card>

            {/* Oferta Premium */}
            <Card className="mystical-card p-8">
              <div className="text-center mb-6">
                <h3 className="font-cinzel text-2xl font-semibold text-mystical-graphite mb-2">
                  Experiência Completa
                </h3>
                <p className="text-mystical-midnight mb-4">Leitura aprofundada + bônus exclusivos</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-mystical-graphite">R$ 150</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-mystical-midnight">
                  <Check className="w-5 h-5 text-mystical-purple" />
                  <span>Tudo da leitura básica</span>
                </li>
                <li className="flex items-center gap-2 text-mystical-midnight">
                  <Check className="w-5 h-5 text-mystical-purple" />
                  <span>Consulta de 30 min ao vivo</span>
                </li>
                <li className="flex items-center gap-2 text-mystical-midnight">
                  <Check className="w-5 h-5 text-mystical-purple" />
                  <span>Mini-plano de ação personalizado</span>
                </li>
                <li className="flex items-center gap-2 text-mystical-midnight">
                  <Check className="w-5 h-5 text-mystical-purple" />
                  <span>Check-in pós-leitura</span>
                </li>
                <li className="flex items-center gap-2 text-mystical-midnight">
                  <Check className="w-5 h-5 text-mystical-purple" />
                  <span>Suporte estendido por 7 dias</span>
                </li>
              </ul>

              <Button 
                variant="outline" 
                className="w-full border-mystical-purple text-mystical-purple hover:bg-mystical-purple hover:text-white text-lg py-4 h-auto"
                onClick={() => window.open('https://loja.infinitepay.io/franco-atendimento/itw3422-consulta-de-tarot-25-min', '_blank')}
              >
                Quero a Experiência Completa
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
