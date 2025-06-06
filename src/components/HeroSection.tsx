
import { Button } from "@/components/ui/button";
import { Star, Sparkles, Moon } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cosmic-gradient overflow-hidden">
      {/* Animated stars background */}
      <div className="stars">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Moon className="w-8 h-8 text-mystical-gold opacity-50" />
      </div>
      <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <Star className="w-6 h-6 text-mystical-gold-light opacity-60" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <Sparkles className="w-10 h-10 text-mystical-purple opacity-40" />
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-cinzel text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Descubra os Segredos do
            <span className="gold-text block mt-2">Seu Destino</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Consultas de Tarot personalizadas que revelam clareza, orientação e respostas para suas questões mais profundas
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="mystical-button text-lg px-8 py-4 h-auto">
              Agendar Consulta
            </Button>
            <Button 
              variant="outline" 
              className="border-mystical-gold text-mystical-gold hover:bg-mystical-gold hover:text-mystical-midnight transition-all duration-300 text-lg px-8 py-4 h-auto"
            >
              Saber Mais
            </Button>
          </div>

          <div className="flex justify-center items-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-mystical-gold" />
              <span>+500 Consultas</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-mystical-gold" />
              <span>15 Anos de Experiência</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-mystical-midnight to-transparent"></div>
    </section>
  );
};

export default HeroSection;
