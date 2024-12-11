import React from 'react';
import { Crown, Menu, ShoppingBag } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Mobile menu button */}
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Crown className="h-8 w-8 text-amber-700" />
            <span className="text-2xl font-serif text-gray-900">PawLuxe</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-amber-700">Collections</a>
            <a href="#" className="text-gray-600 hover:text-amber-700">About</a>
            <a href="#" className="text-gray-600 hover:text-amber-700">Contact</a>
          </nav>

          {/* Cart */}
          <button className="relative">
            <ShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}