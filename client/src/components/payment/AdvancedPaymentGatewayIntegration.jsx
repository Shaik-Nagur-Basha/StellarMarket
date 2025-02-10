// components/AdvancedPaymentGatewayIntegration.js
import React, { useState, useEffect } from "react";

export default function AdvancedPaymentGatewayIntegration() {
  const [paymentStatus, setPaymentStatus] = useState("");
  const [paymentHistory, setPaymentHistory] = useState([]);

  const processPayment = () => {
    setPaymentStatus("Processing payment...");
    // Simulate API call delay
    setTimeout(() => {
      setPaymentStatus("Payment successful!");
      // Simulate adding a new payment to history
      setPaymentHistory((prevHistory) => [
        {
          id: Date.now(),
          amount: "$99.99",
          date: new Date().toLocaleDateString(),
          status: "Completed",
        },
        ...prevHistory,
      ]);
    }, 2000);
  };

  // Simulate fetching existing payment history on mount
  useEffect(() => {
    setTimeout(() => {
      setPaymentHistory([
        { id: 1, amount: "$49.99", date: "01/15/2025", status: "Completed" },
        { id: 2, amount: "$79.99", date: "02/10/2025", status: "Completed" },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Advanced Payment Integration
        </h1>
        <button
          onClick={processPayment}
          className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 mb-4"
        >
          Process Payment
        </button>
        {paymentStatus && (
          <p className="text-center text-xl mb-4">{paymentStatus}</p>
        )}
        <h2 className="text-2xl font-bold mb-4">Payment History</h2>
        {paymentHistory.length === 0 ? (
          <p className="text-center text-gray-600">
            Loading payment history...
          </p>
        ) : (
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Amount</th>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((payment) => (
                <tr key={payment.id}>
                  <td className="px-4 py-2 border">{payment.id}</td>
                  <td className="px-4 py-2 border">{payment.amount}</td>
                  <td className="px-4 py-2 border">{payment.date}</td>
                  <td className="px-4 py-2 border">{payment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

//AdvancedPaymentGatewayIntegration;
