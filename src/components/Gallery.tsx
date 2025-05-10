
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
    image: 'https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'hair',
    description: 'Corte moderno com franja lateral',
    professional: 'Ana Silva'
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'color',
    description: 'Loiro dourado com mechas',
    professional: 'Carlos Oliveira'
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'hair',
    description: 'Corte bob curto texturizado',
    professional: 'Ana Silva'
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1595118931706-44804fac3d63?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'nails',
    description: 'Nail art geométrica em tons pastel',
    professional: 'Juliana Mendes'
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'makeup',
    description: 'Maquiagem para evento noturno',
    professional: 'Roberto Santos'
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1501644898242-cfea317d7faf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'color',
    description: 'Balayage em tons caramelo',
    professional: 'Carlos Oliveira'
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'hair',
    description: 'Ondas naturais com volume',
    professional: 'Ana Silva'
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'makeup',
    description: 'Maquiagem natural para dia',
    professional: 'Roberto Santos'
  },
  {
    id: '9',
    image: 'https://images.unsplash.com/photo-1631214504347-15b08ab93ee0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
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
