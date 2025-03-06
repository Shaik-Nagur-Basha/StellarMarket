import React, { useState } from "react";
import styles from "./GC3SignInPage.module.css";

export default function GC3SignInPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? "dark" : ""} ${
        styles.pageContainer
      }`}
    >
      <div className={styles.backgroundImage}></div>
      <div className={styles.glassOverlay}></div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 ${styles.glassNav}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className={`text-2xl font-bold ${styles.logoText}`}>
                NeoChat
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${styles.iconButton}`}
              >
                {darkMode ? (
                  <svg
                    className="h-6 w-6 text-yellow-400"
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
                ) : (
                  <svg
                    className="h-6 w-6 text-gray-700"
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
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center relative z-10">
        <div className={`max-w-md w-full ${styles.formCard}`}>
          <div className="text-center mb-8">
            <h2 className={`text-3xl font-bold ${styles.gradientText}`}>
              Welcome Back
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Sign in to continue your journey
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className={styles.inputGroup}>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="Enter your password"
                required
              />
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 block mt-1"
              >
                Forgot password?
              </a>
            </div>

            <button type="submit" className={styles.submitButton}>
              Sign In
            </button>

            <div className={styles.divider}>
              <span>Or continue with</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className={`${styles.socialButton} ${styles.googleButton}`}
              >
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-5 h-5"
                />
                <span>Google</span>
              </button>
              <button
                type="button"
                className={`${styles.socialButton} ${styles.githubButton}`}
              >
                <img
                  src="https://github.com/favicon.ico"
                  alt="GitHub"
                  className="w-5 h-5"
                />
                <span>GitHub</span>
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
