
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-black/40 backdrop-blur-sm py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className={cn(
                "text-2xl font-playfair font-bold",
                isScrolled ? "text-salon-dark" : "text-white"
              )}>
                DevPorto<span className="text-salon">Beauty</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className={cn(
                "hover:text-salon transition-colors font-medium",
                isScrolled ? "text-salon-dark" : "text-white"
              )}>Home</a>
              <a href="#services" className={cn(
                "hover:text-salon transition-colors font-medium",
                isScrolled ? "text-salon-dark" : "text-white"
              )}>Serviços</a>
              <a href="#team" className={cn(
                "hover:text-salon transition-colors font-medium",
                isScrolled ? "text-salon-dark" : "text-white"
              )}>Equipe</a>
              <a href="#gallery" className={cn(
                "hover:text-salon transition-colors font-medium",
                isScrolled ? "text-salon-dark" : "text-white"
              )}>Galeria</a>
              <a href="#testimonials" className={cn(
                "hover:text-salon transition-colors font-medium",
                isScrolled ? "text-salon-dark" : "text-white"
              )}>Depoimentos</a>
              <a href="#contact" className={cn(
                "hover:text-salon transition-colors font-medium",
                isScrolled ? "text-salon-dark" : "text-white"
              )}>Contato</a>
              <a href="#booking" className="btn-primary">Agende Agora</a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "inline-flex items-center justify-center p-2 rounded-md hover:text-salon focus:outline-none",
                isScrolled ? "text-salon-dark" : "text-white"
              )}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a 
            href="#home" 
            className="block px-3 py-2 text-base font-medium text-salon-dark hover:bg-salon-light rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#services" 
            className="block px-3 py-2 text-base font-medium text-salon-dark hover:bg-salon-light rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Serviços
          </a>
          <a 
            href="#team" 
            className="block px-3 py-2 text-base font-medium text-salon-dark hover:bg-salon-light rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Equipe
          </a>
          <a 
            href="#gallery" 
            className="block px-3 py-2 text-base font-medium text-salon-dark hover:bg-salon-light rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Galeria
          </a>
          <a 
            href="#testimonials" 
            className="block px-3 py-2 text-base font-medium text-salon-dark hover:bg-salon-light rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Depoimentos
          </a>
          <a 
            href="#contact" 
            className="block px-3 py-2 text-base font-medium text-salon-dark hover:bg-salon-light rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contato
          </a>
          <a 
            href="#booking" 
            className="block px-3 py-2 text-base font-medium bg-salon text-white hover:bg-salon/90 rounded-md text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Agende Agora
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
