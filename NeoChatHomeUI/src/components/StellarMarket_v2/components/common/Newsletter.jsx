import React, { useState } from "react";
import "../../styles/utilities.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Wave Background */}
      <div className="wave-divider">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
          className="text-primary/10"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="dark:text-white">Stay Updated with</span>
            <span className="text-gradient-animate ml-2">StellarMarket</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 animate-float">
            Subscribe to our newsletter for exclusive deals, new arrivals, and
            insider updates
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-6 py-4 rounded-full dark:text-white bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                disabled={status === "loading" || status === "success"}
              />

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`absolute right-2 top-2 bottom-2 px-6 rounded-full font-medium transition-all duration-300 ${
                  status === "success"
                    ? "bg-success dark:text-white"
                    : status === "loading"
                    ? "bg-gray-400 dark:text-white cursor-wait"
                    : "bg-primary dark:text-white hover:bg-primary-dark"
                } ripple`}
              >
                {status === "success" ? (
                  <span className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Subscribed!</span>
                  </span>
                ) : status === "loading" ? (
                  <span className="flex items-center space-x-2">
                    <svg
                      className="animate-spin w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <span>Subscribing...</span>
                  </span>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
          </form>

          {/* Benefits */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Early Access",
                description:
                  "Be the first to know about new products and exclusive offers",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Special Discounts",
                description: "Enjoy subscriber-only discounts and promotions",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                title: "Trending Updates",
                description:
                  "Stay updated with the latest trends and fashion tips",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover-lift"
              >
                <div className="flex-shrink-0 p-3 bg-primary/10 text-primary rounded-lg dark:text-white">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Newsletter;
