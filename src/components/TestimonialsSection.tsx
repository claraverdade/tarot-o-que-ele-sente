
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo, SP",
      text: "A consulta com Luna foi transformadora. Suas orientações me ajudaram a tomar decisões importantes na minha carreira e relacionamento. A precisão das previsões me impressionou!",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "João Santos",
      location: "Rio de Janeiro, RJ",
      text: "Procurei Luna em um momento muito difícil da minha vida. Ela me trouxe clareza e esperança quando eu mais precisava. Recomendo a todos que buscam orientação espiritual.",
      rating: 5,
      avatar: "JS"
    },
    {
      name: "Ana Costa",
      location: "Belo Horizonte, MG",
      text: "Consultas sempre precisas e reveladoras. Luna tem um dom especial para interpretar as cartas e conectar com as energias. Já são 3 anos de acompanhamento!",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "Carlos Oliveira",
      location: "Brasília, DF",
      text: "Estava cético, mas a experiência me surpreendeu completamente. As orientações foram certeiras e me ajudaram a reorganizar minha vida financeira e pessoal.",
      rating: 5,
      avatar: "CO"
    },
    {
      name: "Lucia Ferreira",
      location: "Salvador, BA",
      text: "A energia de Luna é incrível! Ela consegue captar detalhes da minha vida que nem eu havia percebido. Suas consultas são um verdadeiro divisor de águas.",
      rating: 5,
      avatar: "LF"
    },
    {
      name: "Pedro Almeida",
      location: "Curitiba, PR",
      text: "Profissionalismo exemplar! Luna conduz as consultas com muito respeito e sabedoria. Sempre saio das sessões com mais clareza sobre meu caminho.",
      rating: 5,
      avatar: "PA"
    }
  ];

  return (
    <section className="py-20 bg-mystical-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mystical-graphite mb-6">
              O que Dizem Nossos <span className="gold-text">Clientes</span>
            </h2>
            <p className="text-xl text-mystical-midnight max-w-3xl mx-auto">
              Transformações reais, experiências autênticas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <h4 className="font-semibold text-mystical-graphite">{testimonial.name}</h4>
                    <p className="text-sm text-mystical-cosmic">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
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

          <div className="text-center mt-12">
            <div className="mystical-card p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-8 text-mystical-graphite">
                <div className="text-center">
                  <div className="text-3xl font-bold gold-text">500+</div>
                  <div className="text-sm text-mystical-midnight">Consultas Realizadas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gold-text">98%</div>
                  <div className="text-sm text-mystical-midnight">Satisfação</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gold-text">15</div>
                  <div className="text-sm text-mystical-midnight">Anos de Experiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
