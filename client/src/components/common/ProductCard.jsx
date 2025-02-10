// components/ProductCard.js
import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-48 object-cover transform transition duration-300 hover:scale-110"
          src={product.image}
          alt={product.name}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
          <span className="text-white text-lg font-semibold opacity-0 hover:opacity-100 transition duration-300">
            View Details
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{product.name}</h3>
        <p className="mt-2 text-gray-600">{product.price}</p>
        <button className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
