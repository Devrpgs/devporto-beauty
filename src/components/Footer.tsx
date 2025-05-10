
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-salon-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-medium mb-4">DevPorto Beauty</h3>
            <p className="text-gray-400 text-sm">
              Transformamos sua beleza exterior, elevamos sua confiança interior. Visite nosso salão e descubra uma experiência única de beleza e bem-estar.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Equipe</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Galeria</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
              <li><a href="#booking" className="text-gray-400 hover:text-white transition-colors">Agendar</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Corte de Cabelo</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Coloração</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Tratamentos Capilares</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Manicure & Pedicure</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Estética Facial</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Maquiagem</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Inscreva-se para receber novidades, promoções e dicas de beleza.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="px-4 py-2 w-full rounded-l-md focus:outline-none bg-gray-800 text-white"
              />
              <button 
                type="submit"
                className="bg-salon hover:bg-salon/90 text-white px-4 rounded-r-md transition-colors"
              >
                OK
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} DevPorto Beauty. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#terms" className="text-gray-400 text-sm hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#cookies" className="text-gray-400 text-sm hover:text-white transition-colors">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
