// components/ParallaxBanner.js
import React from "react";

export default function ParallaxBanner({ imageUrl, title, subtitle }) {
  return (
    <div
      className="relative h-64 bg-cover bg-center"
      style={{
        backgroundImage: `url(${
          imageUrl || "https://picsum.photos/seed/parallax/1920/600"
        })`,
      }}
    >
      <div className="bg-black bg-opacity-40 p-6 rounded-lg text-center">
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-xl text-white">{subtitle}</p>
      </div>
    </div>
  );
}

//ParallaxBanner;
