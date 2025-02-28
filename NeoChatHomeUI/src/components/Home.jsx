import React from "react";

export default function Home({ content }) {
  // Array of gradient background classes.
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

  // Updated array of icon JSX elements (8 icons).
  const icons = [
    <svg
      className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:rotate-90"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>,
    <svg
      className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:rotate-180"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>,
    <svg
      className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:scale-125"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2l7 10-7 10-7-10 7-10z"
      />
    </svg>,
    <svg
      className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:scale-110"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>,
    <svg
      className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:rotate-45"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
      />
    </svg>,
    <svg
      className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:scale-125"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
      />
    </svg>,
    <svg
      className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:rotate-180"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C8.67 6.165 8 7.388 8 8.75V14.16c0 .538-.214 1.055-.595 1.435L6 17h5m4 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>,
    <svg
      className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:rotate-90"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>,
  ];

  const links = [...content.map((item) => "/" + item)];

  // Create an array for buttons 1 to 21.
  const buttons = Array.from({ length: content.length }, (_, i) => i + 1);

  const redirectTo = (url) => {
    window.location.href = url;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {buttons.map((num) => {
          // Cycle through gradients and icons based on index.
          const gradientClass =
            gradients[Math.floor(Math.random() * gradients.length)];
          const icon = icons[Math.floor(Math.random() * icons.length)];

          return (
            <button
              key={num}
              onClick={() => redirectTo(`${links[num - 1]}`)}
              className={`group flex items-center justify-center px-6 py-4 ${gradientClass} text-white font-semibold rounded-lg shadow-xl transition transform duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2`}
            >
              {icon}
              {content[num - 1]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
