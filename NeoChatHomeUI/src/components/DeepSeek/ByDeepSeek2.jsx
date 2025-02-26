import React, { useState } from "react";

export default function ByDeepSeek2() {
  const [activeTab, setActiveTab] = useState("communities");

  // Sample data
  const communities = [
    {
      name: "Tech Innovators",
      members: "12k",
      topics: ["AI", "Web3", "DevOps"],
    },
    {
      name: "Creative Designers",
      members: "8.4k",
      topics: ["UI/UX", "3D Modeling", "Branding"],
    },
  ];

  const channels = [
    { name: "#announcements", messages: "1.2k", icon: "📢" },
    { name: "#introductions", messages: "892", icon: "👋" },
  ];

  const groups = [
    { name: "Startup Founders", members: 42, online: 15 },
    { name: "Remote Workers", members: 28, online: 8 },
  ];

  const users = ["Alex", "Sam", "Jordan", "Taylor", "Casey", "Riley"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
              N
            </div>
            <span className="text-xl font-bold text-gray-800">NeoChat</span>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 rounded-lg hover:bg-gray-100">
              Login
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content Container */}
      <main className="container mx-auto px-4 py-8">
        {/* Communities Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Featured Communities
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {communities.map((community, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{community.name}</h3>
                  <span className="text-gray-500">
                    {community.members} members
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {community.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Channels & Groups Side-by-Side */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Channels Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Popular Channels
            </h2>
            <div className="space-y-4">
              {channels.map((channel, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg flex items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-2xl mr-4">{channel.icon}</span>
                  <div>
                    <h3 className="font-semibold">{channel.name}</h3>
                    <p className="text-gray-500">{channel.messages} messages</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Groups Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Active Groups
            </h2>
            <div className="grid gap-4">
              {groups.map((group, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg hover:shadow-sm transition-shadow"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{group.name}</h3>
                    <span className="text-sm text-green-600">
                      {group.online} online
                    </span>
                  </div>
                  <div className="mt-2 flex justify-between text-gray-500 text-sm">
                    <span>{group.members} members</span>
                    <button className="text-blue-600 hover:text-blue-700">
                      Join Group
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Users Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Active Users
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {users.map((user, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl text-center hover:transform hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2 flex items-center justify-center text-blue-600">
                  {user.charAt(0)}
                </div>
                <span className="font-medium">{user}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NeoChat</h3>
              <p className="text-gray-400">
                Connecting people through meaningful conversations
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                {["Blog", "Documentation", "Help Center"].map((item) => (
                  <li key={item} className="hover:text-white cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                {["Privacy", "Terms", "Security"].map((item) => (
                  <li key={item} className="hover:text-white cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
