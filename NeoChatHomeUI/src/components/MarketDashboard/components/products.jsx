import React from "react";
import { faker } from "@faker-js/faker";

export default function ProductsSection({ className }) {
  return (
    <div
      className={`bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-xl p-6 ${className}`}
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Featured Products
        </h3>
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-sm rounded-lg bg-purple-500 hover:bg-purple-600 text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
            Add Product
          </button>
          <button className="px-4 py-2 text-sm rounded-lg border border-gray-200 dark:border-slate-600 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300">
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="group relative bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-xl dark:shadow-slate-700/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative pb-[100%] rounded-t-xl overflow-hidden">
              <img
                src={faker.image.urlPicsumPhotos(400, 400)}
                alt={`Product ${item}`}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <button className="px-3 py-2 bg-white/90 hover:bg-white text-sm rounded-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    Quick View
                  </button>
                  <button className="p-2 bg-white/90 hover:bg-white rounded-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                    <svg
                      className="w-5 h-5 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-1 group-hover:text-purple-500 transition-colors duration-300">
                Product {item}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {faker.commerce.productDescription()}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                  ${(Math.random() * 100).toFixed(2)}
                </span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-gray-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <nav className="flex items-center space-x-2" aria-label="Pagination">
          <button className="px-3 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-300">
            Previous
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`px-3 py-1 rounded-lg transition-colors duration-300 ${
                page === 1
                  ? "bg-purple-500 text-white"
                  : "hover:bg-gray-100 dark:hover:bg-slate-700"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="px-3 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-300">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
}
