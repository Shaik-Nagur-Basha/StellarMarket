import React from "react";
import { faker } from "@faker-js/faker";

export default function Cart() {
  return (
    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Shopping Cart
        </h3>
        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm rounded-lg">
          3 items
        </span>
      </div>

      <div className="space-y-4 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-200 dark:scrollbar-track-slate-700">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="group flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors duration-300"
          >
            <div className="relative flex-shrink-0">
              <img
                src={faker.image.urlPicsumPhotos(64, 64)}
                alt={`Cart item ${item}`}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <button
                className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-90 transition-all duration-300"
                aria-label="Remove item"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate group-hover:text-purple-500 transition-colors duration-300">
                {faker.commerce.productName()}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Qty: 1</p>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                ${(Math.random() * 100).toFixed(2)}
              </span>
              <div className="flex items-center space-x-2 mt-1">
                <button className="w-6 h-6 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-gray-600 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <button className="w-6 h-6 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-gray-600 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500 dark:text-gray-400">Subtotal</span>
          <span className="font-medium text-gray-900 dark:text-white">
            $299.00
          </span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500 dark:text-gray-400">Shipping</span>
          <span className="font-medium text-gray-900 dark:text-white">
            $19.99
          </span>
        </div>
        <div className="border-t border-gray-200 dark:border-slate-700 pt-4 flex justify-between items-center">
          <span className="text-base font-medium text-gray-900 dark:text-white">
            Total
          </span>
          <span className="text-lg font-semibold text-purple-600 dark:text-purple-400">
            $318.99
          </span>
        </div>

        <button className="w-full py-3 px-4 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transform hover:-translate-y-0.5 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
