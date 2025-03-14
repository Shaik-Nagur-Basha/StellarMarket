import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import { motion } from "framer-motion";

const AdvancedRecommendations = () => {
  const [recommendations] = useState([
    {
      id: 1,
      name: "Space Pod Earbuds",
      confidence: 98,
      reason: "Based on your music preferences",
      image: faker.image.urlPicsumPhotos(800, 800),
      price: 149.99,
      category: "Audio",
    },
    {
      id: 2,
      name: "Quantum Smart Ring",
      confidence: 95,
      reason: "Similar to items you viewed",
      image: faker.image.urlPicsumPhotos(800, 800),
      price: 199.99,
      category: "Wearables",
    },
    {
      id: 3,
      name: "Stellar Fitness Tracker",
      confidence: 92,
      reason: "Matches your activity profile",
      image: faker.image.urlPicsumPhotos(800, 800),
      price: 129.99,
      category: "Fitness",
    },
  ]);

  useEffect(() => {
    // Animate confidence bars
    const bars = document.querySelectorAll(".confidence-bar");
    bars.forEach((bar) => {
      const confidence = bar.getAttribute("data-confidence");
      setTimeout(() => {
        bar.style.width = `${confidence}%`;
      }, 300);
    });

    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".recommendation-card").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            AI-Powered Recommendations
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Personalized suggestions based on your preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="recommendation-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
                    {item.confidence}% Match
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-3">
                  <span className="text-xs font-medium text-blue-500 dark:text-blue-400">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {item.reason}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.confidence}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="confidence-bar h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      data-confidence={item.confidence}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    ${item.price}
                  </span>
                  <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedRecommendations;
