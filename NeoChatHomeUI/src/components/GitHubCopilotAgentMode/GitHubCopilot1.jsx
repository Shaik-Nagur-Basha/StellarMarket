import { faker } from "@faker-js/faker";
import React, { useState } from "react";
import { FaUser, FaMoon, FaInfoCircle, FaSearch } from "react-icons/fa";

export default function GitHubCopilot1() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen flex flex-col font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900">
        <header className="sticky top-0 bg-white dark:bg-gray-800 shadow z-50">
          <nav className="flex items-center justify-between px-4 md:px-8 py-4">
            <div className="flex items-center space-x-2">
              <img
                src={faker.image.urlPicsumPhotos(64, 64)}
                alt="NeoChat Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">NeoChat</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
                />
                <FaSearch className="absolute right-3 top-3 text-gray-500 dark:text-gray-400" />
              </div>
              <button
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                title="Profile"
              >
                <FaUser />
              </button>
              <button
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                title="Dark Mode"
                onClick={toggleDarkMode}
              >
                <FaMoon />
              </button>
              <button
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                title="About"
              >
                <FaInfoCircle />
              </button>
            </div>
          </nav>
        </header>
        <main className="flex-grow">
          <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Welcome to NeoChat
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Connect with your friends, join groups, and explore channels and
                communities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-2">Users</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Manage your contacts and stay connected with your friends.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-2">Groups</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Join groups to collaborate and share ideas with others.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-2">Channels</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Explore channels to stay updated with the latest news and
                  discussions.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-2">Communities</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Discover communities to connect with people who share your
                  interests.
                </p>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-gray-900 text-gray-300 py-8 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-white font-bold text-lg mb-1">NeoChat</h3>
              <p className="text-sm text-gray-400">
                © 2025 NeoChat. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="/privacy"
                className="hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="/contact"
                className="hover:text-white transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
