import React, { useEffect, useState } from "react";
// import "../../styles/utilities.css";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="relative h-[80vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1573855619003-97b4799dcd8b"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-setting-up-a-fashion-photoshoot-34421-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
            <span className="text-gradient">Stellar</span>Market
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl mx-auto">
            Discover a universe of exceptional products curated just for you
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto w-full">
            <div className="relative glass-effect rounded-full overflow-hidden p-1">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full bg-transparent px-6 py-3 text-white placeholder-white/70 outline-none border-0 focus:ring-0"
              />
              <button className="absolute right-1 top-1 bottom-1 px-6 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Featured Categories */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {["Electronics", "Fashion", "Home", "Beauty"].map(
              (category, index) => (
                <button
                  key={category}
                  style={{
                    animationDelay: `${index * 100 + 500}ms`,
                  }}
                  className="px-6 py-2 rounded-full glass-effect hover:bg-white/20 transition-all duration-300 animate-fade-in"
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
