import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

const heroProducts = [
  {
    id: 1,
    name: "Premium Collection",
    image:
      "https://m.media-amazon.com/images/G/31/img25/Newlaunches/978x900_today_live._CB549732867_.gif",
  },
  {
    id: 2,
    name: "New Arrivals",
    image:
      "https://m.media-amazon.com/images/G/31/img24/newlaunches/978-X-900-CATEGORY-HEADPHONES-FEB-HOLI._CB548713484_.gif",
  },
  {
    id: 3,
    name: "Best Sellers",
    image:
      "https://m.media-amazon.com/images/G/31/img24/newlaunches/978X900_bolut_live._SS900_QL85_.jpg",
  },
];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroProducts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative lg:min-h-[calc(100vh-4rem)] overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary-500/20 backdrop-blur-sm"
            style={{
              width: Math.random() * 100 + 50 + "px",
              height: Math.random() * 100 + 50 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              transform: `translate(-50%, -50%) translateY(${scrollY * 0.2}px)`,
              transition: "transform 0.1s linear",
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="block text-gray-700 dark:text-gray-300">
                Discover the
              </span>
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
                Future of Shopping
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
              Experience next-generation e-commerce with AI-powered
              recommendations, AR product visualization, and seamless checkout.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="
                px-8 py-4 bg-primary-500 text-white rounded-xl
                font-semibold hover:bg-primary-600
                transform hover:scale-105
                transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
              "
              >
                Shop Now
              </button>
              <button
                className="
                px-8 py-4 border-2 border-gray-900 dark:border-white
                text-gray-900 dark:text-white rounded-xl
                font-semibold hover:bg-gray-900 hover:text-white
                dark:hover:bg-white dark:hover:text-gray-900
                transform hover:scale-105
                transition-all duration-300
              "
              >
                Learn More
              </button>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              {[
                { icon: "🚀", text: "Fast Delivery" },
                { icon: "🔒", text: "Secure Payments" },
                { icon: "💎", text: "Premium Quality" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-1">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {heroProducts.map((product, index) => (
              <div
                key={product.id}
                className={`
                  absolute inset-0 transition-all duration-700
                  ${
                    index === currentSlide
                      ? "opacity-100 transform translate-x-0"
                      : "opacity-0 transform translate-x-full"
                  }
                `}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[6/3]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {product.name}
                    </h3>
                    <button className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors duration-300">
                      View Collection
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Slide Controls */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-300
                    ${
                      index === currentSlide
                        ? "w-8 bg-primary-500"
                        : "bg-gray-400 hover:bg-gray-600"
                    }
                  `}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      {/* <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 fill-current text-white dark:text-gray-900"
          viewBox="0 0 1440 74"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,37 C240,37 480,0 720,0 C960,0 1200,37 1440,37 L1440,74 L0,74 Z" />
        </svg>
      </div> */}
    </div>
  );
}
