
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BookingSection from '@/components/BookingSection';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BookingSection />
      <Services />
      <Team />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
};

export default Index;
