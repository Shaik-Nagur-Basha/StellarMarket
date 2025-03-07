import { faker } from "@faker-js/faker";
import React from "react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                John Doe
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Full Stack Developer & UI/UX Designer
            </p>
            <div className="space-x-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Contact Me
              </a>
              <a
                href="#portfolio"
                className="border-2 border-gray-700 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-700 hover:text-white transition-colors"
              >
                View Work
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative animate-float">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mx-auto">
                <img
                  src={faker.image.avatar()}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full p-2"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">
                    Available for Work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
