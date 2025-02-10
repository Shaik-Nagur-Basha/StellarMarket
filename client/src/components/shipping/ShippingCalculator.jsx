// components/ShippingCalculator.js
import React, { useState } from "react";

export default function ShippingCalculator() {
  const [weight, setWeight] = useState("");
  const [destination, setDestination] = useState("");
  const [cost, setCost] = useState(null);

  const calculateShipping = (e) => {
    e.preventDefault();
    // Simulate shipping cost calculation:
    const baseCost = 5.0;
    const weightCost = parseFloat(weight) * 0.5;
    const destinationMultiplier =
      destination.toLowerCase() === "international" ? 2 : 1;
    const totalCost = (baseCost + weightCost) * destinationMultiplier;
    setCost(totalCost.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-6 my-6">
      <h2 className="text-2xl font-bold mb-4">Shipping Calculator</h2>
      <form onSubmit={calculateShipping}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Package Weight (kg)
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Destination</label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Destination</option>
            <option value="domestic">Domestic</option>
            <option value="international">International</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded transition duration-300"
        >
          Calculate Shipping
        </button>
      </form>
      {cost && (
        <p className="mt-4 text-xl text-center">
          Estimated Shipping Cost: ${cost}
        </p>
      )}
    </div>
  );
}

//ShippingCalculator;
