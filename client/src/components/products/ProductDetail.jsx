// components/ProductDetail.js
import React from "react";
import { useParams } from "react-router-dom";

const productData = {
  1: {
    id: 1,
    name: "Product 1",
    price: "$49.99",
    image: "https://picsum.photos/seed/product1/800/600",
    description:
      "This is an amazing product with incredible features and premium quality.",
  },
  2: {
    id: 2,
    name: "Product 2",
    price: "$39.99",
    image: "https://picsum.photos/seed/product2/800/600",
    description:
      "Experience the best quality with our product. It comes with outstanding performance.",
  },
  // Add additional product details as needed...
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = productData[id];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="relative">
          <img
            className="w-full h-96 object-cover transform transition duration-500 hover:scale-105"
            src={product.image}
            alt={product.name}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition duration-500 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold opacity-0 hover:opacity-100 transition duration-500">
              {product.name}
            </h2>
          </div>
        </div>
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-4">{product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

//ProductDetail;
