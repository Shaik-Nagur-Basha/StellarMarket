import React, { useState, useRef } from "react";
import { faker } from "@faker-js/faker";
// import "../../styles/utilities.css";

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    rating: 4.8,
    reviews: 128,
    category: "Electronics",
    isNew: true,
  },
  {
    id: 2,
    name: "Designer Watch Collection",
    price: 499.99,
    rating: 4.9,
    reviews: 89,
    category: "Fashion",
    isNew: true,
  },
  {
    id: 3,
    name: "Smart Home Hub",
    price: 199.99,
    rating: 4.7,
    reviews: 256,
    category: "Electronics",
  },
  {
    id: 4,
    name: "Luxury Skincare Set",
    price: 149.99,
    rating: 4.9,
    reviews: 167,
    category: "Beauty",
  },
  {
    id: 5,
    name: "Modern Coffee Table",
    price: 399.99,
    rating: 4.6,
    reviews: 94,
    category: "Home",
  },
].map((product) => ({
  ...product,
  image: faker.image.avatar(),
  thumbnail: faker.image.avatar(),
}));

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image */}
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        {product.isNew && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-white text-sm font-medium rounded-full glass-effect">
            New Arrival
          </div>
        )}
      </div>

      {/* Product Info Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div
          className={`transform transition-all duration-300 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="glass-effect rounded-xl p-4 space-y-3">
            <div className="flex items-center space-x-2">
              <img
                src={product.thumbnail}
                alt={`${product.category} icon`}
                className="w-8 h-8 rounded-full border border-white/20"
              />
              <span className="text-sm text-white/80">{product.category}</span>
            </div>

            <h3 className="text-lg font-bold text-white">{product.name}</h3>

            <div className="flex justify-between items-center">
              <div className="text-white">
                <span className="text-lg font-bold">${product.price}</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400">★</span>
                <span className="text-sm text-white/80">
                  {product.rating} ({product.reviews})
                </span>
              </div>
            </div>

            <button className="w-full py-2 bg-white/90 hover:bg-white text-gray-900 rounded-lg font-medium transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -400 : 400;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setScrollPosition(container.scrollLeft + scrollAmount);
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-8">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-2">
              <span className="text-gradient">Featured</span> <span className="dark:text-white">Products</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Discover our collection of premium products
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full border dark:border-gray-200 border-gray-500 hover:scale-105 dark:text-white hover:border-primary hover:text-primary transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full border dark:border-gray-200 border-gray-500 hover:scale-105 dark:text-white hover:border-primary hover:text-primary transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Products Carousel */}
        <div
          ref={containerRef}
          className="flex space-x-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-[300px] snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
