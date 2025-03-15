import React from "react";
import { faker } from "@faker-js/faker";
import "../../styles/utilities.css";

const categories = [
  {
    name: "Electronics",
    description: "Latest gadgets and tech",
    video:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1200",
    products: 1234,
  },
  {
    name: "Fashion",
    description: "Trending styles",
    video:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200",
    products: 2341,
  },
  {
    name: "Home & Living",
    description: "Modern living essentials",
    video:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200",
    products: 1876,
  },
  {
    name: "Beauty",
    description: "Premium beauty products",
    video:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200",
    products: 987,
  },
];

const CategoryCard = ({ category, index }) => {
  const thumbnailImage = faker.image.avatar();

  return (
    <div
      className="group relative overflow-hidden rounded-2xl hover-lift"
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* Video Background
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        >
          <source src={category.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div> */}

      {/* // Update the video background section in CategoryCard component */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={category.video}
          alt={category.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-6 h-72 flex flex-col justify-end text-white">
        <div className="flex items-center space-x-3 mb-3">
          <img
            src={thumbnailImage}
            alt={category.name}
            className="w-12 h-12 rounded-full border-2 border-white/50"
          />
          <div>
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
              {category.name}
            </h3>
            <p className="text-sm text-white/80">{category.description}</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-white/70">
            {category.products.toLocaleString()} products
          </span>
          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-colors backdrop-blur-sm">
            Explore →
          </button>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/25 transition-all duration-300 rounded-2xl" />
      </div>
    </div>
  );
};

const FeaturedCategories = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Featured</span> <span className="dark:text-white">Categories</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our curated collection of premium products across various
            categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.name}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center space-x-2 px-8 py-3 dark:text-white dark:hover:bg-gray-800 hover:bg-gray-100 font-semibold rounded-full hover-lift transition-all">
            <span>View All Categories</span>
            <svg
              className="w-4 h-4"
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
    </section>
  );
};

export default FeaturedCategories;
