
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana",
      age: "28",
      location: "São Paulo",
      text: "Ele sumiu por dois meses. Achei que não me amava mais. Com essa leitura, entendi que havia bloqueios emocionais entre nós dois. Foi como se eu pudesse respirar de novo, com mais confiança no que sentia.",
      avatar: "A"
    },
    {
      name: "Gabriel",
      age: "44",
      location: "Botucatu",
      text: "Eu entrei buscando uma direção… e saí com uma clareza que eu não esperava. A leitura foi extremamente direcionadora. O Tiago tem uma objetividade absurda — ele vai direto no que importa. Quando ele disse que tinha 25 anos de jornada, tudo fez sentido. Saí com a mente mais clara e o coração mais tranquilo.",
      avatar: "G"
    },
    {
      name: "Renata",
      age: "36",
      location: "Recife",
      text: "Eu estava em um estado de ansiedade que não me deixava dormir. A leitura me trouxe calma, clareza e coragem pra aceitar o que eu já sentia, mas não queria ver. Foi como conversar com alguém que entende a alma da gente. Hoje me sinto mais forte e mais em paz.",
      avatar: "R"
    }
  ];

  return (
    <section className="py-20 bg-mystical-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mystical-graphite mb-6">
              🌟 <span className="gold-text">Depoimentos Reais</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="mystical-card p-6 transform hover:scale-105 transition-transform duration-300">
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
                    <Star key={starIndex} className="w-4 h-4 fill-mystical-purple text-mystical-purple" />
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
