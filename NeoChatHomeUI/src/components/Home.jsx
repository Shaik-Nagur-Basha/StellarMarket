import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { images, videos } from "../assets/media";
import styles from "./Card.module.css";

export default function Home({ contentArray }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [loadingStates, setLoadingStates] = useState({});
  const [mediaLoadStartTimes, setMediaLoadStartTimes] = useState({});
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();
  const lastCardRef = useRef();

  // Content metadata for the cards - Updated to use imported media
  const contentMetadata = contentArray.map((content) => ({
    title: content.title,
    madeBy: content.madeBy,
    type: content.type,
    media:
      content.type === "image" ? images[content.title] : videos[content.title],
  }));

  // Gradients array for random application
  const gradients = [
    "bg-gradient-to-tl from-[#a7a0b7] via-[#fba45c] to-[#2abed0]",
    "bg-gradient-to-tr from-[#0cd0ca] via-[#d8a274] to-[#8468aa]",
    "bg-gradient-to-tl from-[#3eeef7] via-[#c4d05a] to-[#e782af]",
    "bg-gradient-to-r from-blue-500 to-indigo-600",
    "bg-gradient-to-r from-green-500 to-teal-500",
    "bg-gradient-to-r from-purple-500 to-pink-500",
    "bg-gradient-to-r from-red-500 to-orange-500",
    "bg-gradient-to-r from-yellow-500 to-amber-500",
    "bg-gradient-to-r from-teal-500 to-cyan-500",
    "bg-gradient-to-r from-gray-500 to-gray-700",
    "bg-gradient-to-r from-pink-500 to-red-500",
    "bg-gradient-to-r from-indigo-500 to-blue-500",
    "bg-gradient-to-r from-lime-500 to-green-500",
    "bg-gradient-to-r from-orange-500 to-yellow-500",
  ];

  const redirectTo = (path) => {
    navigate(path);
  };

  const handleMediaLoadStart = (itemId) => {
    // Record the start time when media starts loading
    setMediaLoadStartTimes((prev) => ({
      ...prev,
      [itemId]: Date.now(),
    }));

    // Ensure loading state is true when loading starts
    setLoadingStates((prev) => ({
      ...prev,
      [itemId]: true,
    }));
  };

  const handleMediaLoad = (itemId) => {
    const startTime = mediaLoadStartTimes[itemId];
    const loadTime = Date.now() - startTime;

    // Ensure minimum spinner display time of 500ms for better UX
    const minimumSpinnerTime = 500;
    const remainingTime = Math.max(0, minimumSpinnerTime - loadTime);

    setTimeout(() => {
      setLoadingStates((prev) => ({
        ...prev,
        [itemId]: false,
      }));
    }, remainingTime);
  };

  const handleMediaError = (itemId) => {
    console.error(`Failed to load media for ${itemId}`);
    setLoadingStates((prev) => ({
      ...prev,
      [itemId]: false,
    }));
  };

  useEffect(() => {
    // Initialize loading states for all items
    const initialLoadingStates = contentArray.reduce((acc, item) => {
      acc[item.title] = true; // Start with loading true
      return acc;
    }, {});
    setLoadingStates(initialLoadingStates);

    // Initialize media load start times
    const initialLoadStartTimes = contentArray.reduce((acc, item) => {
      acc[item.title] = Date.now();
      return acc;
    }, {});
    setMediaLoadStartTimes(initialLoadStartTimes);
  }, [contentArray]);

  // Add intersection observer for infinite scroll
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setLoading(true);
          // Simulate loading more content
          setTimeout(() => {
            setLoading(false);
            setHasMore(false); // Disable after first load for demo
          }, 1500);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,rgba(99,102,241,0.05)_30%,transparent_70%)] animate-[rotate_20s_linear_infinite]"></div>

      {/* Enhanced mesh gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#312e81_0%,transparent_50%)] opacity-40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#4f46e5_0%,transparent_50%)] opacity-40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(at_bottom_left,#7e22ce_0%,transparent_50%)] opacity-40"></div>

      {/* Animated gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-indigo-500/10 to-transparent animate-pulse-slow"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent bg-[length:200%_100%] animate-bg-shimmer"></div>

      {/* Floating orbs with enhanced glow */}
      <div className="absolute top-[10%] left-[15%] w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-float mix-blend-plus-lighter"></div>
      <div
        className="absolute bottom-[20%] right-[15%] w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl animate-float mix-blend-plus-lighter"
        style={{ animationDelay: "-3s" }}
      ></div>
      <div
        className="absolute top-[40%] left-[60%] w-64 h-64 bg-indigo-500/5 rounded-full filter blur-3xl animate-float mix-blend-plus-lighter"
        style={{ animationDelay: "-5s" }}
      ></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] animate-[gridMove_20s_linear_infinite]"></div>

      {/* Animated dot matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] opacity-10"></div>

      {/* Enhanced glowing accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-75"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-75"></div>

      {/* Content container */}
      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        <div className="max-w-[2000px] mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Welcome to{" "}
            </span>
            <span
              className={`inline-block ${
                gradients[Math.floor(Math.random() * gradients.length)]
              } text-transparent bg-clip-text`}
              style={{
                filter: "drop-shadow(1px 1px 2px black)",
              }}
            >
              AI's Responses
            </span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {contentMetadata.map((item, index) => {
              const randomGradient =
                gradients[Math.floor(Math.random() * gradients.length)];
              const gradientColor = randomGradient.includes("from-[")
                ? randomGradient.match(/from-\[(.*?)\]/)[1]
                : randomGradient.includes("from-gray-")
                ? "#6B7280"
                : randomGradient.includes("from-blue-")
                ? "#3B82F6"
                : randomGradient.includes("from-green-")
                ? "#22C55E"
                : randomGradient.includes("from-purple-")
                ? "#A855F7"
                : randomGradient.includes("from-red-")
                ? "#EF4444"
                : randomGradient.includes("from-yellow-")
                ? "#EAB308"
                : randomGradient.includes("from-teal-")
                ? "#14B8A6"
                : randomGradient.includes("from-pink-")
                ? "#EC4899"
                : randomGradient.includes("from-indigo-")
                ? "#6366F1"
                : randomGradient.includes("from-lime-")
                ? "#84CC16"
                : randomGradient.includes("from-orange-")
                ? "#F97316"
                : "#ffffff";

              return (
                <motion.div
                  key={index}
                  ref={
                    index === contentMetadata.length - 1 ? lastElementRef : null
                  }
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`${styles.card} group card-animate transform transition-all duration-300 hover:-translate-y-1`}
                  style={{
                    "--gradient-color": gradientColor,
                  }}
                >
                  <div className={`${styles.cardGlow} ${randomGradient}`} />

                  <div
                    className={`${styles.cardContent} bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/10 border border-gray-700/50 transition-all duration-300`}
                  >
                    <div className={styles.mediaContainer}>
                      <div className={`${styles.cardMedia} relative group`}>
                        <div
                          className={`${
                            loadingStates[item.title]
                              ? "opacity-0"
                              : "opacity-100"
                          } transition-opacity duration-300`}
                        >
                          {item.type === "video" ? (
                            <video
                              key={item.media}
                              autoPlay
                              muted
                              loop
                              playsInline
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                              onLoadStart={() =>
                                handleMediaLoadStart(item.title)
                              }
                              onLoadedData={() => handleMediaLoad(item.title)}
                              onError={() => handleMediaError(item.title)}
                            >
                              <source src={item.media} type="video/mp4" />
                            </video>
                          ) : (
                            <img
                              key={item.media}
                              src={item.media}
                              alt={item.title}
                              loading="lazy"
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                              onLoadStart={() =>
                                handleMediaLoadStart(item.title)
                              }
                              onLoad={() => handleMediaLoad(item.title)}
                              onError={() => handleMediaError(item.title)}
                            />
                          )}
                          <div className={styles.cardCaption}>
                            <p className="text-xs sm:text-sm text-gray-200">
                              {item.madeBy}
                            </p>
                          </div>
                        </div>

                        {loadingStates[item.title] && (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm">
                            <div className="relative w-14 h-14">
                              {/* Outer ring */}
                              <div className="absolute inset-0 rounded-full border-[3px] border-gray-700"></div>

                              {/* Spinning gradient border */}
                              <div className="absolute inset-0 rounded-full border-[3px] border-transparent animate-[spin_1.5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,transparent_20%,theme(colors.blue.400)_50%,theme(colors.purple.400)_80%,transparent_100%)] [mask:linear-gradient(white,transparent_50%)]"></div>

                              {/* Inner glow */}
                              <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-pulse blur-sm"></div>

                              {/* Center dot */}
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-ping"></div>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                    </div>

                    <button
                      onClick={() => redirectTo(`/${item.title}`)}
                      className={`${styles.cardButton} ${randomGradient} bg-gradient-to-r hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300`}
                    >
                      <div className={styles.buttonContent}>
                        <span className="font-medium">{item.title}</span>
                        <svg
                          className={`${styles.buttonIcon} transform group-hover:translate-x-1 transition-transform`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <AnimatePresence>
            {loading && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex justify-center items-center mt-8 gap-3"
              >
                <div className="relative">
                  <div className="w-14 h-14">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-[3px] border-gray-200 dark:border-gray-700"></div>

                    {/* Spinning gradient border */}
                    <div className="absolute inset-0 rounded-full border-[3px] border-transparent animate-[spin_1.5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,transparent_20%,theme(colors.blue.500)_50%,theme(colors.purple.500)_80%,transparent_100%)] [mask:linear-gradient(white,transparent_50%)] dark:bg-[conic-gradient(from_0deg,transparent_0%,transparent_20%,theme(colors.blue.400)_50%,theme(colors.purple.400)_80%,transparent_100%)]"></div>

                    {/* Inner glow */}
                    <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-400/10 dark:to-purple-400/10 animate-pulse blur-sm"></div>

                    {/* Center dot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 animate-ping"></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-gray-700 dark:text-gray-200 font-medium">
                    Loading more content
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Please wait...
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
