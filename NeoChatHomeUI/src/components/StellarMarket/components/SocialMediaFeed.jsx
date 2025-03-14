import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faker } from "@faker-js/faker";

const SocialMediaFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "@stellarfashion",
      avatar: faker.image.avatar(),
      content:
        "Living in the future with our smart wearables! ✨ Experience the next level of tech fashion. #StellarTech #WearableTech",
      image: faker.image.urlPicsumPhotos(1200, 800),
      likes: 1234,
      comments: 89,
      platform: "instagram",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      username: "@techreview",
      avatar: faker.image.avatar(),
      content:
        "The AR glasses from StellarMarket are a game-changer! Incredible visual fidelity and comfort. Full review coming soon. 🌟 #TechReview #AR",
      image: faker.image.urlPicsumPhotos(1200, 800),
      likes: 856,
      comments: 156,
      platform: "twitter",
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      username: "@gadgetpro",
      avatar: faker.image.avatar(),
      content:
        "Unboxing the latest smart ring from StellarMarket - the features are mind-blowing! 💍 Stay tuned for the detailed review. #SmartTech #Innovation",
      image: faker.image.urlPicsumPhotos(1200, 800),
      likes: 2413,
      comments: 234,
      platform: "instagram",
      timestamp: "1 day ago",
    },
  ]);

  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const lastPostRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMorePosts();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const loadMorePosts = () => {
    setLoading(true);
    setTimeout(() => {
      const newPosts = [...Array(3)].map((_, index) => ({
        id: posts.length + index + 1,
        username: "@user" + (posts.length + index + 1),
        avatar: faker.image.avatar(),
        content: faker.helpers.arrayElement([
          "Just got my hands on the latest StellarMarket device! 🚀 #Innovation",
          "This smart ring is changing how I interact with technology! 💫",
          "The future is here with StellarMarket's AR experience! 👀",
          "Incredible customer service from @StellarMarket team! 🌟",
        ]),
        image: faker.image.urlPicsumPhotos(1200, 800),
        likes: Math.floor(Math.random() * 1000),
        comments: Math.floor(Math.random() * 200),
        platform: Math.random() > 0.5 ? "instagram" : "twitter",
        timestamp: faker.helpers.arrayElement([
          "Just now",
          "1 hour ago",
          "2 hours ago",
          "1 day ago",
        ]),
      }));

      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setLoading(false);
      setHasMore(posts.length < 20);
    }, 1500);
  };

  useEffect(() => {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".social-post").forEach((post) => {
      fadeObserver.observe(post);
    });

    return () => fadeObserver.disconnect();
  }, [posts]);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Social Media Feed
          </h2>
          <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
            See what people are saying about our products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              ref={index === posts.length - 1 ? lastPostRef : null}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="social-post transform transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-blue-500/10 dark:hover:shadow-blue-500/20 border border-gray-100 dark:border-gray-700 transition-all duration-300">
                {post.image && (
                  <div className="relative group">
                    <img
                      src={post.image}
                      alt="Social media post"
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                )}
                <div className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-purple-500/20 dark:ring-purple-400/20">
                      <img
                        src={post.avatar}
                        alt={post.username}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {post.username}
                      </p>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`text-sm ${
                            post.platform === "instagram"
                              ? "text-pink-500 dark:text-pink-400"
                              : "text-blue-500 dark:text-blue-400"
                          }`}
                        >
                          {post.platform}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          • {post.timestamp}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    {post.content}
                  </p>
                  <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                    <button className="flex items-center space-x-1 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill={post.liked ? "currentColor" : "none"}
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
                      <span>{post.likes.toLocaleString()}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
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
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex justify-center items-center mt-8 gap-3"
            >
              <div className="relative">
                <div className="w-14 h-14">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-[3px] border-gray-200 dark:border-gray-700"></div>

                  {/* Spinning gradient border */}
                  <div className="absolute inset-0 rounded-full border-[3px] border-transparent animate-[spin_1.5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,transparent_20%,theme(colors.blue.500)_50%,theme(colors.purple.500)_80%,transparent_100%)] [mask:linear-gradient(white,transparent_50%)] dark:bg-[conic-gradient(from_0deg,transparent_0%,transparent_20%,theme(colors.blue.400)_50%,theme(colors.purple.400)_80%,transparent_100%)]"></div>

                  {/* Inner glow */}
                  <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-400/10 dark:to-purple-400/10 animate-pulse blur-sm"></div>

                  {/* Center dot */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 animate-ping"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-gray-700 dark:text-gray-200 font-medium">
                  Loading more posts
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Please wait...
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SocialMediaFeed;
