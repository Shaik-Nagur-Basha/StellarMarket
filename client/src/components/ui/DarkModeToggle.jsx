// components/DarkModeToggle.js
import React, { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedPreference = localStorage.getItem('darkMode');
    if (storedPreference) {
      setDarkMode(storedPreference === 'true');
      if (storedPreference === 'true') {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 dark:text-white"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;
