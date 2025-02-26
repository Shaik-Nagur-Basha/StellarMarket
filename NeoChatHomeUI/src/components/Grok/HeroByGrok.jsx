// components/Hero.js
import React from "react";

export default function HeroByGrok() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Connect. Collaborate. Communicate.
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Join NeoChat to chat and collaborate seamlessly with your community.
        </p>

        <a
          href="/signup"
          className="px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition duration-200 transform hover:scale-105"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
