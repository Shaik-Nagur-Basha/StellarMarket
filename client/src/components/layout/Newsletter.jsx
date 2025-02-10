// components/Newsletter.js
import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Dummy subscription logic
    setSubmitted(true);
  };

  return (
    <section className="py-12 bg-blue-500">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
        {submitted ? (
          <p className="text-xl">Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-3 rounded-md mb-4 sm:mb-0 sm:mr-4 text-gray-800"
              required
            />
            <button type="submit" className="bg-white text-blue-500 font-bold p-3 rounded-md hover:bg-gray-200 transition duration-300">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
