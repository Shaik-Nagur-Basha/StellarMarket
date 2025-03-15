import React, { useState } from "react";
import { faker } from "@faker-js/faker";

const sampleProducts = [
  {
    id: 1,
    name: "Modern Sofa",
    description: "Elegant living room sofa with premium fabric",
    image: faker.image.urlPicsumPhotos({ width: 800, height: 600 }),
    ar_model: "https://example.com/models/sofa.glb",
    price: 999.99,
  },
  {
    id: 2,
    name: "Dining Table",
    description: "Contemporary wooden dining table",
    image: faker.image.urlPicsumPhotos({ width: 800, height: 600 }),
    ar_model: "https://example.com/models/table.glb",
    price: 599.99,
  },
  // Add more sample products as needed
];

export default function AugmentedRealityViewer() {
  const [selectedProduct, setSelectedProduct] = useState(sampleProducts[0]);
  const [isARMode, setIsARMode] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleRotation = () => {
    setRotation((prev) => (prev + 45) % 360);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 mb-4">
            Augmented Reality Viewer
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience our products in your space before you buy. Use AR
            technology to visualize how items will look in your environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Product View */}
          <div className="relative group">
            <div
              className={`
              relative aspect-square rounded-2xl overflow-hidden
              bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm
              shadow-glass border border-white/20 dark:border-gray-700/30
              transform transition-all duration-700
              ${isARMode ? "scale-[0.98] opacity-80" : "scale-100"}
            `}
            >
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className={`
                  w-full h-full object-cover
                  transform transition-transform duration-1000
                  ${isARMode ? "scale-110 blur-sm" : "scale-100"}
                `}
                style={{ transform: `rotate(${rotation}deg)` }}
              />

              {/* AR Overlay Effects */}
              {isARMode && (
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-2 opacity-50">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-20 h-20 border border-white/30 rounded-lg"
                        />
                      ))}
                    </div>
                  </div>

                  {/* AR Guide Lines */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0"
                      y1="50%"
                      x2="100%"
                      y2="50%"
                      stroke="white"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      opacity="0.3"
                    />
                    <line
                      x1="50%"
                      y1="0"
                      x2="50%"
                      y2="100%"
                      stroke="white"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      opacity="0.3"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <button
                onClick={() => setIsARMode(!isARMode)}
                className={`
                  px-6 py-3 rounded-full
                  backdrop-blur-sm shadow-lg
                  transition-all duration-300
                  ${
                    isARMode
                      ? "bg-primary-500 text-white"
                      : "bg-white/70 dark:bg-gray-800/70 text-gray-900 dark:text-white"
                  }
                `}
              >
                {isARMode ? "Exit AR Mode" : "Enter AR Mode"}
              </button>
              <button
                onClick={handleRotation}
                className="p-3 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-lg text-gray-900 dark:text-white transition-all duration-300"
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
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Product Selection */}
          <div className="space-y-6">
            <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-6 shadow-glass">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedProduct.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {selectedProduct.description}
              </p>
              <div className="text-3xl font-bold text-primary-500 dark:text-primary-400">
                ${selectedProduct.price.toFixed(2)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {sampleProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className={`
                    p-4 rounded-xl text-left transition-all duration-300
                    ${
                      selectedProduct.id === product.id
                        ? "bg-primary-500/10 border-2 border-primary-500"
                        : "bg-white/10 dark:bg-gray-800/10 border-2 border-transparent"
                    }
                  `}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-video object-cover rounded-lg mb-2"
                  />
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {product.name}
                  </h4>
                </button>
              ))}
            </div>

            <button className="w-full py-4 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
