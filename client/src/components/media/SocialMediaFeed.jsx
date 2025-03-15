import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

const generateFeedItem = () => ({
  id: faker.string.uuid(),
  author: {
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
    handle: "@" + faker.internet.username,
  },
  content: faker.lorem.paragraph(),
  image: faker.image.urlPicsumPhotos({ width: 600, height: 400 }),
  likes: faker.number.int({ min: 10, max: 1000 }),
  comments: faker.number.int({ min: 5, max: 100 }),
  shares: faker.number.int({ min: 1, max: 50 }),
  timestamp: faker.date.recent({ days: 7 }),
  platform: faker.helpers.arrayElement(["twitter", "instagram", "facebook"]),
  verified: faker.datatype.boolean(),
  hashtags: Array.from(
    { length: faker.number.int({ min: 1, max: 4 }) },
    () => "#" + faker.word.sample().toLowerCase()
  ),
});

export default function SocialMediaFeed() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [activePost, setActivePost] = useState(null);

  useEffect(() => {
    // Simulate API fetch
    const fetchPosts = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setPosts(Array.from({ length: 9 }, generateFeedItem));
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  const filteredPosts =
    filter === "all" ? posts : posts.filter((post) => post.platform === filter);

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case "twitter":
        return (
          <svg
            className="w-5 h-5 text-blue-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
          </svg>
        );
      case "instagram":
        return (
          <svg
            className="w-5 h-5 text-pink-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        );
      case "facebook":
        return (
          <svg
            className="w-5 h-5 text-blue-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
        );
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
            Social Media Feed
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            See what people are saying about us across social media
          </p>
        </div>

        {/* Platform Filter */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {["all", "twitter", "instagram", "facebook"].map((platform) => (
            <button
              key={platform}
              onClick={() => setFilter(platform)}
              className={`
                px-6 py-2 rounded-full capitalize transition-all duration-300
                ${
                  filter === platform
                    ? "bg-primary-500 text-white shadow-lg"
                    : "bg-white/20 hover:bg-gray-300 dark:bg-gray-800/20 text-gray-600 dark:text-gray-400 hover:bg-white/30 dark:hover:bg-gray-700/30"
                }
              `}
            >
              <div className="flex items-center space-x-2">
                {platform !== "all" && getPlatformIcon(platform)}
                <span>{platform}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse bg-white/20 dark:bg-gray-800/20 rounded-2xl p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
                    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded" />
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <div
                key={post.id}
                className={`
                  group relative overflow-hidden
                  bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm
                  rounded-2xl shadow-glass hover:shadow-xl
                  transition-all duration-500
                  transform hover:scale-[1.02]
                  ${activePost === post.id ? "ring-2 ring-primary-500" : ""}
                `}
                onMouseEnter={() => setActivePost(post.id)}
                onMouseLeave={() => setActivePost(null)}
              >
                {/* Post Header */}
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {post.author.name}
                        </h3>
                        {post.verified && (
                          <svg
                            className="w-4 h-4 text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {post.author.handle}
                      </p>
                    </div>
                    {getPlatformIcon(post.platform)}
                  </div>

                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    {post.content}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {post.hashtags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-sm text-primary-500 dark:text-primary-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Post Image */}
                {post.image && (
                  <div className="relative aspect-video">
                    <img
                      src={post.image}
                      alt="Post content"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Post Footer */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                    <button className="flex items-center space-x-2 hover:text-red-500 transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-green-500 transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                      <span>{post.shares}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
