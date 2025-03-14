import React, { useState } from "react";
import { motion } from "framer-motion";

const shippingMethods = [
  { id: "standard", name: "Standard Shipping", price: 5.99, days: "5-7" },
  { id: "express", name: "Express Shipping", price: 12.99, days: "2-3" },
  { id: "overnight", name: "Overnight Shipping", price: 24.99, days: "1" },
];

export default function ShippingCalculator() {
  const [formData, setFormData] = useState({
    zipCode: "",
    weight: "",
    method: "standard",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateShipping = (method) => {
    const basePrice = shippingMethods.find((m) => m.id === method).price;
    const weight = parseFloat(formData.weight) || 0;
    return (basePrice + weight * 0.5).toFixed(2);
  };

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Shipping Calculator
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Get accurate shipping estimates for your order
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Zip Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Enter zip code"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Package Weight (lbs)
                </label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Enter weight"
                />
              </div>
            </div>

            <div className="space-y-4">
              {shippingMethods.map((method) => (
                <label
                  key={method.id}
                  className={`block relative p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                    formData.method === method.id
                      ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                      : "border-gray-200 dark:border-slate-600 hover:border-purple-200 dark:hover:border-purple-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="method"
                    value={method.id}
                    checked={formData.method === method.id}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {method.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {method.days} business days
                      </p>
                    </div>
                    <div className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                      ${calculateShipping(method.id)}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
