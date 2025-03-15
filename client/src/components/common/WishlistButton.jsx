import React, { useState } from "react";
// import "../../styles/utilities.css";

const WishlistButton = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      showNotification();
    }
  };

  const showNotification = () => {
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 2000);
  };

  const shareOptions = [
    {
      name: "WhatsApp",
      icon: "📱",
      link: `whatsapp://send?text=Check out this product: ${product?.name}`,
    },
    {
      name: "Facebook",
      icon: "👥",
      link: `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
    },
    {
      name: "Twitter",
      icon: "🐦",
      link: `https://twitter.com/intent/tweet?text=Check out this product: ${product?.name}`,
    },
    {
      name: "Email",
      icon: "✉️",
      link: `mailto:?subject=Check out this product&body=${product?.name}`,
    },
  ];

  return (
    <div className="relative inline-block">
      {/* Heart Button */}
      <button
        onClick={toggleLike}
        className={`relative p-3 rounded-full hover-lift transform transition-all duration-300
                   ${
                     isLiked
                       ? "text-red-500"
                       : "text-gray-400 hover:text-gray-500"
                   }`}
      >
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isLiked ? "scale-110" : "scale-100"
          }`}
          fill={isLiked ? "currentColor" : "none"}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>

        {/* Heart burst animation */}
        {isLiked && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 animate-ping"
                style={{
                  animation: `ping 1s cubic-bezier(0, 0, 0.2, 1) ${i * 0.1}s`,
                  backgroundColor: "currentColor",
                  opacity: 0.2,
                  borderRadius: "50%",
                  transform: `rotate(${i * 60}deg) translateY(-10px)`,
                }}
              />
            ))}
          </div>
        )}
      </button>

      {/* Share Button */}
      <button
        onClick={() => setShowShareMenu(!showShareMenu)}
        className="p-3 text-gray-400 hover:text-gray-500 hover-lift transform transition-all duration-300"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
      </button>

      {/* Share Menu */}
      {showShareMenu && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowShareMenu(false)}
          />
          <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black/5 z-50 transform transition-all duration-200 origin-top-right animate-scale-in">
            <div className="py-2">
              {shareOptions.map((option, index) => (
                <a
                  key={option.name}
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(option.link, "_blank", "width=600,height=400");
                  }}
                >
                  <span className="mr-2">{option.icon}</span>
                  {option.name}
                </a>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Success Notification */}
      <div
        className={`fixed bottom-4 right-4 bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-lg
                   transform transition-all duration-300 z-50 flex items-center space-x-2
                   ${
                     showConfirmation
                       ? "translate-y-0 opacity-100"
                       : "translate-y-10 opacity-0"
                   }`}
      >
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="text-gray-900 dark:text-white">
          Added to wishlist!
        </span>
      </div>
    </div>
  );
};

export default WishlistButton;
