
import React from 'react';
import { Button } from '@/components/ui/button';

const team = [
  {
    id: '1',
    name: 'Ana Silva',
    role: 'Cabelereira Sênior',
    bio: 'Especialista em cortes modernos e colorações. Com mais de 10 anos de experiência em salões renomados.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    certifications: ['Certificação L\'Oréal', 'Especialista em Visagismo']
  },
  {
    id: '2',
    name: 'Carlos Oliveira',
    role: 'Colorista Master',
    bio: 'Especialista em técnicas avançadas de coloração e mechas. Formado pela Academia Wella com experiência internacional.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    certifications: ['Certificação Wella', 'Especialista em Colorimetria']
  },
  {
    id: '3',
    name: 'Juliana Mendes',
    role: 'Manicure e Pedicure',
    bio: 'Especialista em nail art e técnicas de alongamento. Atualizada com as últimas tendências do mercado.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    certifications: ['Especialista em Nail Design', 'Técnica em Unhas em Gel']
  },
  {
    id: '4',
    name: 'Roberto Santos',
    role: 'Esteticista',
    bio: 'Especializado em tratamentos faciais e corporais. Formado em Estética Avançada com foco em rejuvenescimento.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    certifications: ['Especialista em Limpeza de Pele', 'Certificação em Terapias Faciais']
  },
];

const Team = () => {
  return (
    <section id="team" className="bg-salon-light py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Nossa Equipe</h2>
        <p className="section-subtitle">
          Nossa equipe é formada por talentos apaixonados e constantemente atualizados com as últimas tendências e técnicas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {team.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <h3 className="text-xl font-medium">{member.name}</h3>
                    <p className="text-salon/80">{member.role}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-sm text-salon-muted mb-4">{member.bio}</p>
                <div className="mb-4">
                  <p className="text-xs font-medium mb-2">Certificações:</p>
                  <div className="flex flex-wrap gap-2">
                    {member.certifications.map((cert, index) => (
                      <span 
                        key={index}
                        className="bg-salon/10 text-salon-dark text-xs py-1 px-2 rounded"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                <a href="#booking">
                  <Button 
                    variant="outline" 
                    className="w-full border-salon text-salon hover:bg-salon hover:text-white"
                  >
                    Agendar com {member.name.split(' ')[0]}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
