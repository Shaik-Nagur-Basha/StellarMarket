import { faker } from "@faker-js/faker";
import React from "react";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import { motion } from "framer-motion";

export default function GitHubCopilot() {
  const users = [
    { id: 1, name: "Jane Doe", avatar: faker.image.urlPicsumPhotos(64, 64) },
    { id: 2, name: "John Smith", avatar: faker.image.urlPicsumPhotos(64, 64) },
    {
      id: 3,
      name: "Alice Wonderland",
      avatar: faker.image.urlPicsumPhotos(64, 64),
    },
    { id: 4, name: "Bob Johnson", avatar: faker.image.urlPicsumPhotos(64, 64) },
  ];

  const groups = [
    { id: 1, title: "Development", icon: faker.image.urlPicsumPhotos(64, 64) },
    { id: 2, title: "Design", icon: faker.image.urlPicsumPhotos(64, 64) },
    { id: 3, title: "Marketing", icon: faker.image.urlPicsumPhotos(64, 64) },
    { id: 4, title: "Support", icon: faker.image.urlPicsumPhotos(64, 64) },
  ];

  const channels = [
    { id: 1, title: "General Chat", icon: faker.image.urlPicsumPhotos(64, 64) },
    {
      id: 2,
      title: "Announcements",
      icon: faker.image.urlPicsumPhotos(64, 64),
    },
    { id: 3, title: "Random", icon: faker.image.urlPicsumPhotos(64, 64) },
    { id: 4, title: "Feedback", icon: faker.image.urlPicsumPhotos(64, 64) },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      <header className="sticky top-0 bg-white shadow z-50">
        <nav className="flex items-center justify-between px-4 md:px-8 py-4">
          <div className="flex items-center space-x-2">
            <img
              src={faker.image.urlPicsumPhotos(64, 64)}
              alt="NeoChat Logo"
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold">NeoChat</span>
          </div>
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
      <section
        id="home"
        className="relative bg-gradient-to-r from-blue-500 to-purple-600 py-16 flex items-center justify-center"
      >
        <div className="text-center max-w-2xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Connect. Collaborate. Communicate.
          </h1>
          <p className="text-gray-200 mb-6">
            NeoChat is a platform for communities, users, and groups to chat and
            collaborate seamlessly.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-200 transition-transform transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>
      <main className="flex-grow">
        <section id="content" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-center">Users</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {users.map((user) => (
                <motion.div
                  key={user.id}
                  className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative w-16 h-16 mx-auto mb-2">
                    <img
                      src={user.avatar}
                      alt={`${user.name} avatar`}
                      className="w-full h-full rounded-full border-4 border-blue-500"
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-white"></div>
                  </div>
                  <h3 className="text-center text-sm font-semibold">
                    {user.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-center">Groups</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {groups.map((group) => (
                <motion.div
                  key={group.id}
                  className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative w-16 h-16 mx-auto mb-2">
                    <img
                      src={group.icon}
                      alt={`${group.title} icon`}
                      className="w-full h-full rounded-lg border-4 border-purple-500"
                    />
                    <div className="absolute inset-0 rounded-lg border-2 border-white"></div>
                  </div>
                  <h3 className="text-center text-sm font-semibold">
                    {group.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-center">Channels</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {channels.map((channel) => (
                <motion.div
                  key={channel.id}
                  className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative w-16 h-16 mx-auto mb-2">
                    <img
                      src={channel.icon}
                      alt={`${channel.title} icon`}
                      className="w-full h-full rounded-lg border-4 border-green-500"
                    />
                    <div className="absolute inset-0 rounded-lg border-2 border-white"></div>
                  </div>
                  <h3 className="text-center text-sm font-semibold">
                    {channel.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="carousel"
          className="bg-gray-50 py-16 px-4 md:px-8 max-w-7xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Featured Channels
          </h2>
          <div className="relative max-w-4xl mx-auto overflow-hidden">
            <div className="flex space-x-4">
              <motion.div
                className="min-w-[300px] p-4 bg-white rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-semibold">Channel 1</h3>
                <p className="text-sm text-gray-600">
                  Short description about channel 1.
                </p>
              </motion.div>
              <motion.div
                className="min-w-[300px] p-4 bg-white rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-semibold">Channel 2</h3>
                <p className="text-sm text-gray-600">
                  Short description about channel 2.
                </p>
              </motion.div>
              <motion.div
                className="min-w-[300px] p-4 bg-white rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-semibold">Channel 3</h3>
                <p className="text-sm text-gray-600">
                  Short description about channel 3.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
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
