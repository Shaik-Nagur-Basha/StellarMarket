import React from "react";
import { useTheme } from "../hooks/useTheme";
import { faker } from "@faker-js/faker";

export default function Navbar() {
  const [darkMode, setDarkMode] = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent hover:from-blue-500 hover:to-purple-600 transition-all duration-300">
              Stellar Market
            </h1>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className="p-2.5 rounded-lg bg-gray-100 dark:bg-slate-700 transition-all duration-300"
            >
              {darkMode ? (
                <svg
                  className="w-5 h-5 text-yellow-500 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 12h.01m0 0h-.01m0 0a4 4 0 110-8 4 4 0 010 8z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-slate-700 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646"
                  />
                </svg>
              )}
            </button>

            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300">
              <span className="sr-only">Notifications</span>
              <div className="relative">
                <svg
                  className="w-6 h-6 text-gray-600 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">
                  3
                </span>
              </div>
            </button>

            <button className="relative group">
              <img
                src={faker.image.urlPicsumPhotos(64, 64)}
                alt="User profile"
                className="w-8 h-8 rounded-full ring-2 ring-purple-500 hover:ring-4 transition-all duration-300"
              />
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <a
                  href="#profile"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                  Profile
                </a>
                <a
                  href="#settings"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                  Settings
                </a>
                <a
                  href="#logout"
                  className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                  Logout
                </a>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
