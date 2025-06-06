
import { Heart, Instagram, Facebook, MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-mystical-graphite border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-cinzel text-2xl font-bold text-white mb-4">
              Luna <span className="text-mystical-purple">Mystica</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Guiando almas em busca de clareza, propósito e transformação através da sabedoria ancestral do Tarot.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-mystical-purple hover:text-mystical-purple-dark transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-mystical-purple hover:text-mystical-purple-dark transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-mystical-purple hover:text-mystical-purple-dark transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-mystical-purple transition-colors">Consulta Individual</a></li>
              <li><a href="#" className="hover:text-mystical-purple transition-colors">Consulta Premium</a></li>
              <li><a href="#" className="hover:text-mystical-purple transition-colors">Consulta Express</a></li>
              <li><a href="#" className="hover:text-mystical-purple transition-colors">Mapa Astral</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-mystical-purple" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-mystical-purple" />
                <span>luna@mystica.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-mystical-purple" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Horários</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Segunda - Sexta: 9h às 21h</li>
              <li>Sábado: 9h às 18h</li>
              <li>Domingo: 14h às 20h</li>
              <li className="text-mystical-purple font-semibold">Emergências: 24h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Feito com <Heart className="w-4 h-4 text-mystical-purple" /> para conectar almas aos seus destinos
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 Luna Mystica. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
