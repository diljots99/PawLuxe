import React from 'react';
import StarRating from './StarRating';

interface TestimonialSlideProps {
  petName: string;
  petBreed: string;
  ownerName: string;
  rating: number;
  testimonialText: string;
  image: string;
}

export default function TestimonialSlide({
  petName,
  petBreed,
  ownerName,
  rating,
  testimonialText,
  image,
}: TestimonialSlideProps) {
  return (
    <div className="w-full flex-shrink-0 flex-grow-0" style={{ width: '100%' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img
                src={image}
                alt={`${petName} the ${petBreed}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <StarRating rating={rating} className="justify-center md:justify-start mb-4" />
            <blockquote className="text-xl text-gray-700 italic mb-6">
              "{testimonialText}"
            </blockquote>
            <div className="font-serif">
              <p className="text-2xl text-gray-900 mb-1">{petName}</p>
              <p className="text-lg text-gray-600 mb-2">{petBreed}</p>
              <p className="text-sm text-gray-500">- {ownerName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}