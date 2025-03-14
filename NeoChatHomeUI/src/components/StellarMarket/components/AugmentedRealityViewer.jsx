import React, { useState } from "react";
import { motion } from "framer-motion";
import { faker } from "@faker-js/faker";

const arProducts = [
  {
    id: 1,
    name: "Modern Sofa",
    description: "Experience how this elegant sofa fits in your space",
    thumbnail: faker.image.urlPicsumPhotos(1350, 1080),
    video:
      "https://joy1.videvo.net/videvo_files/video/free/2019-09/large_watermarked/190828_27_SuperTrees_HD_17_preview.mp4",
    modelUrl: "/models/sofa.glb",
    category: "Furniture",
  },
  {
    id: 2,
    name: "Pendant Light",
    description: "Visualize this stunning light fixture in your room",
    thumbnail: faker.image.urlPicsumPhotos(1350, 1080),
    video:
      "https://joy1.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190301_1_25_11_preview.mp4",
    modelUrl: "/models/light.glb",
    category: "Lighting",
  },
  {
    id: 3,
    name: "Dining Table",
    description: "See how this table complements your dining space",
    thumbnail: faker.image.urlPicsumPhotos(1350, 1080),
    video:
      "https://joy1.videvo.net/videvo_files/video/free/2019-05/large_watermarked/190516_06_AZ-LAGOA-4K_06_preview.mp4",
    modelUrl: "/models/table.glb",
    category: "Furniture",
  },
];

export default function AugmentedRealityViewer() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleTryInAR = (product) => {
    // In a real implementation, this would launch the AR experience
    console.log("Launching AR for:", product.name);
  };

  return (
    <section id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
            AR Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Try Before You Buy
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Experience our products in your space with augmented reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {arProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-xl dark:shadow-slate-700/30 transition-all duration-300 overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                {selectedProduct?.id === product.id ? (
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={product.video}
                  />
                ) : (
                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-200 mb-4">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                    {product.category}
                  </span>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                  >
                    View Details
                  </button>
                </div>

                <button
                  onClick={() => handleTryInAR(product)}
                  className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Try in AR</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80"
          >
            <div className="relative w-full max-w-4xl bg-white dark:bg-slate-800 rounded-xl p-8">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={selectedProduct.video}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {selectedProduct.description}
                  </p>
                  <div className="space-y-4">
                    <button
                      onClick={() => handleTryInAR(selectedProduct)}
                      className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200"
                    >
                      Launch AR Experience
                    </button>
                    <button className="w-full py-3 border border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors duration-200">
                      View 3D Model
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
