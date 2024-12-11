import React from 'react';
import { type Testimonial } from '../../types/testimonial';
import ProductLink from './ProductLink';
import { MapPin } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={testimonial.image}
          alt={`${testimonial.petName} using PawLuxe products`}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-serif text-xl text-gray-900">
              {testimonial.petName}
            </h3>
            <p className="text-gray-600">{testimonial.petBreed}</p>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            {testimonial.location}
          </div>
        </div>
        
        <blockquote className="text-gray-600 italic mb-6">
          "{testimonial.testimonialText}"
          <footer className="text-gray-500 text-sm mt-2 not-italic">
            - {testimonial.ownerName}
          </footer>
        </blockquote>

        <div className="border-t border-gray-100 pt-4">
          <h4 className="font-medium text-gray-900 mb-2">Featured Products:</h4>
          {testimonial.products.map((product) => (
            <ProductLink key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}