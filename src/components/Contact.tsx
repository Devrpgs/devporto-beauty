
import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    toast({
      title: "Mensagem enviada!",
      description: "Agradecemos seu contato. Retornaremos em breve.",
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Contato</h2>
        <p className="section-subtitle">
          Estamos à disposição para atendê-lo. Entre em contato conosco!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          {/* Location and Information */}
          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 w-full">
                <iframe 
                  title="Localização do Salão"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.178887911152!2d-46.6458331!3d-23.5647079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzUyLjkiUyA0NsKwMzgnNDUuMCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-salon mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Endereço</h3>
                      <p className="text-salon-muted text-sm">
                        Av. Paulista, 1000<br />
                        Bela Vista, São Paulo - SP<br />
                        CEP: 01310-000
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-salon mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Horário</h3>
                      <p className="text-salon-muted text-sm">
                        Segunda a Sábado: 9h às 20h<br />
                        Domingos: Fechado<br />
                        Feriados: 10h às 16h
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-salon mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Telefone</h3>
                      <p className="text-salon-muted text-sm">
                        (11) 3456-7890<br />
                        WhatsApp: (11) 91234-5678
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-salon mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-salon-muted text-sm">
                        contato@devportobeauty.com<br />
                        agendamento@devportobeauty.com
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-medium mb-3">Siga-nos nas redes sociais</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#instagram" 
                      className="w-10 h-10 rounded-full bg-salon text-white flex items-center justify-center hover:bg-salon/80"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a 
                      href="#facebook" 
                      className="w-10 h-10 rounded-full bg-salon text-white flex items-center justify-center hover:bg-salon/80"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a 
                      href="#whatsapp" 
                      className="w-10 h-10 rounded-full bg-salon text-white flex items-center justify-center hover:bg-salon/80"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-playfair font-medium mb-6">Envie-nos uma mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nome
                    </label>
                    <Input 
                      id="name"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Assunto
                  </label>
                  <Input 
                    id="subject"
                    placeholder="Assunto da mensagem"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Digite sua mensagem aqui..."
                    rows={5}
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-salon hover:bg-salon/90 text-white"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
