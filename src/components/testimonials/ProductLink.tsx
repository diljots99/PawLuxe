import React from 'react';
import { type Product } from '../../types/testimonial';
import StarRating from './StarRating';

interface ProductLinkProps {
  product: Product;
}

export default function ProductLink({ product }: ProductLinkProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex-1">
        <a
          href={product.link}
          className="text-amber-700 hover:text-amber-800 font-medium"
        >
          {product.name}
        </a>
        <div className="flex items-center space-x-2">
          <StarRating rating={product.rating} />
          <span className="text-gray-600 text-sm">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}