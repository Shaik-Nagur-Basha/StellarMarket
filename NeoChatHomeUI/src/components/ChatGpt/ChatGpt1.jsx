import React, { useState } from "react";

export default function ChatGpt1() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } min-h-screen transition-colors duration-300`}
    >
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 shadow-md">
        <div className="flex items-center space-x-4">
          <div className="font-bold text-xl">NeoChat</div>
          {/* Search container */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            />
            <svg
              className="w-5 h-5 absolute top-2 right-3 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M16.65 16.65a7.5 7.5 0 111.414-1.414l4.35 4.35z"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-3 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
            About
          </button>
          <button className="px-3 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
            Profile
          </button>
          <button
            onClick={toggleDarkMode}
            className="px-3 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-8">
        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Welcome to NeoChat</h1>
          <p className="text-lg mb-4">
            A next-generation chat application designed for real-time messaging,
            groups, channels, and communities.
          </p>
        </section>

        {/* Advanced UI Element: Inverted Border Card */}
        <section className="mb-8">
          <div className="border-4 border-dashed border-gray-400 p-4 rounded-lg">
            <div className="bg-white dark:bg-gray-800 p-6 border-4 border-dashed border-gray-200 dark:border-gray-600 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">Featured Chat</h2>
              <p className="mb-4">
                Experience seamless, secure, and dynamic communication with
                NeoChat.
              </p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Additional Sections: Users, Groups, Channels, Communities */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2">Users</h3>
              <p>Connect with friends and family instantly.</p>
            </div>
            <div className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2">Groups</h3>
              <p>Join groups to share your interests.</p>
            </div>
            <div className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2">Channels</h3>
              <p>Follow channels for the latest news and updates.</p>
            </div>
            <div className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold mb-2">Communities</h3>
              <p>
                Build communities and stay connected with like-minded people.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
