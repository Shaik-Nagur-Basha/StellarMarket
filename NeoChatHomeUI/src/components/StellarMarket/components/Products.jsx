import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import { motion, AnimatePresence } from "framer-motion";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products] = useState([
    {
      id: 1,
      name: "Galaxy Watch",
      price: 299.99,
      image: faker.image.urlPicsumPhotos(800, 800),
      category: "Wearables",
      rating: 4.8,
      stock: 15,
    },
    {
      id: 2,
      name: "Nebula Headphones",
      price: 199.99,
      image: faker.image.urlPicsumPhotos(800, 800),
      category: "Audio",
      rating: 4.6,
      stock: 8,
    },
    {
      id: 3,
      name: "Quantum Earbuds",
      price: 149.99,
      image: faker.image.urlPicsumPhotos(800, 800),
      category: "Audio",
      rating: 4.9,
      stock: 20,
    },
    {
      id: 4,
      name: "Smart Ring",
      price: 179.99,
      image: faker.image.urlPicsumPhotos(800, 800),
      category: "Wearables",
      rating: 4.7,
      stock: 12,
    },
  ]);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="products" className="py-16 bg-gradient-to-br from-gray-50 via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Featured Products
          </h2>
          <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
            Discover our latest cutting-edge technology
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 animate-pulse" />
                  <div className="p-5 space-y-4">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl focus-within:shadow-xl dark:shadow-blue-500/10 dark:hover:shadow-blue-500/20 dark:focus-within:shadow-blue-500/20 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1 focus-within:-translate-y-1"
                  tabIndex={0}
                  role="article"
                  aria-label={`${product.name} - $${product.price}`}
                >
                  <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 animate-pulse" />
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      onLoad={(e) =>
                        e.target.parentElement
                          .querySelector(".animate-pulse")
                          ?.remove()
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute inset-x-0 bottom-0 p-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating)
                                  ? "text-yellow-400"
                                  : "text-gray-300 dark:text-gray-600"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-sm text-white">
                            {product.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button className="p-2 rounded-full bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="mb-3">
                      <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                        {product.category}
                      </span>
                      {product.stock <= 10 && (
                        <span className="inline-block ml-2 px-2 py-1 text-xs font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 rounded-full">
                          Only {product.stock} left
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {product.name}
                    </h3>

                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        ${product.price}
                      </span>
                    </div>

                    <button
                      className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600 text-white rounded-lg transform transition-all duration-200 hover:shadow-lg focus:shadow-lg hover:shadow-blue-500/25 focus:shadow-blue-500/25 dark:hover:shadow-blue-500/20 dark:focus:shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Products;
