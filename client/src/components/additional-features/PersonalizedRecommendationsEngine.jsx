// components/PersonalizedRecommendationsEngine.js
import React, { useState, useEffect } from "react";
import ProductCard from "../common/ProductCard";

function PersonalizedRecommendationsEngine() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Simulate an API call to fetch personalized recommendations based on user preferences
    setTimeout(() => {
      setRecommendations([
        {
          id: 301,
          name: "Personalized Product 1",
          price: "$69.99",
          image: "/personalized1.jpg",
        },
        {
          id: 302,
          name: "Personalized Product 2",
          price: "$89.99",
          image: "/personalized2.jpg",
        },
        {
          id: 303,
          name: "Personalized Product 3",
          price: "$79.99",
          image: "/personalized3.jpg",
        },
      ]);
    }, 1000);
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Recommended For You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recommendations.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PersonalizedRecommendationsEngine;
