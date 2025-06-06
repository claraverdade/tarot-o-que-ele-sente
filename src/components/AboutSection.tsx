
import { Card } from "@/components/ui/card";
import { Heart, Eye, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-mystical-midnight">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre <span className="gold-text">Luna Mystica</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Com mais de 15 anos dedicados ao estudo esotérico e prática do Tarot, 
              guio pessoas em jornadas de autoconhecimento e transformação pessoal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mystical-card p-8 mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=400&fit=crop&crop=face" 
                  alt="Luna Mystica - Taróloga Profissional"
                  className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-mystical-gold animate-glow"
                />
                <h3 className="font-cinzel text-2xl font-semibold text-white text-center mb-4">
                  Luna Mystica
                </h3>
                <p className="text-gray-300 text-center">
                  Mestre em Tarot, Astrologia e Numerologia
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Minha jornada começou ainda jovem, quando descobri minha conexão natural com 
                as energias universais. Desde então, dedico-me ao estudo contínuo das artes 
                esotéricas, sempre buscando oferecer orientação precisa e transformadora.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Cada consulta é única e personalizada, conduzida com respeito, sigilo absoluto 
                e profundo compromisso com seu bem-estar espiritual.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="mystical-card p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-mystical-gold rounded-full p-3">
                    <Heart className="w-6 h-6 text-mystical-midnight" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-2">Empatia e Compreensão</h4>
                    <p className="text-gray-300">
                      Cada consulta é conduzida com profunda empatia, criando um espaço seguro 
                      para suas questões mais íntimas.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="mystical-card p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-mystical-gold rounded-full p-3">
                    <Eye className="w-6 h-6 text-mystical-midnight" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-2">Visão Clara e Precisa</h4>
                    <p className="text-gray-300">
                      Interpretações detalhadas que iluminam caminhos e revelam oportunidades 
                      antes ocultas.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="mystical-card p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-mystical-gold rounded-full p-3">
                    <Shield className="w-6 h-6 text-mystical-midnight" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-2">Sigilo Absoluto</h4>
                    <p className="text-gray-300">
                      Sua privacidade é sagrada. Todas as consultas são tratadas com 
                      total confidencialidade e respeito.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
