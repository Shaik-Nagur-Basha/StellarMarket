// components/LanguageSwitcher.js
import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

function LanguageSwitcher() {
  const { language, switchLanguage } = useContext(LanguageContext);

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => switchLanguage("en")}
        className={`px-2 py-1 rounded ${
          language === "en"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage("es")}
        className={`px-2 py-1 rounded ${
          language === "es"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => switchLanguage("fr")}
        className={`px-2 py-1 rounded ${
          language === "fr"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        FR
      </button>
    </div>
  );
}

export default LanguageSwitcher;
