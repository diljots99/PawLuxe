import React from 'react';
import Carousel from '../ui/Carousel';
import TestimonialSlide from './TestimonialSlide';
import { TESTIMONIALS } from '../../data/testimonials';

export default function TestimonialsCarousel() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif text-gray-900 mb-4">
          Happy Customers
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto px-4">
          Discover how our luxury pet accessories have enhanced the lives of our
          beloved four-legged friends and their discerning owners.
        </p>
      </div>

      <Carousel autoRotateInterval={5000}>
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialSlide
            key={testimonial.id}
            {...testimonial}
          />
        ))}
      </Carousel>
    </section>
  );
}