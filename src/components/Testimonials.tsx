
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, StarHalf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: '1',
    name: 'Maria Silva',
    content: 'O atendimento personalizado e a qualidade dos serviços me conquistaram desde a primeira visita. Agora sou cliente fiel há mais de um ano!',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=256&q=80',
    rating: 5
  },
  {
    id: '2',
    name: 'João Oliveira',
    content: 'Profissionais extremamente capacitados e ambiente muito agradável. As técnicas utilizadas são de ponta e o resultado sempre supera as expectativas.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80',
    rating: 5
  },
  {
    id: '3',
    name: 'Carolina Mendes',
    content: 'Melhor salão que já frequentei! O sistema de agendamento online é super prático e sempre respeitam meu horário. Recomendo muito o trabalho da Ana!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80',
    rating: 5
  },
  {
    id: '4',
    name: 'Pedro Santana',
    content: 'Minha experiência foi excelente! O Carlos fez um trabalho incrível na coloração do meu cabelo, encontrando o tom perfeito para minha pele.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80',
    rating: 4.5
  },
  {
    id: '5',
    name: 'Luciana Costa',
    content: 'Ambiente super aconchegante e atendimento de primeira! A Juliana é uma artista com as unhas. Saí muito satisfeita e já agendei meu retorno.',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=256&q=80',
    rating: 5
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-5 h-5 fill-salon text-salon" />);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-5 h-5 fill-salon text-salon" />);
    }
    
    return stars;
  };
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="testimonials" className="bg-salon-light py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Depoimentos</h2>
        <p className="section-subtitle">
          Veja o que nossos clientes falam sobre a experiência em nosso salão.
        </p>
        
        <div className="mt-12 relative">
          {/* Desktop view - Multiple testimonials */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {[
              currentIndex % testimonials.length,
              (currentIndex + 1) % testimonials.length,
              (currentIndex + 2) % testimonials.length
            ].map((index) => (
              <div 
                key={testimonials[index].id}
                className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonials[index].image} 
                    alt={testimonials[index].name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-medium">{testimonials[index].name}</h3>
                    <div className="flex mt-1">
                      {renderRating(testimonials[index].rating)}
                    </div>
                  </div>
                </div>
                <p className="text-salon-muted italic">{testimonials[index].content}</p>
              </div>
            ))}
          </div>
          
          {/* Mobile view - Single testimonial */}
          <div className="md:hidden">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-medium">{testimonials[currentIndex].name}</h3>
                  <div className="flex mt-1">
                    {renderRating(testimonials[currentIndex].rating)}
                  </div>
                </div>
              </div>
              <p className="text-salon-muted italic">{testimonials[currentIndex].content}</p>
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-salon hover:bg-salon hover:text-white"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {/* Dots for mobile */}
            <div className="flex items-center gap-2 md:hidden">
              {testimonials.map((_, index) => (
                <span 
                  key={index} 
                  className={cn(
                    "w-2 h-2 rounded-full",
                    index === currentIndex ? "bg-salon" : "bg-salon/30"
                  )}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-salon hover:bg-salon hover:text-white"
              onClick={goToNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
