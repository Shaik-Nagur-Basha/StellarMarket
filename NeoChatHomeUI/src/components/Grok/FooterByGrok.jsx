// components/Footer.js
import React from "react";

export default function FooterByGrok() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NeoChat</h3>
            <p className="text-gray-400">
              Connect, collaborate, and communicate with ease.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-blue-400 transition duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-blue-400 transition duration-200"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-blue-400 transition duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-blue-400 transition duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition duration-200"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition duration-200"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} NeoChat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
