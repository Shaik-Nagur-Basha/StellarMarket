// components/SocialSharing.js
import React from "react";

export default function SocialSharing() {
  const shareUrl = window.location.href;
  const title = document.title || "Check out this awesome website!";

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-6 text-center">
        <h1 className="text-3xl font-bold mb-6">Share This Page</h1>
        <div className="flex justify-center space-x-4">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              shareUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Facebook
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              shareUrl
            )}&text=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Twitter
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              shareUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

//SocialSharing;
