import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Portfolio1 = () => {
  useEffect(() => {
    // Dark Mode Toggle
    const darkToggle = document.createElement("button");
    darkToggle.innerHTML = "🌓";
    darkToggle.className =
      "fixed bottom-4 right-4 p-3 rounded-full bg-white/10 backdrop-blur-lg";
    document.body.appendChild(darkToggle);

    darkToggle.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      localStorage.setItem(
        "theme",
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    });

    // Apply saved theme on load
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById("mobileMenuButton");
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }

    // Loader Hide
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.display = "none";
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
      const header = document.querySelector("nav");
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add("shadow-xl");
        } else {
          header.classList.remove("shadow-xl");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Back-to-top functionality
    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
      backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Contact Form Validation
    const contactForm = document.querySelector("form");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = contactForm
          .querySelector("input[name='name']")
          .value.trim();
        const email = contactForm
          .querySelector("input[name='email']")
          .value.trim();
        const message = contactForm
          .querySelector("textarea[name='message']")
          .value.trim();

        if (!name || !email || !message) {
          alert("Please fill in all fields.");
          return;
        }

        const submitButton = contactForm.querySelector("button");
        submitButton.innerHTML = "Sending...";
        submitButton.disabled = true;

        setTimeout(() => {
          alert("Message sent!");
          contactForm.reset();
          submitButton.innerHTML = "Send Message";
          submitButton.disabled = false;
        }, 2000);
      });
    }

    // Animation observers
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

    const appearOnScroll = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("opacity-100", "translate-y-0");
          appearOnScroll.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );

    const faders = document.querySelectorAll(".animate-fadeInUp");
    faders.forEach((fader) => {
      fader.classList.add("opacity-0", "translate-y-10");
      appearOnScroll.observe(fader);
    });

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      darkToggle.remove();
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 font-inter">
      <Helmet>
        <title>John Doe | Portfolio</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            * {
              font-family: "Poppins", sans-serif;
            }
            .dark {
              --bg-color: #1a202c;
              --text-color: #cbd5e0;
              --link-color: #63b3ed;
              --link-hover-color: #4299e1;
            }
            .dark body {
              background-color: var(--bg-color);
              color: var(--text-color);
            }
            .dark a {
              color: var(--link-color);
            }
            .dark a:hover {
              color: var(--link-hover-color);
            }
          `}
        </style>
      </Helmet>

      <div className="bg-gray-100 dark:bg-gray-900 transition-colors">
        {/* Loading Screen */}
        <div
          id="loader"
          className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex justify-center items-center"
        >
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>

        {/* Navigation */}
        <nav className="fixed w-full backdrop-blur-lg bg-white/10 shadow-lg z-30">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a
              href="#"
              className="text-2xl font-bold text-gray-800 dark:text-white"
            >
              JD
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="nav-link">
                Home
              </a>
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#skills" className="nav-link">
                Skills
              </a>
              <a href="#projects" className="nav-link">
                Projects
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>
            {/* Mobile Menu Button */}
            <button
              id="mobileMenuButton"
              className="md:hidden text-2xl focus:outline-none"
            >
              ☰
            </button>
          </div>
          {/* Mobile Navigation Menu */}
          <div id="mobileMenu" className="hidden md:hidden">
            <ul className="flex flex-col space-y-4 p-4 bg-white/10 backdrop-blur-lg">
              <li>
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="nav-link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="nav-link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* <!-- Hero Section --> */}
      <section
        id="home"
        className="pt-24 pb-12 bg-gradient-to-r from-blue-100 to-purple-100"
      >
        <div className="container mx-auto px-6 md:flex items-center">
          {/* <!-- Left Column --> */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4 animate-fadeIn">John Doe</h1>
            <p className="text-gray-600 mb-6">Full-Stack Developer</p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full hover:shadow-lg">
              Download Resume
            </button>
          </div>
          {/* <!-- Right Column --> */}
          <div className="md:w-1/2 mt-12 md:mt-0">
            <img
              src="https://www.piclumen.com/wp-content/uploads/2024/10/piclumen-upscale-after.webp"
              className="rounded-full w-64 h-64 mx-auto shadow-2xl hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </section>

      {/* <!-- About Section --> */}
      <section id="about" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <img
                src="https://t3.ftcdn.net/jpg/09/38/20/44/360_F_938204480_5BZPwZ4dL5iujr2XZwzkxdFeQJoRDsRE.jpg"
                className="rounded-lg w-full h-64 object-cover"
              />
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I'm a developer with 3+ years of experience...
                </p>
                {/* <!-- Stats Grid --> */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-lg hover:scale-110 transition-transform">
                    <i className="fas fa-briefcase text-blue-500 text-2xl mb-2"></i>
                    <h3 className="font-bold">3+ Years</h3>
                  </div>
                  {/* <!-- Add more stats --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Skills Section --> */}
      <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="skill-card bg-white/5 p-6 rounded-lg border border-white/10">
              <svg
                className="w-8 h-8 mb-4 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <h3 className="font-bold mb-2">JavaScript</h3>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full w-4/5 transition-all duration-1000"></div>
              </div>
            </div>
            {/* <!-- Add more skills --> */}
          </div>
        </div>
      </section>

      {/* <!-- Projects Section --> */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="project-card bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 transition-transform">
              <img
                src="https://media.istockphoto.com/id/1280385511/photo/colorful-background.jpg?s=612x612&w=0&k=20&c=kj0PRQlgvWLzA1-1me6iZp5mlwsZhC4QlcvIEb1J1bs="
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold mb-2">E-Commerce Platform</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Built with React & Node.js
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="tag bg-blue-100/20 text-blue-500 px-3 py-1 rounded-full text-sm">
                    React
                  </span>
                  {/* <!-- Add more tags --> */}
                </div>
              </div>
            </div>
            {/* <!-- Add more projects --> */}
          </div>
        </div>
      </section>

      {/* <!-- Contact Section --> */}
      <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <form className="max-w-lg mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full mb-4 p-3 bg-white/5 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full mb-4 p-3 bg-white/5 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="w-full mb-4 p-3 bg-white/5 rounded-lg focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full w-full">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer className="bg-gray-900/80 text-gray-300 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">&copy; 2023 John Doe. All rights reserved.</p>
          <button
            id="backToTop"
            className="bg-blue-500 p-3 rounded-full animate-pulse"
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio1;
