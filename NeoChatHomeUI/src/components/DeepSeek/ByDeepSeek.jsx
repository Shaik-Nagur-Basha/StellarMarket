import React from "react";

export default function ByDeepSeek() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const slides = ["Featured Group 1", "Featured Group 2", "Featured Group 3"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <svg
                className="w-8 h-8 text-indigo-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-900">
                NeoChat
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#users"
                className="text-gray-600 hover:text-indigo-600 transition-colors flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                Users
              </a>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Sign In
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Connect. Collaborate. Communicate.
          </h1>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto" id="users">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Explore Communities
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="ml-4 text-xl font-semibold">Community {item}</h3>
              </div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 bg-white px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-96">
            {slides.map((slide, index) => (
              <div
                key={slide}
                className={`absolute inset-0 transition-opacity duration-300 ${
                  index === activeSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="bg-indigo-100 h-full rounded-xl flex items-center justify-center text-2xl font-bold">
                  {slide}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeSlide ? "bg-indigo-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
