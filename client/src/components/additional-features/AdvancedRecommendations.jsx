// components/AdvancedRecommendations.js
import React, { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";

export default function AdvancedRecommendations() {
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setRecommended([
        {
          id: 201,
          name: "Advanced Rec 1",
          price: "$59.99",
          image: "https://picsum.photos/seed/advanced1/400/400",
        },
        {
          id: 202,
          name: "Advanced Rec 2",
          price: "$69.99",
          image: "https://picsum.photos/seed/advanced2/400/400",
        },
        {
          id: 203,
          name: "Advanced Rec 3",
          price: "$79.99",
          image: "https://picsum.photos/seed/advanced3/400/400",
        },
        {
          id: 204,
          name: "Advanced Rec 4",
          price: "$89.99",
          image: "https://picsum.photos/seed/advanced4/400/400",
        },
      ]);
    }, 1000);
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Advanced Recommendations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recommended.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

//AdvancedRecommendations;
