// components/AdvancedRecommendations.js
import React, { useEffect, useState } from "react";
import ProductCard from "./common/ProductCard";

function AdvancedRecommendations() {
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    // Simulate an API call for recommended products
    setTimeout(() => {
      setRecommended([
        {
          id: 201,
          name: "Advanced Rec 1",
          price: "$59.99",
          image: "/advanced1.jpg",
        },
        {
          id: 202,
          name: "Advanced Rec 2",
          price: "$69.99",
          image: "/advanced2.jpg",
        },
        {
          id: 203,
          name: "Advanced Rec 3",
          price: "$79.99",
          image: "/advanced3.jpg",
        },
        {
          id: 204,
          name: "Advanced Rec 4",
          price: "$89.99",
          image: "/advanced4.jpg",
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

export default AdvancedRecommendations;
