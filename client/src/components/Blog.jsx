// components/Blog.js
import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';

const dummyPosts = [
  {
    id: 1,
    title: "The Future of E-commerce",
    excerpt: "Discover the trends shaping the future of online shopping.",
    image: "/blog1.jpg",
    content: "Full content of the blog post on the future of e-commerce..."
  },
  {
    id: 2,
    title: "Top 10 Product Trends in 2025",
    excerpt: "A detailed look at the top product trends to watch out for in 2025.",
    image: "/blog2.jpg",
    content: "Full content about top 10 product trends..."
  },
  {
    id: 3,
    title: "How to Optimize Your Online Store",
    excerpt: "Tips and tricks to enhance your online store's performance.",
    image: "/blog3.jpg",
    content: "Full content about optimizing your online store..."
  },
];

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setPosts(dummyPosts);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map(post => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
