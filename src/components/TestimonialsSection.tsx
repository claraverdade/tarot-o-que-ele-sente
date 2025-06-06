
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana",
      age: "28 anos",
      location: "São Paulo",
      text: "Ele sumiu por dois meses. Achei que não me amava mais. Com essa leitura, eu entendi que havia bloqueios emocionais de ambos. Hoje sinto mais confiança e clareza.",
      avatar: "A"
    },
    {
      name: "Vanessa",
      age: "31 anos", 
      location: "Belo Horizonte",
      text: "Minha cabeça estava uma bagunça. O áudio me mostrou os padrões que eu nem via. Em menos de um dia, fiquei mais segura para conversar com ele.",
      avatar: "V"
    },
    {
      name: "Mariana",
      age: "24 anos",
      location: "Curitiba", 
      text: "Já tinha tentado resolver tudo sozinha, mas não conseguia entender o silêncio dele. Essa leitura me deu luz para seguir adiante, sem sufocar ninguém.",
      avatar: "M"
    }
  ];

  return (
    <section className="py-20 bg-mystical-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mystical-graphite mb-6">
              Prova Social / <span className="gold-text">Depoimentos</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="mystical-card p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-mystical-purple rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-mystical-graphite">{testimonial.name}, {testimonial.age}</h4>
                    <p className="text-sm text-mystical-cosmic">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className="w-4 h-4 fill-mystical-purple text-mystical-purple" 
                    />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="w-6 h-6 text-mystical-purple opacity-50 mb-2" />
                  <p className="text-mystical-midnight leading-relaxed italic">
                    "{testimonial.text}"
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

export default TestimonialsSection;
