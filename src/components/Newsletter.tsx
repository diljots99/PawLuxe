import React from 'react';

export default function Newsletter() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">Join Our Exclusive Circle</h2>
          <p className="text-gray-600 mb-8">Be the first to receive updates on new collections and exclusive offers.</p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}