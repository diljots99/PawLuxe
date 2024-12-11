import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80"
          alt="Luxury pet accessories"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="font-serif text-5xl md:text-7xl mb-6">
          Elevate Your Pet's Lifestyle
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Discover our curated collection of luxury accessories for the
          distinguished pet in your life.
        </p>
        <button className="inline-flex items-center bg-amber-700 text-white px-8 py-3 rounded-md hover:bg-amber-800 transition-colors">
          <span>Shop Collection</span>
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
}