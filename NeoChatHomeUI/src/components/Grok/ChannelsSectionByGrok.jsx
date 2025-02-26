// components/ChannelsSection.js
import React from "react";

export default function ChannelsSectionByGrok() {
  const channels = [
    {
      id: 1,
      name: "General Chat",
      description: "A place for general discussions.",
    },
    {
      id: 2,
      name: "Announcements",
      description: "Stay updated with the latest news.",
    },
    { id: 3, name: "Support", description: "Get help and support." },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Featured Channels
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {channels.map((channel) => (
            <div
              key={channel.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 transform hover:scale-102"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {channel.name}
              </h3>
              <p className="text-gray-600">{channel.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
