
import React from 'react';
import { Button } from '@/components/ui/button';

const serviceCategories = [
  {
    id: 'hair',
    name: 'Cabelo',
    services: [
      { id: 'cut', name: 'Corte', price: 'A partir de R$ 80', duration: '45 min', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80' },
      { id: 'color', name: 'Coloração', price: 'A partir de R$ 150', duration: '2h', image: 'https://images.unsplash.com/photo-1500668381144-4c6b9f6e8b5d?auto=format&fit=crop&w=500&q=80' },
      { id: 'hydration', name: 'Hidratação', price: 'A partir de R$ 90', duration: '1h', image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=500&q=80' },
    ]
  },
  {
    id: 'nails',
    name: 'Unhas',
    services: [
      { id: 'manicure', name: 'Manicure', price: 'A partir de R$ 60', duration: '40 min', image: 'https://images.unsplash.com/photo-1604654894611-6973b376cbde?auto=format&fit=crop&w=500&q=80' },
      { id: 'pedicure', name: 'Pedicure', price: 'A partir de R$ 70', duration: '50 min', image: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=500&q=80' },
      { id: 'gel', name: 'Unhas em Gel', price: 'A partir de R$ 120', duration: '1h 30min', image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=500&q=80' },
    ]
  },
  {
    id: 'aesthetics',
    name: 'Estética',
    services: [
      { id: 'facial', name: 'Limpeza de Pele', price: 'A partir de R$ 100', duration: '1h', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80' },
      { id: 'eyebrows', name: 'Design de Sobrancelhas', price: 'A partir de R$ 50', duration: '30 min', image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=500&q=80' },
      { id: 'massage', name: 'Massagem Relaxante', price: 'A partir de R$ 130', duration: '1h', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=500&q=80' },
    ]
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="section-subtitle">
          Oferecemos uma variedade de serviços para realçar sua beleza natural e garantir uma experiência relaxante.
        </p>
        
        {serviceCategories.map((category) => (
          <div key={category.id} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-playfair font-medium mb-8 text-center">{category.name}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-playfair font-medium mb-2">{service.name}</h4>
                    <div className="flex justify-between text-salon-muted mb-4">
                      <span>{service.price}</span>
                      <span>{service.duration}</span>
                    </div>
                    <a href="#booking">
                      <Button className="w-full bg-salon hover:bg-salon/90 text-white">
                        Agendar Este Serviço
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
