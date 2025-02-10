// components/Navbar.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import DarkModeToggle from "../ui/DarkModeToggle";
import logo from "../../assets/generated-image.png";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link to="/">
            <img className="h-8 w-8" src={logo} alt="Logo" />
          </Link>
          <div className="ml-4 flex space-x-2">
            <LanguageSwitcher />
            <DarkModeToggle />
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-center space-x-4">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Home
            </Link>
            <a
              href="#products"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Products
            </a>
            <Link
              to="/blog"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Blog
            </Link>
            <Link
              to="/compare"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Compare
            </Link>
            <Link
              to="/store-locator"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Store Locator
            </Link>
            <Link
              to="/search"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Search
            </Link>
            <Link
              to="/order-tracking"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Order Tracking
            </Link>
            <Link
              to="/support"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Support
            </Link>
            <Link
              to="/social-feed"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Social Feed
            </Link>
            <Link
              to="/ar-viewer"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              AR Viewer
            </Link>
            <Link
              to="/cart"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Cart
            </Link>
            <Link
              to="/checkout"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Checkout
            </Link>
            {user && (
              <Link
                to="/profile"
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Profile
              </Link>
            )}
            {user && (
              <>
                <Link
                  to="/loyalty"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Loyalty
                </Link>
                <Link
                  to="/referral"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Referral
                </Link>
                <Link
                  to="/social-sharing"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Share
                </Link>
                <Link
                  to="/personalized-recommendations"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Recommended
                </Link>
                <Link
                  to="/virtual-tryon"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Try‑On
                </Link>
                <Link
                  to="/chatbot"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Chatbot
                </Link>
                <Link
                  to="/nlp-chatbot"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  NLP Chatbot
                </Link>
                <Link
                  to="/real-ai-chatbot"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Real AI Chatbot
                </Link>
              </>
            )}
            {user && user.username === "admin" && (
              <>
                <Link
                  to="/admin"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Admin
                </Link>
                <Link
                  to="/reports"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Reports
                </Link>
                <Link
                  to="/analytics"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Analytics
                </Link>
                <Link
                  to="/advanced-analytics"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Advanced Analytics
                </Link>
                <Link
                  to="/enhanced-analytics"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Enhanced Analytics
                </Link>
                <Link
                  to="/inventory"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Inventory
                </Link>
                <Link
                  to="/sales-dashboard"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Sales Dashboard
                </Link>
                <Link
                  to="/user-segmentation"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  User Segmentation
                </Link>
                <Link
                  to="/interactive-segmentation"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Segmentation Filters
                </Link>
                <Link
                  to="/live-analytics"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Live Analytics
                </Link>
                <Link
                  to="/fraud-detection"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Fraud Detection
                </Link>
                <Link
                  to="/demand-forecast"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Demand Forecast
                </Link>
                <Link
                  to="/security-audit"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Security Audit
                </Link>
                <Link
                  to="/feedback-analysis"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Feedback Analysis
                </Link>
              </>
            )}
            {user ? (
              <button
                onClick={logout}
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Register
                </Link>
              </>
            )}
            <Link
              to="/performance"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Performance
            </Link>
            <Link
              to="/accessibility"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

//Navbar;
