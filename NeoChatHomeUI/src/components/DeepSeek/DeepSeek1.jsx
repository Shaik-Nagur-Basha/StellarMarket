import React, { useEffect, useState } from "react";

export default function DeepSeek1() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = ["Featured Group 1", "Featured Group 2", "Featured Group 3"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17v-2h2v2h-2zm2.49-4.11l-.4.41c-1.03 1.03-1.06 1.77-1.06 2.7h-2v-.3c0-1.99.73-3.25 2.11-4.63.7-.7 1.26-1.26 1.26-2.37 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.76-1.14 3.19-2.51 3.89z" />
            </svg>
            <span className="text-xl font-bold text-gray-800">NeoChat</span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="#features"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Features
            </a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
              Sign In
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Connect. Collaborate. Communicate.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join communities, connect with peers, and collaborate in real-time
            with NeoChat's powerful platform.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Explore Communities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Users", "Groups", "Channels"].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item}
              </h3>
              <p className="text-gray-600">
                Discover and connect with {item.toLowerCase()} across various
                interests and topics.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-2xl bg-gray-100 p-8">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full text-center p-6">
                  <h3 className="text-2xl font-bold text-gray-800">{slide}</h3>
                  <p className="text-gray-600 mt-2">
                    Join this active community today
                  </p>
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeSlide ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">NeoChat</h4>
              <p className="text-gray-400">Connecting communities worldwide</p>
            </div>
            {["About", "Support", "Legal", "Social"].map((section) => (
              <div key={section}>
                <h5 className="font-semibold mb-4">{section}</h5>
                <ul className="space-y-2 text-gray-400">
                  {["Item 1", "Item 2", "Item 3"].map((item) => (
                    <li
                      key={item}
                      className="hover:text-blue-400 cursor-pointer transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
