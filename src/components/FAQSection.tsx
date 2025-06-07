
import { Card } from "@/components/ui/card";
import { HelpCircle, Clock, MessageCircle, Calendar, Shield, Heart, Star, Brain, CheckCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      icon: Clock,
      question: "E se eu não receber a leitura em 12h?",
      answer: "Basta enviar a palavra 'Atraso' no WhatsApp. Entregamos em até 6h ou devolvemos 100% do valor."
    },
    {
      icon: MessageCircle,
      question: "Como faço a minha pergunta para a leitura?",
      answer: "Assim que o pagamento for confirmado, você receberá uma mensagem no WhatsApp com as instruções. Você pode escrever sua dúvida com suas próprias palavras, como por exemplo: 'Ele ainda pensa em mim?' ou 'Por que ele se afastou?' Se tiver dificuldade, eu te ajudo a formular a pergunta do jeito certo. O importante é ser sincera com o que está sentindo."
    },
    {
      icon: Calendar,
      question: "Posso conversar com Tiago após a leitura?",
      answer: "Sim. Você pode conversar comigo diretamente pelo WhatsApp para dúvidas rápidas ou desabafos. A consulta ao vivo de 30 minutos está disponível exclusivamente no plano Experiência Completa, mediante agendamento."
    },
    {
      icon: Shield,
      question: "E se eu não gostar ou não fizer sentido pra mim?",
      answer: "Você tem garantia de reembolso integral. Basta escrever 'Reembolso' em até 12h após o recebimento."
    },
    {
      icon: CheckCircle,
      question: "É confidencial?",
      answer: "Completamente. Nenhuma informação é compartilhada. Atendimento humano, ético e sensível."
    },
    {
      icon: Star,
      question: "Eu nunca fiz uma leitura de tarot antes. Preciso acreditar em algo?",
      answer: "Não. Você só precisa estar aberto(a) a ouvir com o coração. A leitura é feita com respeito, clareza e foco na sua realidade emocional, sem rituais ou crenças obrigatórias."
    },
    {
      icon: Heart,
      question: "Essa leitura pode me dizer se ele(a) ainda me ama?",
      answer: "O tarot revela as energias e intenções presentes no momento. Muitas vezes, ele mostra mais do que palavras — mostra os bloqueios, os sentimentos escondidos e os caminhos possíveis."
    },
    {
      icon: Brain,
      question: "Vai doer ouvir a verdade?",
      answer: "Talvez. Mas será uma dor que liberta. A leitura não é feita para julgar, e sim para clarear. Com empatia e verdade, você vai sentir mais força e direção."
    }
  ];

  return (
    <section className="py-20 bg-mystical-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mystical-graphite mb-6">
              ❓ Perguntas <span className="gold-text">Frequentes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="mystical-card p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-mystical-purple rounded-full p-3 flex-shrink-0">
                    <faq.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-mystical-graphite text-lg mb-3">
                      {faq.question}
                    </h4>
                    <p className="text-mystical-midnight leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
