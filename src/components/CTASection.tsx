
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MessageCircle, Shield, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-cosmic-gradient relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-mystical-gold/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-mystical-purple/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-mystical-cosmic/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-6">
            Pronta Para Descobrir
            <span className="gold-text block mt-2">Seu Verdadeiro Caminho?</span>
          </h2>
          
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Não deixe as dúvidas guiarem sua vida. Agende sua consulta e permita que 
            as cartas revelem as respostas que você procura.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="mystical-card p-6 text-center">
              <Calendar className="w-8 h-8 text-mystical-gold mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">Agendamento Fácil</h4>
              <p className="text-sm text-gray-300">Escolha dia e horário que melhor se adequa à sua rotina</p>
            </Card>

            <Card className="mystical-card p-6 text-center">
              <MessageCircle className="w-8 h-8 text-mystical-gold mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">Suporte Contínuo</h4>
              <p className="text-sm text-gray-300">Tire dúvidas após a consulta via WhatsApp</p>
            </Card>

            <Card className="mystical-card p-6 text-center">
              <Shield className="w-8 h-8 text-mystical-gold mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">100% Seguro</h4>
              <p className="text-sm text-gray-300">Sigilo absoluto e ambiente acolhedor</p>
            </Card>

            <Card className="mystical-card p-6 text-center">
              <Clock className="w-8 h-8 text-mystical-gold mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">Disponibilidade</h4>
              <p className="text-sm text-gray-300">Horários flexíveis, incluindo fins de semana</p>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="mystical-button text-lg px-8 py-4 h-auto">
                💫 Agendar Minha Consulta
              </Button>
              <Button 
                variant="outline" 
                className="border-mystical-gold text-mystical-gold hover:bg-mystical-gold hover:text-mystical-midnight transition-all duration-300 text-lg px-8 py-4 h-auto"
              >
                📞 Falar no WhatsApp
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Online agora</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Resposta em até 2 horas</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Consulta 100% confidencial</span>
              </div>
            </div>

            <div className="bg-mystical-card rounded-lg p-6 max-w-md mx-auto">
              <p className="text-white font-semibold mb-2">🎁 Oferta Especial</p>
              <p className="text-gray-300 text-sm">
                Primeira consulta com <span className="text-mystical-gold font-semibold">20% de desconto</span> para novos clientes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
