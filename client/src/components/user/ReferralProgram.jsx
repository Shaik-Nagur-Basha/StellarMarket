// components/ReferralProgram.js
import React, { useState, useEffect } from "react";

export default function ReferralProgram() {
  const [referralCode, setReferralCode] = useState("");

  useEffect(() => {
    // Simulate generating or fetching a unique referral code
    setTimeout(() => {
      setReferralCode("REF123XYZ");
    }, 500);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    alert("Referral code copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Referral Program
        </h1>
        <p className="text-center text-gray-700 mb-4">
          Share your unique referral code with your friends and earn rewards!
        </p>
        <div className="bg-gray-200 p-4 rounded text-center mb-4">
          <span className="font-mono text-xl">
            {referralCode || "Loading..."}
          </span>
        </div>
        <button
          onClick={copyToClipboard}
          className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Copy Referral Code
        </button>
      </div>
    </div>
  );
}
