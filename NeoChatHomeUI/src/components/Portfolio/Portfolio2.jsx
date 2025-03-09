import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Portfolio2 = () => {
  useEffect(() => {
    // Loading screen
    const loading = document.getElementById("loading");
    if (loading) {
      loading.style.display = "none";
    }

    // Hamburger menu toggle
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");
    if (hamburger && mobileMenu) {
      hamburger.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }

    // Smooth scroll for nav links
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          // Close mobile menu if open
          if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.add("hidden");
          }
        }
      });
    });

    // Header shadow on scroll
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add("shadow-xl");
        } else {
          header.classList.remove("shadow-xl");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Dark/Light Toggle
    const toggleDark = document.getElementById("toggleDark");
    if (toggleDark) {
      toggleDark.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        localStorage.setItem(
          "theme",
          document.documentElement.classList.contains("dark") ? "dark" : "light"
        );
      });
    }

    // Apply saved theme
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }

    // Back-to-top functionality
    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
      backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Contact Form Validation and Loading Spinner
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = contactForm
          .querySelector('input[name="name"]')
          .value.trim();
        const email = contactForm
          .querySelector('input[name="email"]')
          .value.trim();
        const message = contactForm
          .querySelector('textarea[name="message"]')
          .value.trim();

        if (!name || !email || !message) {
          alert("Please fill in all fields.");
          return;
        }

        const loadingSpinner = document.getElementById("loadingSpinner");
        const submitText = document.getElementById("submitText");

        if (loadingSpinner && submitText) {
          loadingSpinner.classList.remove("hidden");
          submitText.textContent = "Sending...";

          setTimeout(() => {
            alert("Message sent!");
            contactForm.reset();
            loadingSpinner.classList.add("hidden");
            submitText.textContent = "Send Message";
          }, 2000);
        }
      });
    }

    // Skill bar animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width =
              entry.target.getAttribute("data-skill") + "%";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("[data-skill]").forEach((bar) => {
      observer.observe(bar);
    });

    // FadeIn animations
    const appearOptions = { threshold: 0.5 };
    const appearOnScroll = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("opacity-100", "translate-y-0");
        appearOnScroll.unobserve(entry.target);
      });
    }, appearOptions);

    const faders = document.querySelectorAll(".animate-fadeInUp");
    faders.forEach((fader) => {
      fader.classList.add("opacity-0", "translate-y-10");
      appearOnScroll.observe(fader);
    });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (toggleDark) toggleDark.remove();
    };
  }, []);

  return (
    <div className="scroll-smooth">
      <Helmet>
        <title>My Portfolio</title>
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
            .animate-fadeIn {
              animation: fadeIn 1s ease-in forwards;
            }
            .animate-float {
              animation: float 3s ease-in-out infinite;
            }
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

      <div className="bg-gradient-to-r from-blue-100 to-purple-100 font-inter">
        {/* Loading Screen */}
        <div
          id="loading"
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
        >
          <div className="spinner"></div>
        </div>

        {/* Fixed Navigation Header */}
        <header
          id="header"
          className="fixed top-0 w-full z-40 backdrop-blur-lg bg-white/10 shadow-lg"
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
            <div className="logo text-xl font-bold">MyLogo</div>
            <nav>
              <ul className="hidden md:flex space-x-6">
                <li>
                  <a
                    href="#home"
                    className="nav-link hover:border-b-2 transition-all"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="nav-link hover:border-b-2 transition-all"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="nav-link hover:border-b-2 transition-all"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="nav-link hover:border-b-2 transition-all"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="nav-link hover:border-b-2 transition-all"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              {/* Hamburger Menu for Mobile */}
              <div className="md:hidden">
                <button id="hamburger" className="text-2xl focus:outline-none">
                  <i className="fas fa-bars"></i>
                </button>
              </div>
            </nav>
          </div>
          {/* Mobile Navigation Menu */}
          <div id="mobile-menu" className="hidden md:hidden">
            <ul className="flex flex-col space-y-4 p-4 bg-white/10 backdrop-blur-lg">
              <li>
                <a
                  href="#home"
                  className="nav-link hover:border-b-2 transition-all"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="nav-link hover:border-b-2 transition-all"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="nav-link hover:border-b-2 transition-all"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="nav-link hover:border-b-2 transition-all"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="nav-link hover:border-b-2 transition-all"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </header>

        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center pt-20 animate-fadeIn"
        >
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            {/* Left Column */}
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-4xl font-bold">John Doe</h1>
              <h2 className="text-2xl font-semibold">Full-Stack Developer</h2>
              <p className="text-gray-700">
                A passionate developer creating interactive and dynamic web
                experiences.
              </p>
              <div className="space-x-4">
                <a
                  href="resume.pdf"
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded shadow hover:shadow-lg transition-all"
                >
                  Download Resume
                </a>
                <a
                  href="#projects"
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded shadow hover:shadow-lg transition-all"
                >
                  View Projects
                </a>
              </div>
            </div>
            {/* Right Column */}
            <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
              <img
                src="https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1920%2C1080&ssl=1"
                alt="Profile"
                className="rounded-full shadow-2xl hover:scale-105 transition-transform animate-float"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
            <div className="flex flex-col md:flex-row items-center">
              {/* Image */}
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <img
                  src="https://www.swic.edu/wp-content/uploads/2021/05/portfolio.png"
                  alt="About Image"
                  className="rounded-xl shadow-lg"
                />
              </div>
              {/* Text */}
              <div className="w-full md:w-1/2 md:pl-12">
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  I am a full-stack developer with a passion for building
                  dynamic and responsive web applications. With 3 years of
                  professional experience, I've successfully delivered projects
                  across various domains.
                </p>
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl hover:scale-110 transition-transform">
                    <i className="fas fa-project-diagram text-2xl mb-2"></i>
                    <p className="text-lg font-semibold">5+ Projects</p>
                  </div>
                  <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl hover:scale-110 transition-transform">
                    <i className="fas fa-clock text-2xl mb-2"></i>
                    <p className="text-lg font-semibold">3 Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {/* Skill Card: JavaScript */}
              <div className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl">
                <div className="flex items-center mb-2">
                  <img
                    src="https://www.investopedia.com/thmb/0VrXWhfooj6-RPyyvp7HoCdq1Vo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Term_Defination_Financial.Portfolio-367fc73212ac456aa607ad135db4ffa0.jpg"
                    alt="Skill Icon"
                    className="w-6 h-6 mr-2"
                  />
                  <span className="font-semibold">JavaScript</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "80%" }}
                    data-skill="80"
                  ></div>
                </div>
              </div>
              {/* Additional skill cards can be added here */}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Project Card */}
              <div className="relative bg-white/5 rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 duration-300 transition-transform">
                <img
                  src="https://w3layouts.b-cdn.net//wp-content/uploads/2023/10/Biodata-Personal-Website-Template-scaled-1.jpg"
                  alt="Project Image"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all flex items-center justify-center">
                  <span className="text-white opacity-0 hover:opacity-100 transition-opacity">
                    View Project
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Project Title</h3>
                  <p className="text-gray-300 text-sm">
                    A brief description of the project goes here.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100/20 text-blue-300 rounded">
                      HTML
                    </span>
                    <span className="px-2 py-1 bg-blue-100/20 text-blue-300 rounded">
                      CSS
                    </span>
                    <span className="px-2 py-1 bg-blue-100/20 text-blue-300 rounded">
                      JS
                    </span>
                  </div>
                  <div className="mt-2">
                    <a href="#" className="text-blue-400 hover:underline">
                      Live Demo
                    </a>{" "}
                    |{" "}
                    <a href="#" className="text-blue-400 hover:underline">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              {/* Additional project cards can be added here */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
            <div className="max-w-lg mx-auto">
              <form
                id="contactForm"
                className="space-y-4 bg-white/10 backdrop-blur-md rounded-xl p-8"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full p-3 bg-white/5 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 rounded"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-3 bg-white/5 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 rounded"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  className="w-full p-3 bg-white/5 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 rounded"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded hover:shadow-lg transition-all flex items-center justify-center"
                >
                  <span id="submitText">Send Message</span>
                  <span
                    id="loadingSpinner"
                    className="hidden ml-2 spinner"
                  ></span>
                </button>
              </form>
              {/* Social Media Links */}
              <div className="mt-6 flex justify-center space-x-4">
                <a href="#" className="text-blue-500 text-2xl">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="text-blue-500 text-2xl">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-blue-500 text-2xl">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-4 bg-gray-900/80 text-white text-center">
          <p>&copy; 2025 John Doe. All rights reserved.</p>
          <button id="backToTop" className="mt-2 text-xl animate-pulse">
            <i className="fas fa-arrow-up"></i>
          </button>
        </footer>

        {/* Dark/Light Toggle */}
        <button
          id="toggleDark"
          className="fixed bottom-4 right-4 p-3 bg-white/20 backdrop-blur-md rounded-full shadow-lg focus:outline-none"
        >
          <i className="fas fa-adjust"></i>
        </button>
      </div>
    </div>
  );
};

export default Portfolio2;
