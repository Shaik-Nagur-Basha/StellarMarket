import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";

const Portfolio = () => {
  useEffect(() => {
    // Loading screen effect
    const loading = document.getElementById("loading");
    if (loading) {
      setTimeout(() => {
        loading.style.display = "none";
      }, 1000);
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 font-inter">
      <Helmet>
        <title>My Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
        />
        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            .animate-fadeIn { animation: fadeIn 1s ease-in forwards; }
            .animate-float { animation: float 3s ease-in-out infinite; }
            .spinner {
              border: 4px solid rgba(255, 255, 255, 0.3);
              border-top: 4px solid #fff;
              border-radius: 50%;
              width: 40px;
              height: 40px;
              animation: spin 1s linear infinite;
            }
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}
        </style>
      </Helmet>

      {/* Loading Screen */}
      <div
        id="loading"
        className="fixed inset-0 flex items-center justify-center bg-white z-50"
      >
        <div className="spinner"></div>
      </div>

      <Header />
      <Hero />
      <About />
      <Skills />
    </div>
  );
};

export default Portfolio;
