// components/BlogPost.js
import React from 'react';
import { Link } from 'react-router-dom';

function BlogPost({ post }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-700 mb-4">{post.excerpt}</p>
        <Link to={`/blog/${post.id}`} className="text-blue-500 hover:underline font-bold">
          Read More →
        </Link>
      </div>
    </div>
  );
}

export default BlogPost;
