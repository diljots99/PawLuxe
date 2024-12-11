import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl text-white mb-4">PawLuxe</h3>
            <p className="text-sm">Elevating pet accessories to an art form.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-500">About Us</a></li>
              <li><a href="#" className="hover:text-amber-500">Collections</a></li>
              <li><a href="#" className="hover:text-amber-500">Care Guide</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-500">Contact</a></li>
              <li><a href="#" className="hover:text-amber-500">Shipping</a></li>
              <li><a href="#" className="hover:text-amber-500">Returns</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-500"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-amber-500"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-amber-500"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} PawLuxe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}