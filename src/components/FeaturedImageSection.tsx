
import { Card } from "@/components/ui/card";

const FeaturedImageSection = () => {
  return (
    <section className="py-20 bg-cosmic-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="mystical-card p-8 overflow-hidden">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=500&fit=crop&crop=center" 
                alt="Cartas de Tarot em superfície de madeira clara com vela acesa"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mystical-purple/20 to-transparent rounded-lg"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <h3 className="font-cinzel text-2xl font-semibold text-white mb-2 drop-shadow-lg">
                  Sua Clareza Está Aqui
                </h3>
                <p className="text-white/90 drop-shadow-lg">
                  Descubra as respostas que seu coração procura
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturedImageSection;
