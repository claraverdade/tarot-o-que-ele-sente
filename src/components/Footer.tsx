import { Heart, Instagram, MessageCircle, Mail, FileText } from "lucide-react";
const Footer = () => {
  return <footer className="bg-mystical-graphite border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-cinzel text-2xl font-bold text-white mb-4">
              Tiago L <span className="text-mystical-purple">Franco</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leitura de Tarot especializada em relacionamentos e questões do coração.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-mystical-purple hover:text-mystical-purple-dark transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-mystical-purple hover:text-mystical-purple-dark transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-mystical-purple transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-mystical-purple transition-colors">Depoimentos</a></li>
              <li><a href="#" className="hover:text-mystical-purple transition-colors">Contato (WhatsApp)</a></li>
              <li><a href="#" className="hover:text-mystical-purple transition-colors">Política de Reembolso</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-mystical-purple" />
                <span>WhatsApp</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-mystical-purple" />
                <span>tiago@tarot.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-mystical-purple" />
                <span>Política de Privacidade</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Garantias</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>✓ Reembolso em 12h</li>
              <li>✓ Entrega garantida</li>
              <li>✓ Suporte completo</li>
              <li>✓ 100% Confidencial</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Feito com <Heart className="w-4 h-4 text-mystical-purple" /> para conectar corações
          </p>
          <p className="text-gray-500 text-sm mt-2">© 2025 | Tiago  Franco – Leitura de Tarot. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;