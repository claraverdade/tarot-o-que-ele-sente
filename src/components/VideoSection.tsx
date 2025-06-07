
import { Card } from "@/components/ui/card";

const VideoSection = () => {
  return (
    <section className="py-20 bg-mystical-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mystical-graphite mb-6">
              🎥 Vídeo de <span className="gold-text">Apresentação</span>
            </h2>
            <p className="text-mystical-midnight mb-8">
              Assista ao vídeo e entenda como funciona a leitura espiritual, como ela é feita pelo Tiago e por que tem ajudado tantas pessoas em momentos delicados da vida.
            </p>
          </div>

          <Card className="mystical-card p-8 text-center">
            <div className="relative aspect-[9/16] max-w-md mx-auto bg-mystical-beige rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/ywwCXBtzWKU"
                title="Tarot da Verdade no Amor - Apresentação"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <p className="text-mystical-midnight mt-6">
              ▶️ Assista ao vídeo explicativo no YouTube
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
