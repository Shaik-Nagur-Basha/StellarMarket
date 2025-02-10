// components/QuickView.js
import React from "react";
import Modal from "./Modal";

export default function QuickView({ isOpen, onClose, product }) {
  if (!product) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded"
          />
        </div>
        <div className="md:w-1/2 md:pl-6">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-xl text-gray-700 mb-4">{product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </Modal>
  );
}

//QuickView;
