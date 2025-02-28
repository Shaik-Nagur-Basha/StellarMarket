import React from "react";

export default function MicrosoftCopilot1() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="text-lg font-bold">NeoChat</div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 p-2 rounded focus:outline-none"
          />
          <button className="bg-gray-700 p-2 rounded">Profile</button>
          <button className="bg-gray-700 p-2 rounded">Dark Mode</button>
          <button className="bg-gray-700 p-2 rounded">About</button>
        </div>
      </nav>
      <main className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Sample Card */}
          <div className="bg-gray-800 p-4 rounded-lg border-2 border-gray-700">
            <div className="bg-gray-700 p-2 rounded-lg border-2 border-gray-600">
              <h2 className="text-xl font-bold">User</h2>
              <p className="mt-2">Interact with friends and family.</p>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg border-2 border-gray-700">
            <div className="bg-gray-700 p-2 rounded-lg border-2 border-gray-600">
              <h2 className="text-xl font-bold">Groups</h2>
              <p className="mt-2">Join groups of interest.</p>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg border-2 border-gray-700">
            <div className="bg-gray-700 p-2 rounded-lg border-2 border-gray-600">
              <h2 className="text-xl font-bold">Channels</h2>
              <p className="mt-2">Subscribe to channels for updates.</p>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg border-2 border-gray-700">
            <div className="bg-gray-700 p-2 rounded-lg border-2 border-gray-600">
              <h2 className="text-xl font-bold">Communities</h2>
              <p className="mt-2">Engage with communities.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
