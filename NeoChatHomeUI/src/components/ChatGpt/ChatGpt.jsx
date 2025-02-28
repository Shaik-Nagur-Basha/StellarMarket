import React from "react";
// If you want meta tags in a CRA environment, install react-helmet or react-helmet-async
// import { Helmet } from 'react-helmet';
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import { faker } from '@faker-js/faker';

// Dummy data examples
const users = [
  { id: 1, name: "Jane Doe", avatar: faker.image.urlPicsumPhotos(64, 64) },
  { id: 2, name: "John Smith", avatar: faker.image.urlPicsumPhotos(64, 64)},
  { id: 3, name: "Alice Wonderland", avatar: faker.image.urlPicsumPhotos(64, 64)},
  { id: 4, name: "Bob Johnson", avatar: faker.image.urlPicsumPhotos(64, 64)},
  // ... add as many as you want
];

const groups = [
  { id: 1, title: "Development", icon: faker.image.urlPicsumPhotos(64, 64)},
  { id: 2, title: "Design", icon: faker.image.urlPicsumPhotos(64, 64)},
  { id: 3, title: "Marketing", icon: faker.image.urlPicsumPhotos(64, 64)},
  { id: 4, title: "Support", icon: faker.image.urlPicsumPhotos(64, 64)},
  // ... add as many as you want
];

const channels = [
  { id: 1, title: "General Chat", icon: faker.image.urlPicsumPhotos(64, 64) },
  { id: 2, title: "Announcements", icon: faker.image.urlPicsumPhotos(64, 64) },
  { id: 3, title: "Random", icon: faker.image.urlPicsumPhotos(64, 64) },
  { id: 4, title: "Feedback", icon: faker.image.urlPicsumPhotos(64, 64) },
  // ... add as many as you want
];

export default function ChatGpt() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      {/* Example usage of Helmet (uncomment if react-helmet is installed)
      <Helmet>
        <title>NeoChat – Connect, Collaborate, Communicate</title>
        <meta
          name="description"
          content="NeoChat is a platform for communities, users, and groups to chat and collaborate seamlessly."
        />
      </Helmet
      */}

      {/* ========== HEADER (Sticky Navigation) ========== */}
      <header className="sticky top-0 bg-white shadow z-50">
        <nav className="flex items-center justify-between px-4 md:px-8 py-4">
          {/* Logo + Brand Name */}
          <div className="flex items-center space-x-2">
            {/* Replace with your actual logo image */}
            <img src={faker.image.urlPicsumPhotos(64, 64)} alt="NeoChat Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold">NeoChat</span>
          </div>

          {/* Navigation Links (hidden on small screens) */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </a>
          </div>

          {/* Right side icons/buttons */}
          <div className="flex items-center space-x-4">
            <button
              className="text-gray-600 hover:text-gray-900 transition-colors"
              title="Profile"
            >
              <FaUser />
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Create Account
            </button>
          </div>
        </nav>
      </header>

      {/* ========== HERO / INTRO SECTION ========== */}
      <section
        id="home"
        className="relative bg-gray-100 py-16 flex items-center justify-center"
      >
        <div className="text-center max-w-2xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Connect. Collaborate. Communicate.
          </h1>
          <p className="text-gray-700 mb-6">
            NeoChat is a platform for communities, users, and groups to chat and
            collaborate seamlessly.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-transform transform hover:scale-105">
            Get Started
          </button>
        </div>
        {/* Optional background illustration or subtle animation here */}
      </section>

      {/* ========== MAIN CONTENT: USERS, GROUPS, CHANNELS ========== */}
      <main className="flex-grow">
        <section id="content" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          {/* Users Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Users</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="p-4 bg-white rounded shadow hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <img
                    src={user.avatar}
                    alt={`${user.name} avatar`}
                    className="w-16 h-16 rounded-full mx-auto mb-2"
                  />
                  <h3 className="text-center text-sm font-semibold">
                    {user.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Groups Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Groups</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {groups.map((group) => (
                <div
                  key={group.id}
                  className="p-4 bg-white rounded shadow hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <img
                    src={group.icon}
                    alt={`${group.title} icon`}
                    className="w-16 h-16 mx-auto mb-2"
                  />
                  <h3 className="text-center text-sm font-semibold">
                    {group.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Channels Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Channels</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {channels.map((channel) => (
                <div
                  key={channel.id}
                  className="p-4 bg-white rounded shadow hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <img
                    src={channel.icon}
                    alt={`${channel.title} icon`}
                    className="w-16 h-16 mx-auto mb-2"
                  />
                  <h3 className="text-center text-sm font-semibold">
                    {channel.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Optional Carousel Section */}
        <section
          id="carousel"
          className="bg-gray-50 py-16 px-4 md:px-8 max-w-7xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Featured Channels
          </h2>
          {/* Replace this with a carousel library like react-slick or swiper */}
          <div className="relative max-w-4xl mx-auto overflow-hidden">
            <div className="flex space-x-4">
              {/* Example slides (static placeholders) */}
              <div className="min-w-[300px] p-4 bg-white rounded shadow">
                <h3 className="font-semibold">Channel 1</h3>
                <p className="text-sm text-gray-600">
                  Short description about channel 1.
                </p>
              </div>
              <div className="min-w-[300px] p-4 bg-white rounded shadow">
                <h3 className="font-semibold">Channel 2</h3>
                <p className="text-sm text-gray-600">
                  Short description about channel 2.
                </p>
              </div>
              <div className="min-w-[300px] p-4 bg-white rounded shadow">
                <h3 className="font-semibold">Channel 3</h3>
                <p className="text-sm text-gray-600">
                  Short description about channel 3.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== FOOTER ========== */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-white font-bold text-lg mb-1">NeoChat</h3>
            <p className="text-sm text-gray-400">
              © 2025 NeoChat. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="/privacy"
              className="hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a
              href="/contact"
              className="hover:text-white transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
