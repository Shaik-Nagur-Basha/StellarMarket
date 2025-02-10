// components/LoyaltyProgram.js
import React, { useState, useEffect } from "react";

export default function LoyaltyProgram() {
  const [points, setPoints] = useState(0);
  const [rewards, setRewards] = useState([
    { id: 1, name: "10% Discount Coupon", requiredPoints: 100 },
    { id: 2, name: "Free Shipping", requiredPoints: 200 },
    { id: 3, name: "Exclusive Product Access", requiredPoints: 300 },
  ]);

  // Simulate fetching user's loyalty points (dummy value)
  useEffect(() => {
    // In a real application, fetch from an API
    setTimeout(() => {
      setPoints(150);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Loyalty Program</h1>
        <p className="text-xl text-center mb-4">
          Your current points: <span className="font-bold">{points}</span>
        </p>
        <h2 className="text-2xl font-bold mb-4">Available Rewards</h2>
        <ul>
          {rewards.map((reward) => (
            <li key={reward.id} className="border p-4 rounded-lg mb-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold">{reward.name}</span>
                <span className="text-sm text-gray-600">
                  {reward.requiredPoints} pts
                </span>
              </div>
              <button
                className="mt-2 w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300"
                disabled={points < reward.requiredPoints}
              >
                {points >= reward.requiredPoints
                  ? "Redeem Reward"
                  : "Not Enough Points"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
