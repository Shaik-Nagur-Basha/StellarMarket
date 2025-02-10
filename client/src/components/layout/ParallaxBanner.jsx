// components/ParallaxBanner.js
import React from 'react';

function ParallaxBanner({ imageUrl, title, subtitle }) {
  return (
    <section
      className="h-96 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})`, backgroundAttachment: 'fixed' }}
    >
      <div className="bg-black bg-opacity-40 p-6 rounded-lg text-center">
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-xl text-white">{subtitle}</p>
      </div>
    </section>
  );
}

export default ParallaxBanner;
