// components/UsersSection.js
import { faker } from "@faker-js/faker";
import React from "react";

export default function UsersSectionByGrok() {
  const users = [
    { id: 1, name: "Alice", avatar: faker.image.urlPicsumPhotos(64, 64) },
    { id: 2, name: "Bob", avatar: faker.image.urlPicsumPhotos(64, 64) },
    { id: 3, name: "Charlie", avatar: faker.image.urlPicsumPhotos(64, 64) },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Featured Users
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 transform hover:scale-102"
            >
              <img
                src={user.avatar}
                alt={`Avatar of ${user.name}`}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center text-gray-800">
                {user.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
