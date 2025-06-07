
import { Card } from "@/components/ui/card";
import { Heart, Star, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-mystical-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mystical-graphite mb-6">
              🔮 Sobre <span className="gold-text">Tiago</span>
            </h2>
          </div>

          <Card className="mystical-card p-8 text-center">
            <div className="mb-6">
              <div className="w-24 h-24 bg-mystical-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>

            <div className="space-y-6 text-mystical-midnight leading-relaxed">
              <p>
                Leio cartas há mais de <strong>25 anos</strong>, sempre com um propósito: ajudar as pessoas a enxergarem com mais clareza o que sentem — especialmente quando o coração está confuso ou ferido — e poderem tomar decisões conscientes, entendendo melhor as opções que cada um tem.
              </p>

              <p>
                Meu foco nunca foi prever, mas sim iluminar o agora com respeito, sensibilidade e um olhar profundo sobre o que realmente importa pra você — curando o que existe no momento, para que você possa seguir com mais luz, mais conhecimento e mais felicidade.
              </p>

              <div className="bg-mystical-beige p-6 rounded-lg">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="w-6 h-6 text-mystical-purple" />
                  <Sparkles className="w-6 h-6 text-mystical-purple" />
                  <Star className="w-6 h-6 text-mystical-purple" />
                </div>
                <p className="font-cinzel text-xl font-semibold text-mystical-purple italic">
                  "Não estou aqui para adivinhar — estou aqui para te mostrar com verdade o que já vive dentro de você."
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
