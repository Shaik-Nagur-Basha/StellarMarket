// components/AdvancedSearch.js
import React, { useState } from "react";

const dummyProducts = [
  {
    id: 1,
    name: "Product 1",
    description: "This is a high-quality product",
    price: "$49.99",
    image: "https://picsum.photos/seed/advsearch1/200/200",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This product is affordable and durable",
    price: "$39.99",
    image: "https://picsum.photos/seed/advsearch2/200/200",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Premium product with excellent features",
    price: "$59.99",
    image: "https://picsum.photos/seed/advsearch3/200/200",
  },
];

export default function AdvancedSearch() {
  const [query, setQuery] = useState("");
  const filteredProducts = dummyProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Advanced Search</h1>
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-blue-500 font-semibold mt-2">{product.price}</p>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-600 col-span-full">
            No products match your search.
          </p>
        )}
      </div>
    </div>
  );
}

//AdvancedSearch;
