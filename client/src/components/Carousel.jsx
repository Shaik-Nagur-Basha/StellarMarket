// components/Carousel.js
import React, { useState, useEffect } from 'react';

function Carousel({ items, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items, interval]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="min-w-full relative">
            <img src={item.image} alt={item.name} className="w-full h-96 object-cover" />
            <div className="absolute bottom-8 left-8 bg-black bg-opacity-50 p-4 rounded">
              <h2 className="text-2xl text-white font-bold">{item.name}</h2>
              <p className="text-lg text-white">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
