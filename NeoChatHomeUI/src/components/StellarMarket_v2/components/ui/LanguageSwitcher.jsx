// components/LanguageSwitcher.js
import React, { useState, useRef, useEffect } from "react";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
];

export default function LanguageSwitcher({ isScrolled }) {
  const [isOpened, setIsOpened] = useState(false);
  const dropdownRef = useRef(null);
  // Replace this line:
  // const { currentLanguage, setLanguage } = useContext(LanguageContext);

  // With these mock values:
  const mockLanguageContext = {
    currentLanguage: "en",
    setLanguage: (langCode) => {
      console.log(`Language changed to: ${langCode}`);
      // You can add local state management here if needed
    },
  };

  const { currentLanguage, setLanguage } = mockLanguageContext;

  const currentLang =
    languages.find((lang) => lang.code === currentLanguage) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpened(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    setIsOpened(false);
  };

  return (
    <div className="relative max-sm:hidden" ref={dropdownRef}>
      <button
        onClick={() => setIsOpened(!isOpened)}
        className={`${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80"
            : "bg-transparent"
        } flex border-0 items-center space-x-2 px-3 py-2 rounded-lg backdrop-blur-sm text-gray-700 dark:text-gray-300 transition-all duration-200`}
        aria-label="Select language"
      >
        <span className="text-xl" role="img" aria-label={currentLang.name}>
          {currentLang.flag}
        </span>
        <span className="hidden sm:inline-block font-medium">
          {currentLang.name}
        </span>
        <svg
          className={`h-5 w-5 transform transition-transform duration-200 ${
            isOpened ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpened && (
        <div className="absolute mt-2 right-0 w-48 rounded-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-glass border border-gray-200 dark:border-gray-700 overflow-hidden z-50 animate-slide-down">
          <div className="max-h-60 overflow-y-auto">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors ${
                  currentLanguage === lang.code
                    ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                <span className="text-xl" role="img" aria-label={lang.name}>
                  {lang.flag}
                </span>
                <span className="font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
