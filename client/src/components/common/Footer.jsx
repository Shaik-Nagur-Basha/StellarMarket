// components/Footer.js
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-600">
          &copy; 2025 Your Company Name. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

//Footer;
