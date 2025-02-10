// components/Hero.js
import React from "react";

export default function Hero() {
  return (
    <section
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')",
      }}
    >
      <div className="text-center text-white backdrop-blur-sm bg-black bg-opacity-30 p-6 rounded-lg">
        <h1 className="text-5xl font-bold mb-4 animate-[fadeInDown_1s_ease-in-out]">
          Discover Our Exclusive Products
        </h1>
        <p className="text-xl mb-8 animate-[fadeInUp_1s_ease-in-out]">
          Experience quality like never before.
        </p>
        <a
          href="#products"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}

//Hero;
