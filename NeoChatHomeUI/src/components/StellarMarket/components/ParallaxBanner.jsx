import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./ParallaxBanner.module.css";

const ParallaxBanner = () => {
  useEffect(() => {
    const handleParallax = () => {
      const parallaxElements = document.querySelectorAll(".parallax");
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute("data-speed");
        const yPos = -(window.pageYOffset * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className={`absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl ${styles["animate-blob"]}`}
          ></div>
          <div
            className={`absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl ${styles["animate-blob"]} ${styles["animation-delay-2000"]}`}
          ></div>
          <div
            className={`absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl ${styles["animate-blob"]} ${styles["animation-delay-4000"]}`}
          ></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-32 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left z-10"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Welcome to
            <span
              className={`block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ${styles["gradient-text"]}`}
            >
              StellarMarket
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
            Experience revolutionary shopping with AI-powered recommendations,
            AR try-ons, and seamless checkout. Welcome to the next generation of
            e-commerce.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 ${styles["hover-lift"]}`}
            >
              Start Shopping
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 ${styles.glass} ${styles["hover-lift"]}`}
            >
              Watch Demo
            </motion.button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2"
            >
              <div className={`p-2 rounded-full ${styles.glass}`}>
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <span className="text-gray-300">Secure Shopping</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center space-x-2"
            >
              <div className={`p-2 rounded-full ${styles.glass}`}>
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-gray-300">24/7 Support</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center space-x-2"
            >
              <div className={`p-2 rounded-full ${styles.glass}`}>
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-gray-300">Quality Guarantee</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative z-10"
        >
          <div className="relative w-full max-w-lg mx-auto">
            <div
              className={`absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 ${styles["animate-blob"]}`}
            ></div>
            <div
              className={`absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 ${styles["animate-blob"]} ${styles["animation-delay-2000"]}`}
            ></div>
            <div
              className={`absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 ${styles["animate-blob"]} ${styles["animation-delay-4000"]}`}
            ></div>
            <motion.div
              className={`relative rounded-lg shadow-2xl ${styles.shimmerWrapper} group`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <img
                src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9"
                alt="Smart Device Showcase"
                className={`relative rounded-lg w-full h-full object-cover ${styles.glowingImage}`}
              />
              <div className={styles.shimmerEffect}></div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className={`absolute -right-4 top-1/4 transform translate-x-1/2 rounded-lg p-4 ${styles.glowingCard} ${styles.floatingCard}`}
              >
                {/* <div className="relative z-10 backdrop-blur-lg px-3 py-2 rounded-lg"> */}
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium text-white whitespace-nowrap">
                      Live Analytics
                    </span>
                  </div>
                  <div className={styles.glowPulse}></div>
                {/* </div> */}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className={`absolute -left-4 bottom-1/4 transform -translate-x-1/2 rounded-lg p-4 ${styles.glowingCard} ${styles.floatingCard}`}
              >
                {/* <div className="relative z-10 backdrop-blur-lg px-3 py-2 rounded-lg"> */}
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                    <span className="text-sm font-medium text-white whitespace-nowrap">
                      AI Enhanced
                    </span>
                  </div>
                  <div className={styles.glowPulse}></div>
                {/* </div> */}
              </motion.div>

              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 mix-blend-overlay pointer-events-none"></div>
            </motion.div>

            {/* Floating decoration elements with shimmer */}
            <div
              className={`absolute -top-8 -right-8 w-16 h-16 rounded-full ${styles.shimmerWrapper} ${styles.floatingCard}`}
              style={{
                animationDelay: "0.5s",
                background:
                  "radial-gradient(circle at center, rgba(168,85,247,0.2), transparent)",
              }}
            >
              {/* <div className={styles.shimmerEffect}></div> */}
            </div>
            <div
              className={`absolute -bottom-8 -left-8 w-20 h-20 rounded-full ${styles.shimmerWrapper} ${styles.floatingCard}`}
              style={{
                animationDelay: "1.5s",
                background:
                  "radial-gradient(circle at center, rgba(99,102,241,0.2), transparent)",
              }}
            >
              {/* <div className={styles.shimmerEffect}></div> */}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 md:bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="hidden md:block text-gray-400 text-sm mb-2">
            Scroll to explore
          </span>
          <div className={`scroll-indicator ${styles.scrollIndicator}`}>
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ParallaxBanner;
