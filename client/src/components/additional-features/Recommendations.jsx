// components/Recommendations.js
import React from "react";
import ProductCard from "../common/ProductCard";

const recommendedProducts = [
  {
    id: 101,
    name: "Recommended 1",
    price: "$29.99",
    image: "https://picsum.photos/seed/rec1/400/400",
  },
  {
    id: 102,
    name: "Recommended 2",
    price: "$39.99",
    image: "https://picsum.photos/seed/rec2/400/400",
  },
  {
    id: 103,
    name: "Recommended 3",
    price: "$49.99",
    image: "https://picsum.photos/seed/rec3/400/400",
  },
];

export default function Recommendations() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recommendedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

//Recommendations;
