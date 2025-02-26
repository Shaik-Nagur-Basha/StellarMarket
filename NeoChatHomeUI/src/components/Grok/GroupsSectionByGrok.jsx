// components/GroupsSection.js
import React from "react";

export default function GroupsSectionByGrok() {
  const groups = [
    {
      id: 1,
      name: "Tech Enthusiasts",
      description: "A group for tech lovers.",
    },
    { id: 2, name: "Book Club", description: "Discuss your favorite books." },
    { id: 3, name: "Fitness Fans", description: "Stay motivated and fit." },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Popular Groups
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {groups.map((group) => (
            <div
              key={group.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 transform hover:scale-102"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {group.name}
              </h3>
              <p className="text-gray-600">{group.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
