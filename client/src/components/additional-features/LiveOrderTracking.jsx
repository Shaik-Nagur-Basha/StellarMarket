// components/LiveOrderTracking.js
import React, { useState, useEffect } from "react";

const dummyOrders = [
  { id: 1, status: "Processing", progress: 20 },
  { id: 2, status: "Shipped", progress: 60 },
  { id: 3, status: "Out for Delivery", progress: 80 },
];

export default function LiveOrderTracking() {
  const [orders, setOrders] = useState(dummyOrders);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrders((prevOrders) =>
        prevOrders.map((order) => {
          if (order.progress < 100) {
            const newProgress = Math.min(
              order.progress + Math.floor(Math.random() * 10),
              100
            );
            const newStatus = newProgress === 100 ? "Delivered" : order.status;
            return { ...order, progress: newProgress, status: newStatus };
          }
          return order;
        })
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Live Order Tracking
      </h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        {orders.map((order) => (
          <div key={order.id} className="mb-4">
            <h2 className="text-xl font-semibold">Order #{order.id}</h2>
            <p>Status: {order.status}</p>
            <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${order.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

//LiveOrderTracking;
