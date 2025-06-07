
import { Heart, Instagram, MessageCircle, Mail, FileText, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-mystical-graphite border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-cinzel text-2xl font-bold text-white mb-4">
              <span className="text-mystical-purple">TIAGO FRANCO</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leitura de Tarot especializada em relacionamentos e questões do coração há mais de 25 anos.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/franco.atendimento" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-mystical-purple hover:text-mystical-purple-dark transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/5514999059950?text=Estou%20aqui%20na%20sua%20p%C3%A1gina%20e%20estou%20com%20d%C3%BAvidas%2Fproblemas%2C%20pode%20me%20ajudar%3F" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-mystical-purple hover:text-mystical-purple-dark transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/@TarotDaVerdadeNoAmor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-mystical-purple hover:text-mystical-purple-dark transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">📬 Contato</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-mystical-purple" />
                <a 
                  href="https://wa.me/5514999059950?text=Estou%20aqui%20na%20sua%20p%C3%A1gina%20e%20estou%20com%20d%C3%BAvidas%2Fproblemas%2C%20pode%20me%20ajudar%3F" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-mystical-purple transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-mystical-purple" />
                <a 
                  href="https://www.instagram.com/franco.atendimento" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-mystical-purple transition-colors"
                >
                  @franco.atendimento
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Youtube className="w-4 h-4 text-mystical-purple" />
                <a 
                  href="https://youtube.com/@TarotDaVerdadeNoAmor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-mystical-purple transition-colors"
                >
                  Canal no YouTube
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-mystical-purple" />
                <span>franco.atendimento001@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">🔒 Segurança</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>✓ Pagamento por loja oficial</li>
              <li>✓ Atendimento humano e real</li>
              <li>✓ 100% Confidencial</li>
              <li>✓ Reembolso garantido</li>
              <li>✓ Sigilo absoluto</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-mystical-purple transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-mystical-purple transition-colors">Política de Reembolso</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2 mb-2">
            🕊️ Feito com sensibilidade e propósito, para te ajudar a encontrar clareza, verdade e direção
          </p>
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Feito com <Heart className="w-4 h-4 text-mystical-purple" /> para conectar corações
          </p>
          <p className="text-gray-500 text-sm mt-2">© 2025 | TIAGO FRANCO – Leitura de Tarot. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
