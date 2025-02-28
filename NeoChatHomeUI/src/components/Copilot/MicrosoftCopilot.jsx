import React from "react";
import { faker } from "@faker-js/faker";

export default function MicrosoftCopilot() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navigation Bar */}
      <header className="sticky top-0 bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src={faker.image.urlPicsumPhotos(64, 64)} alt="Brand Logo" className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">NeoChat</span>
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Profile</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Settings</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Help</a>
            </div>
            <div>
              <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign In</a>
              <a href="#" className="ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Create Account</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex items-center justify-center bg-gray-200 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Connect. Collaborate. Communicate.</h1>
          <p className="text-lg mb-8">Join NeoChat and start connecting with your community today.</p>
          <a href="#" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition transform hover:scale-105">Get Started</a>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Users</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example User Cards */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <img src={faker.image.urlPicsumPhotos(64, 64)} alt="User Avatar" className="h-16 w-16 rounded-full mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-center">User {index + 1}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
