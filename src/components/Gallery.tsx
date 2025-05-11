
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'hair', name: 'Cabelo' },
  { id: 'color', name: 'Coloração' },
  { id: 'nails', name: 'Unhas' },
  { id: 'makeup', name: 'Maquiagem' },
];

const galleryItems = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    category: 'hair',
    description: 'Corte moderno com franja lateral',
    professional: 'Ana Silva'
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    category: 'color',
    description: 'Loiro dourado com mechas',
    professional: 'Carlos Oliveira'
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    category: 'hair',
    description: 'Corte bob curto texturizado',
    professional: 'Ana Silva'
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80',
    category: 'nails',
    description: 'Nail art geométrica em tons pastel',
    professional: 'Juliana Mendes'
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1560869713-ba8c5c4ce919?auto=format&fit=crop&w=800&q=80',
    category: 'makeup',
    description: 'Maquiagem para evento noturno',
    professional: 'Roberto Santos'
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80',
    category: 'color',
    description: 'Balayage em tons caramelo',
    professional: 'Carlos Oliveira'
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80',
    category: 'hair',
    description: 'Ondas naturais com volume',
    professional: 'Ana Silva'
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1580518380430-2f84c0a7fb85?auto=format&fit=crop&w=800&q=80',
    category: 'makeup',
    description: 'Maquiagem natural para dia',
    professional: 'Roberto Santos'
  },
  {
    id: '9',
    image: 'https://images.unsplash.com/photo-1604654894611-6973b376cbde?auto=format&fit=crop&w=800&q=80',
    category: 'nails',
    description: 'Unhas em gel com decoração floral',
    professional: 'Juliana Mendes'
  },
];

const Gallery = () => {
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const selectedImage = galleryItems.find(item => item.id === selectedImageId);

  return (
    <section id="gallery" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Galeria de Trabalhos</h2>
        <p className="section-subtitle">
          Conheça alguns dos trabalhos realizados pela nossa equipe de profissionais.
        </p>
        
        <Tabs defaultValue="all" className="w-full mt-12">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-salon-light">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-salon data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems
                  .filter(item => category.id === 'all' || item.category === category.id)
                  .map((item) => (
                    <Dialog key={item.id}>
                      <DialogTrigger asChild>
                        <div 
                          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                          onClick={() => setSelectedImageId(item.id)}
                        >
                          <img 
                            src={item.image} 
                            alt={item.description}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                            <p className="text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              Clique para ampliar
                            </p>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-xl">
                        <div>
                          <img 
                            src={item.image} 
                            alt={item.description}
                            className="w-full h-auto max-h-[70vh] object-contain rounded-md"
                          />
                          <div className="mt-4">
                            <h3 className="text-lg font-medium">{item.description}</h3>
                            <p className="text-salon-muted">por {item.professional}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
