// components/SocialMediaFeed.js
import React, { useEffect, useState } from "react";

const dummySocialPosts = [
  {
    id: 1,
    username: "user1",
    content: "Loving the new product range! #awesome",
    image: "https://picsum.photos/seed/social1/400/300",
  },
  {
    id: 2,
    username: "user2",
    content: "Great deals on the website today! #sale",
    image: "https://picsum.photos/seed/social2/400/300",
  },
  {
    id: 3,
    username: "user3",
    content: "Check out this cool product! #innovation",
    image: "https://picsum.photos/seed/social3/400/300",
  },
];

export default function SocialMediaFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate an API call delay
    setTimeout(() => {
      setPosts(dummySocialPosts);
    }, 1000);
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Social Media Feed
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-100 rounded-lg shadow p-4 transition transform hover:scale-105"
            >
              <img
                src={post.image}
                alt={post.username}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold">@{post.username}</h3>
              <p className="text-gray-700">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

//SocialMediaFeed;
