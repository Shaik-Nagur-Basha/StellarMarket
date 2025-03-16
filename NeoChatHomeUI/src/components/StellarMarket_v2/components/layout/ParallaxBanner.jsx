// components/ParallaxBanner.js
import React, { useEffect, useState } from "react";

export default function ParallaxBanner({
  imageUrl,
  title,
  subtitle,
  className = "",
}) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setOffset(window.pageYOffset * 0.5);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`relative h-[50vh] min-h-[400px] overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transform transition-transform duration-100"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transform: `translateY(${offset}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold dark:text-white mb-4 animate-slide-up">
          {title}
        </h2>
        <p className="text-xl sm:text-2xl dark:text-white/90 max-w-2xl animate-slide-up delay-100">
          {subtitle}
        </p>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}
