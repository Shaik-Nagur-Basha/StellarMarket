// components/DarkModeToggle.js
import React, { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for system preference and saved preference
    const isDark =
      localStorage.getItem("darkMode") === "true" ||
      (!("darkMode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDarkMode(isDark);
    updateTheme(isDark);
  }, []);

  const updateTheme = (isDark) => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("darkMode", isDark);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    updateTheme(newDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="relative inline-flex h-9 w-16 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      aria-label="Toggle dark mode"
    >
      <span className="sr-only">Toggle dark mode</span>
      <span
        className={`${
          darkMode ? "translate-x-8" : "translate-x-1"
        } inline-block h-7 w-7 transform rounded-full bg-white shadow-lg ring-0 transition-transform duration-300 ease-in-out`}
      >
        {darkMode ? (
          <svg
            className="h-7 w-7 p-1 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        ) : (
          <svg
            className="h-7 w-7 p-1 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )}
      </span>
    </button>
  );
}
