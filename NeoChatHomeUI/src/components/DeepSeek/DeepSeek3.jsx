import { useState } from "react";

export default function DeepSeek3() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div
      className={`min-h-screen ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}
    >
      {/* Navbar */}
      <nav
        className={`sticky top-0 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg z-50`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span
                className={`text-2xl font-bold ${
                  darkMode ? "text-emerald-400" : "text-emerald-600"
                }`}
              >
                NeoChat
              </span>
            </div>

            {/* Search Container */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none ${
                    darkMode
                      ? "bg-gray-700 text-white focus:ring-2 focus:ring-emerald-400"
                      : "bg-gray-100 text-gray-900 focus:ring-2 focus:ring-emerald-500"
                  }`}
                />
              </div>
            </div>

            {/* Nav Buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${
                  darkMode
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {darkMode ? "🌞" : "🌙"}
              </button>

              <button
                className={`p-2 rounded-lg ${
                  darkMode
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Profile
              </button>

              <button
                className={`p-2 rounded-lg ${
                  darkMode
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                About
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Inverted Border Section */}
        <div
          className={`relative p-1 rounded-3xl ${
            darkMode
              ? "bg-gradient-to-r from-emerald-500 to-cyan-500"
              : "bg-gradient-to-r from-emerald-400 to-cyan-400"
          }`}
        >
          <div
            className={`relative rounded-2xl p-8 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h1
              className={`text-4xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Welcome to NeoChat
            </h1>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Secure, fast, and modern messaging experience
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {["Users", "Groups", "Channels", "Communities"].map((feature) => (
            <div
              key={feature}
              className={`p-6 rounded-xl transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-50"
              } shadow-lg hover:shadow-xl`}
            >
              <div
                className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center ${
                  darkMode
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "bg-emerald-500/20 text-emerald-600"
                }`}
              >
                <span className="text-2xl">💬</span>
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {feature}
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Connect with {feature.toLowerCase()} in real-time with
                end-to-end encryption
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
