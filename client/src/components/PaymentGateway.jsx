// components/PaymentGateway.js
import React, { useState } from 'react';

function PaymentGateway() {
  const [status, setStatus] = useState('');
  
  const handlePayment = () => {
    setStatus('Processing payment...');
    // Simulate a delay for payment processing
    setTimeout(() => {
      setStatus('Payment successful!');
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-6 my-6">
      <h2 className="text-2xl font-bold mb-4">Payment Gateway</h2>
      <button 
        onClick={handlePayment}
        className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded transition duration-300"
      >
        Process Payment
      </button>
      {status && <p className="mt-4 text-xl text-center">{status}</p>}
    </div>
  );
}

export default PaymentGateway;
