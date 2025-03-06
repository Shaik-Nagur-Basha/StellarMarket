import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

export default function Home({ contentArray }) {
  const navigate = useNavigate();

  // Content metadata for the cards
  const contentMetadata = contentArray.map((content) => ({
    title: content.title,
    madeBy: content.madeBy,
    type: content.type,
    media: `../public/${content.type}s/${
      content.title + (content.type === "image" ? ".png" : ".mp4")
    }`,
  }));

  console.log("contentArray", contentArray);
  console.log(contentMetadata);

  // Gradients array for random application
  const gradients = [
    "bg-gradient-to-tl from-[#a7a0b7] via-[#fba45c] to-[#2abed0]",
    "bg-gradient-to-tr from-[#0cd0ca] via-[#d8a274] to-[#8468aa]",
    "bg-gradient-to-tl from-[#3eeef7] via-[#c4d05a] to-[#e782af]",
    "bg-gradient-to-r from-blue-500 to-indigo-600",
    "bg-gradient-to-r from-green-500 to-teal-500",
    "bg-gradient-to-r from-purple-500 to-pink-500",
    "bg-gradient-to-r from-red-500 to-orange-500",
    "bg-gradient-to-r from-yellow-500 to-amber-500",
    "bg-gradient-to-r from-teal-500 to-cyan-500",
    "bg-gradient-to-r from-gray-500 to-gray-700",
    "bg-gradient-to-r from-pink-500 to-red-500",
    "bg-gradient-to-r from-indigo-500 to-blue-500",
    "bg-gradient-to-r from-lime-500 to-green-500",
    "bg-gradient-to-r from-orange-500 to-yellow-500",
  ];

  const redirectTo = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 sm:p-6 lg:p-8">
      <div className="max-w-[2000px] mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-gradient">
          Welcome to NeoChat
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {contentMetadata.map((item, index) => {
            const randomGradient =
              gradients[Math.floor(Math.random() * gradients.length)];

            return (
              <div
                key={index}
                className={`${styles.card} group`}
                // style={{
                //   transitionDelay: `${index * 100}ms`,
                // }}
              >
                <div className={`${styles.cardGlow} ${randomGradient}`} />

                <div className={styles.cardContent}>
                  <div className={styles.mediaContainer}>
                    <div className={styles.cardMedia}>
                      {item.type === "video" ? (
                        <video autoPlay muted loop playsInline>
                          <source src={item.media} type="video/mp4" />
                        </video>
                      ) : (
                        <img src={item.media} alt={item.title} loading="lazy" />
                      )}
                      <div className={styles.cardCaption}>
                        <p className="text-xs sm:text-sm text-gray-200">
                          {item.madeBy}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => redirectTo(`/${item.title}`)}
                    className={`${styles.cardButton} ${randomGradient}`}
                  >
                    <div className={styles.buttonContent}>
                      <span>{item.title}</span>
                      <svg
                        className={styles.buttonIcon}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
