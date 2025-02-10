// components/BlogDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const dummyPosts = [
  {
    id: 1,
    title: "The Future of E-commerce",
    image: "/blog1.jpg",
    content: "Full content of the blog post on the future of e-commerce. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero vel nisl auctor tincidunt."
  },
  {
    id: 2,
    title: "Top 10 Product Trends in 2025",
    image: "/blog2.jpg",
    content: "Full content about top 10 product trends. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel mauris nec nulla hendrerit interdum."
  },
  {
    id: 3,
    title: "How to Optimize Your Online Store",
    image: "/blog3.jpg",
    content: "Full content about optimizing your online store. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac nisi at orci aliquet auctor."
  },
];

function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Simulate fetching the blog post by id
    const foundPost = dummyPosts.find(p => p.id === parseInt(id));
    setPost(foundPost);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <h1 className="text-2xl font-bold">Blog post not found.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-700 mb-6">{post.content}</p>
          {/* Additional features like comments can be added here */}
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
