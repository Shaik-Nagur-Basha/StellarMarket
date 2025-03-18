import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import DarkModeToggle from "../ui/DarkModeToggle";
import { faker } from "@faker-js/faker";

const categories = {
  Shop: [
    { name: "All Products", path: "/products" },
    { name: "New Arrivals", path: "/products/new" },
    { name: "Featured", path: "/products/featured" },
    { name: "Categories", path: "/categories" },
    { name: "Deals", path: "/deals" },
  ],
  Features: [
    { name: "Virtual Try-On", path: "/virtual-tryon" },
    { name: "AR Viewer", path: "/ar-viewer" },
    { name: "Store Locator", path: "/store-locator" },
    { name: "Compare", path: "/compare" },
  ],
  Support: [
    { name: "Help Center", path: "/help" },
    { name: "Order Tracking", path: "/order-tracking" },
    { name: "Returns", path: "/returns" },
    { name: "Contact Us", path: "/contact" },
  ],
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  // Replace these lines:
  // const { user, logout } = useContext(<AuthContext />);
  // const location = useLocation();

  // With these mock values:
  const mockData = {
    user: {
      id: "user_123",
      name: "John Doe",
      email: "john@example.com",
      avatar: faker.image.avatar(), // Reliable avatar URL
      role: "user",
      preferences: {
        theme: "light",
        language: "en",
      },
    },
    logout: () => console.log("Logout clicked"),
  };

  const { user, logout } = mockData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (category) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  const closeDropdowns = () => {
    setOpenDropdown(null);
  };

  const userAvatar = user?.avatar || faker.image.avatar();

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        onMouseLeave={() => {
          openDropdown && closeDropdowns();
          isOpen && setIsOpen(false);
        }}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img
                className="h-8 w-8 rounded-lg"
                src={faker.image.urlPicsumPhotos({ width: 64, height: 64 })}
                alt="StellarMarket"
              />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
                StellarMarket
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {Object.entries(categories).map(([category, items]) => (
              <div key={category} className="relative">
                <button
                  onClick={() => toggleDropdown(category)}
                  className="flex items-center space-x-1 px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400"
                >
                  <span>{category}</span>
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openDropdown === category ? "rotate-180" : ""
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

                {openDropdown === category && (
                  <div className="absolute mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 backdrop-blur-sm">
                    <div className="py-2">
                      {items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <DarkModeToggle />

            {user ? (
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("profile")}
                  className="flex items-center space-x-2"
                >
                  <img
                    src={userAvatar}
                    alt="Profile"
                    className="h-8 w-8 rounded-full border-2 border-primary-500"
                  />
                  <span className="text-gray-700 dark:text-gray-200">
                    {user.name}
                  </span>
                </button>

                {openDropdown === "profile" && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div className="py-2">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                      >
                        Profile
                      </Link>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                      >
                        Orders
                      </Link>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                      >
                        Settings
                      </Link>
                      <button
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex justify-center items-center gap-5 max-sm:gap-2">
            <LanguageSwitcher />
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
          {Object.entries(categories).map(([category, items]) => (
            <div key={category}>
              <button
                onClick={() => toggleDropdown(category)}
                className="w-full flex items-center justify-between px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400"
              >
                <span>{category}</span>
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openDropdown === category ? "rotate-180" : ""
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

              {openDropdown === category && (
                <div className="pl-4 space-y-1">
                  {items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Profile Section */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            {user ? (
              <div className="space-y-1">
                <div className="flex items-center px-3 py-2">
                  <img
                    src={userAvatar}
                    alt="Profile"
                    className="h-8 w-8 rounded-full border-2 border-primary-500"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-200">
                    {user.name}
                  </span>
                </div>
                <Link
                  to="/profile"
                  className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                >
                  Profile
                </Link>
                <Link
                  to="/orders"
                  className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                >
                  Orders
                </Link>
                <Link
                  to="/settings"
                  className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                >
                  Settings
                </Link>
                <button
                  onClick={logout}
                  className="block w-full text-left px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-y-2 px-3 py-2">
                <Link
                  to="/login"
                  className="block w-full px-4 py-2 text-center text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block w-full px-4 py-2 text-center bg-primary-500 text-white hover:bg-primary-600 rounded-lg transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
