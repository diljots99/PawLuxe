import React from 'react';
import TestimonialCard from './TestimonialCard';
import { type Testimonial } from '../../types/testimonial';
import { PenLine } from 'lucide-react';

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    petName: 'Luna',
    petBreed: 'French Bulldog',
    location: 'New York, NY',
    ownerName: 'Sarah Mitchell',
    testimonialText: 'The Italian leather collar is absolutely stunning! Luna gets compliments everywhere we go, and the quality is exceptional. Worth every penny for my fashionable girl.',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80',
    date: '2024-03-01',
    products: [
      {
        id: 'p1',
        name: 'Tuscany Leather Collar',
        rating: 5,
        price: 129.99,
        link: '#'
      }
    ]
  },
  {
    id: '2',
    petName: 'Winston',
    petBreed: 'Golden Retriever',
    location: 'Los Angeles, CA',
    ownerName: 'James Wilson',
    testimonialText: 'The memory foam bed has transformed Winston\'s sleep. The quality is outstanding, and the design perfectly matches our modern home decor.',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80',
    date: '2024-02-28',
    products: [
      {
        id: 'p2',
        name: 'Luxury Memory Foam Bed',
        rating: 5,
        price: 249.99,
        link: '#'
      }
    ]
  },
  {
    id: '3',
    petName: 'Bella',
    petBreed: 'Persian Cat',
    location: 'Miami, FL',
    ownerName: 'Emma Rodriguez',
    testimonialText: 'The designer carrier is perfect for our vet visits and weekend trips. Bella loves it, and I appreciate how it combines functionality with style.',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80',
    date: '2024-02-25',
    products: [
      {
        id: 'p3',
        name: 'Signature Travel Carrier',
        rating: 4,
        price: 189.99,
        link: '#'
      }
    ]
  }
];

export default function TestimonialsGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">
            Happy Customers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our luxury pet accessories have enhanced the lives of our
            beloved four-legged friends and their discerning owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center space-x-2 bg-amber-700 text-white px-8 py-3 rounded-md hover:bg-amber-800 transition-colors">
            <PenLine className="w-5 h-5" />
            <span>Submit Your Story</span>
          </button>
        </div>
      </div>
    </section>
  );
}