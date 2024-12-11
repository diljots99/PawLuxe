import React from 'react';
import { FEATURED_COLLECTIONS } from '../data/products';
import { ArrowRight } from 'lucide-react';

export default function FeaturedCollections() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">
            Featured Collections
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of premium pet accessories,
            crafted with the finest materials and unparalleled attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_COLLECTIONS.map((collection) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden rounded-lg shadow-md"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="font-serif text-xl mb-1">{collection.name}</h3>
                <p className="text-sm text-gray-200 mb-2">
                  {collection.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">
                    From ${collection.price}
                  </span>
                  <button className="inline-flex items-center text-sm hover:text-amber-400 transition-colors">
                    <span>Shop Now</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}