import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import TestimonialsCarousel from './components/testimonials/TestimonialsCarousel';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedCollections />
      <TestimonialsCarousel />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;