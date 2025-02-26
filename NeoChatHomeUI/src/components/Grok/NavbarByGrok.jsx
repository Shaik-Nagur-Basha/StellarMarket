// components/Navbar.js
import React from "react";

export default function NavbarByGrok() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center">
        <a href="/" className="text-2xl font-bold text-blue-600">
          NeoChat
        </a>

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mt-2 sm:mt-0">
          <a
            href="/features"
            className="text-gray-600 hover:text-blue-600 transition duration-200"
          >
            Features
          </a>

          <a
            href="/pricing"
            className="text-gray-600 hover:text-blue-600 transition duration-200"
          >
            Pricing
          </a>

          <a
            href="/about"
            className="text-gray-600 hover:text-blue-600 transition duration-200"
          >
            About
          </a>

          <a
            href="/contact"
            className="text-gray-600 hover:text-blue-600 transition duration-200"
          >
            Contact
          </a>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mt-2 sm:mt-0">
          <a
            href="/signin"
            className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-200"
          >
            Sign In
          </a>

          <a
            href="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
          >
            Create Account
          </a>
        </div>
      </nav>
    </header>
  );
}
