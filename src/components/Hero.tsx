
import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80')"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in" style={{ animationDelay: '0.2s' }}>
          DevPorto Beauty
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto fade-in" style={{ animationDelay: '0.4s' }}>
          Transformamos sua beleza exterior, elevamos sua confiança interior
        </p>
        <div className="fade-in" style={{ animationDelay: '0.6s' }}>
          <a 
            href="#booking" 
            className="btn-primary text-lg md:text-xl py-3 px-8 shadow-lg hover:shadow-xl"
          >
            Agende seu Horário em 3 Cliques
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <a href="#booking" className="text-white animate-bounce inline-block">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
