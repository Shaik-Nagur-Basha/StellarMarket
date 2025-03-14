import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAnimating(true);

    // Simulated API call
    setTimeout(() => {
      setStatus("success");
      setIsAnimating(false);
      setEmail("");

      // Reset success message after 3 seconds
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-br from-blue-500 to-purple-600"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with StellarMarket
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Subscribe to our newsletter for exclusive deals, new product
            launches, and tech insights.
          </p>

          <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
            <div className="flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-6 py-3 rounded-l-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                disabled={isAnimating}
                className={`px-8 py-3 rounded-r-full bg-white text-blue-600 font-semibold hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200 ${
                  isAnimating ? "opacity-75 cursor-wait" : ""
                }`}
              >
                {isAnimating ? (
                  <div className="flex items-center justify-center">
                    <div className="relative w-6 h-6">
                      <div className="absolute inset-0 rounded-full border-2 border-white border-opacity-20"></div>
                      <div className="absolute inset-0 rounded-full border-2 border-blue-600 border-l-transparent animate-spin"></div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 animate-pulse blur-sm"></div>
                    </div>
                  </div>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>

            {status === "success" && (
              <div className="absolute -bottom-12 left-0 right-0 text-center text-white bg-gradient-to-r from-green-500 to-emerald-500 bg-opacity-90 rounded-full py-2 px-4 transform animate-fade-in-up shadow-lg shadow-green-500/20">
                Thanks for subscribing! 🎉
              </div>
            )}
          </form>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Exclusive Deals</h3>
              <p className="text-sm opacity-90">
                Get first access to our best offers
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Product Updates</h3>
              <p className="text-sm opacity-90">
                Stay informed about new features
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tech Insights</h3>
              <p className="text-sm opacity-90">
                Deep dives into our technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
