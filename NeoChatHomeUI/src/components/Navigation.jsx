import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
import { motion } from "framer-motion";

export default function Navigation() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [hideTimeout, setHideTimeout] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
  }, [hideTimeout]);

  const handleMouseLeave = useCallback(() => {
    const timeout = setTimeout(() => {
      setIsHovered(false);
    }, 2000);
    setHideTimeout(timeout);
  }, []);

  useEffect(() => {
    return () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [hideTimeout]);

  const generateStandaloneHTML = async () => {
    setIsDownloading(true);
    try {
      // Get all CSS (from stylesheets and inline styles)
      const stylesheets = Array.from(document.styleSheets);
      let cssText = "";

      for (const sheet of stylesheets) {
        try {
          const rules = Array.from(sheet.cssRules);
          cssText += rules.map((rule) => rule.cssText).join("\n");
        } catch (e) {
          // Handle CORS errors for external stylesheets
          if (sheet.href) {
            try {
              const response = await fetch(sheet.href);
              const text = await response.text();
              cssText += text;
            } catch (fetchError) {
              console.error("Could not fetch stylesheet:", fetchError);
            }
          }
        }
      }

      // Get the current page HTML
      const htmlContent = document.documentElement.outerHTML;

      // Create the standalone HTML with embedded styles
      const standaloneHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Standalone Page</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/framer-motion@10.16.4/dist/framer-motion.dev.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      ${cssText}
    </style>
</head>
<body>
    ${document.body.innerHTML}
    <script>
      // Initialize any necessary JavaScript
      document.addEventListener('DOMContentLoaded', function() {
        // Your initialization code here
      });
    </script>
</body>
</html>`;

      // Create and download the file
      const blob = new Blob([standaloneHTML], { type: "text/html" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "standalone-page.html";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error generating standalone HTML:", error);
    } finally {
      // Add a small delay before removing the spinner for better UX
      setTimeout(() => {
        setIsDownloading(false);
      }, 500);
    }
  };

  return (
    <div
      className={styles.navWrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.menuIcon}>
        <div className={styles.menuIconInner}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={styles.navButtonsContainer}>
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className={`${styles.navButton}`}
          aria-label="Go back"
          data-tooltip="Back"
          style={{ "--btn-index": 0 }}
        >
          <svg
            className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Home button */}
        <button
          onClick={() => navigate("/")}
          className={`${styles.navButton}`}
          aria-label="Go home"
          data-tooltip="Home"
          style={{ "--btn-index": 1 }}
        >
          <svg
            className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </button>

        {/* Forward button */}
        <button
          onClick={() => navigate(1)}
          className={`${styles.navButton}`}
          aria-label="Go forward"
          data-tooltip="Forward"
          style={{ "--btn-index": 2 }}
        >
          <svg
            className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Download button */}
        <motion.button
          onClick={generateStandaloneHTML}
          disabled={isDownloading}
          className={`${styles.navButton} relative`}
          aria-label="Download page"
          data-tooltip="Download"
          style={{ "--btn-index": 3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isDownloading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-5 h-5 relative">
                {/* Spinner ring */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-gray-300 animate-spin"></div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent animate-pulse bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"></div>
              </div>
            </div>
          ) : (
            <svg
              className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          )}
        </motion.button>
      </div>
    </div>
  );
}
