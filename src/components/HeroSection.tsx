
import { Button } from "@/components/ui/button";
import { Star, Sparkles, Moon, Clock, MessageCircle, Heart } from "lucide-react";

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
              animationDelay: `${Math.random() * 4}s`
            }} 
          />
        ))}
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Moon className="w-8 h-8 text-mystical-purple opacity-50" />
      </div>
      <div className="absolute top-32 right-20 animate-float" style={{animationDelay: '2s'}}>
        <Star className="w-6 h-6 text-mystical-purple opacity-60" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{animationDelay: '4s'}}>
        <Sparkles className="w-10 h-10 text-mystical-purple opacity-40" />
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <h1 className="font-cinzel text-3xl md:text-5xl lg:text-6xl font-bold text-mystical-graphite mb-6 leading-tight">
            Você Ainda Sente Algo…
            <span className="gold-text block mt-2">Mas Ele Simplesmente Sumiu</span>
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="w-6 h-6 text-mystical-purple" />
            <p className="text-lg md:text-xl text-mystical-midnight max-w-3xl mx-auto leading-relaxed">
              Quando o silêncio dói mais do que uma resposta, o Tarot pode trazer a verdade que seu coração precisa ouvir.
            </p>
            <Heart className="w-6 h-6 text-mystical-purple" />
          </div>

          <p className="text-lg md:text-xl text-mystical-midnight mb-6 max-w-2xl mx-auto">
            <strong>Leitura Espiritual Exclusiva</strong>, entregue por áudio no WhatsApp em até 12h
          </p>

          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-2xl md:text-3xl text-mystical-cosmic line-through">R$ 75</span>
              <span className="text-3xl md:text-4xl font-bold text-mystical-purple">R$ 25</span>
            </div>
            <p className="text-mystical-midnight">com garantia de clareza ou seu dinheiro de volta</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              className="mystical-button text-lg px-8 py-4 h-auto"
              onClick={() => window.open('https://loja.infinitepay.io/franco-atendimento/nwl4332-1-pergunta-ao-tarot', '_blank')}
            >
              Quero Minha Leitura Agora
            </Button>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-mystical-midnight leading-relaxed mb-4">
              <strong>Descubra a verdade por trás do afastamento.</strong> Receba uma leitura sensível e personalizada, feita especialmente para você, com orientação prática para seguir em frente — ou, quem sabe, reconectar esse amor.
            </p>
          </div>

          <div className="flex justify-center items-center gap-8 text-mystical-cosmic mt-8">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-mystical-purple" />
              <span>Entrega em 12h</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-mystical-purple" />
              <span>Direto no WhatsApp</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-mystical-beige to-transparent"></div>
    </section>
  );
};

export default HeroSection;
