import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Card.module.css";

export default function Home({ contentArray }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [loadingStates, setLoadingStates] = useState({});

  // Content metadata for the cards
  const contentMetadata = contentArray.map((content) => ({
    title: content.title,
    madeBy: content.madeBy,
    type: content.type,
    media: `../public/${content.type}s/${
      content.title + (content.type === "image" ? ".png" : ".mp4")
    }`,
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

  const handleMediaLoad = (itemId) => {
    // Add a small delay to ensure smoother transition
    setTimeout(() => {
      setLoadingStates((prev) => ({
        ...prev,
        [itemId]: false,
      }));
    }, 300);
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
      acc[item.title] = true;
      return acc;
    }, {});
    setLoadingStates(initialLoadingStates);
  }, [contentArray]);

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-gradient">
            Welcome to AI's Responses
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
                <div
                  key={index}
                  className={`${styles.card} group`}
                  style={{
                    "--gradient-color": gradientColor,
                  }}
                >
                  <div className={`${styles.cardGlow} ${randomGradient}`} />

                  <div className={styles.cardContent}>
                    <div className={styles.mediaContainer}>
                      <div
                        className={`${styles.cardMedia} ${
                          loadingStates[item.title] ? styles.loading : ""
                        }`}
                      >
                        {loadingStates[item.title] && (
                          <div className={styles.skeleton} />
                        )}
                        {item.type === "video" ? (
                          <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            onLoadedData={() => handleMediaLoad(item.title)}
                            onError={() => handleMediaError(item.title)}
                          >
                            <source src={item.media} type="video/mp4" />
                          </video>
                        ) : (
                          <img
                            src={item.media}
                            alt={item.title}
                            loading="lazy"
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
                    </div>

                    <button
                      onClick={() => redirectTo(`/${item.title}`)}
                      className={`${styles.cardButton} ${randomGradient}`}
                    >
                      <div className={styles.buttonContent}>
                        <span>{item.title}</span>
                        <svg
                          className={styles.buttonIcon}
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
