import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="rounded-2xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm shadow-glass p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive deals, new product
              launches, and insider-only content.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  disabled={status === "loading"}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className={`inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-medium text-white transition-all duration-200 ${
                  status === "loading"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary-500 hover:bg-primary-600"
                }`}
              >
                {status === "loading" ? (
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
          </form>

          {/* Status messages */}
          <div className="mt-4 text-center">
            {status === "success" && (
              <p className="text-green-600 dark:text-green-400 animate-fade-in">
                Thanks for subscribing! Check your email for confirmation.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 dark:text-red-400 animate-fade-in">
                Oops! Something went wrong. Please try again.
              </p>
            )}
          </div>

          {/* Privacy notice */}
          <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            By subscribing, you agree to our{" "}
            <a
              href="/privacy"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="/terms"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              Terms of Service
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
