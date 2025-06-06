
import { Card } from "@/components/ui/card";
import { Shield, RefreshCw, Clock } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-mystical-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mystical-graphite mb-6">
              Garantia de <span className="gold-text">Satisfação</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="mystical-card p-8 text-center">
              <div className="bg-mystical-purple rounded-full p-4 w-16 h-16 mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-cinzel text-xl font-semibold text-mystical-graphite mb-4">
                Garantia de Valor ou Reembolso Integral
              </h3>
              
              <p className="text-mystical-midnight leading-relaxed">
                Caso você não sinta que recebeu clareza e valor na leitura, basta enviar 'Reembolso' no WhatsApp em até 12h após o envio do áudio. Você receberá 100% do seu dinheiro de volta sem perguntas.
              </p>
            </Card>

            <Card className="mystical-card p-8 text-center">
              <div className="bg-mystical-purple rounded-full p-4 w-16 h-16 mx-auto mb-6">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-cinzel text-xl font-semibold text-mystical-graphite mb-4">
                Reenvio Grátis em Até 12h
              </h3>
              
              <p className="text-mystical-midnight leading-relaxed">
                Se o áudio não estiver claro, solicitamos que envie 'Reenvio' e produziremos um novo arquivo em até 12h.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
