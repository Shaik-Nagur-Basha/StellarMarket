// components/ProductComparison.js
import React, { useState } from "react";
import ProductCard from "../common/ProductCard";

const dummyProducts = [
  {
    id: 1,
    name: "Product 1",
    price: "$49.99",
    features: ["Feature A", "Feature B", "Feature C"],
    image: "https://picsum.photos/seed/product1/400/400",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$39.99",
    features: ["Feature A", "Feature D", "Feature E"],
    image: "https://picsum.photos/seed/product2/400/400",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$59.99",
    features: ["Feature B", "Feature C", "Feature F"],
    image: "https://picsum.photos/seed/product3/400/400",
  },
];

export default function ProductComparison() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const toggleProduct = (product) => {
    if (selectedProducts.some((p) => p.id === product.id)) {
      setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Product Comparison
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {dummyProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => toggleProduct(product)}
            className={`cursor-pointer ${
              selectedProducts.some((p) => p.id === product.id)
                ? "border-4 border-blue-500"
                : ""
            }`}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      {selectedProducts.length > 0 ? (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Comparison Table</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Product</th>
                <th className="px-4 py-2 border">Price</th>
                <th className="px-4 py-2 border">Features</th>
              </tr>
            </thead>
            <tbody>
              {selectedProducts.map((product) => (
                <tr key={product.id}>
                  <td className="px-4 py-2 border">{product.name}</td>
                  <td className="px-4 py-2 border">{product.price}</td>
                  <td className="px-4 py-2 border">
                    <ul className="list-disc list-inside">
                      {product.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-600">
          Click on products above to compare them.
        </p>
      )}
    </div>
  );
}
