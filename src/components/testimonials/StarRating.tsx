import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  className?: string;
}

export default function StarRating({ rating, className = '' }: StarRatingProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? 'text-amber-400 fill-amber-400'
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}