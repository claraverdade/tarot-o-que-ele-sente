
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 bg-mystical-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-mystical-graphite mb-6">
              Vídeo de <span className="gold-text">Apresentação</span>
            </h2>
          </div>

          <Card className="mystical-card p-8 text-center">
            <div className="relative aspect-video bg-mystical-beige rounded-lg flex items-center justify-center mb-6">
              <div className="bg-mystical-purple rounded-full p-6 cursor-pointer transform hover:scale-110 transition-transform duration-300">
                <Play className="w-12 h-12 text-white fill-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-mystical-purple/20 to-mystical-purple-dark/20 rounded-lg"></div>
            </div>
            
            <p className="text-mystical-midnight">
              Assista e entenda como funciona o processo da leitura personalizada
            </p>
            
            <div className="mt-4 text-sm text-mystical-cosmic">
              [Embed YouTube aqui]
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
