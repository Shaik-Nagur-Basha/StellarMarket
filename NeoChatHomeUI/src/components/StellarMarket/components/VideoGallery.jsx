import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { faker } from "@faker-js/faker";

const VideoGallery = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const videoPlayerRef = useRef(null);

  const videos = [
    {
      id: 1,
      title: "Smart Ring Features",
      thumbnail: "https://images.pexels.com/photos/4145349/pexels-photo-4145349.jpeg",
      url: "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2d74187a30465a40b85407&profile_id=164&oauth2_token_id=57447761",
      duration: "0:30",
      description: "Discover our revolutionary smart ring technology in action",
    },
    {
      id: 2,
      title: "AR Experience Demo",
      thumbnail: faker.image.urlPicsumPhotos(800, 800),
      url: "https://player.vimeo.com/external/477735779.sd.mp4?s=ea693644545e25772ee07dfbc28915e3d8f4a947&profile_id=164&oauth2_token_id=57447761",
      duration: "0:20",
      description: "Experience the future with our AR glasses",
    },
    {
      id: 3,
      title: "Customer Reviews",
      thumbnail: "https://images.pexels.com/photos/5699163/pexels-photo-5699163.jpeg",
      url: "https://player.vimeo.com/external/449652379.sd.mp4?s=729cc35399b27824db23aa74a7e46601090dbf08&profile_id=164&oauth2_token_id=57447761",
      duration: "0:15",
      description: "Real customers share their StellarMarket experiences",
    },
    {
      id: 4,
      title: "Tech Innovation",
      thumbnail: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg",
      url: "https://player.vimeo.com/external/459389137.sd.mp4?s=42d25b89495d0251556f9974b56db253e19ba12e&profile_id=164&oauth2_token_id=57447761",
      duration: "0:25",
      description: "See how we're pushing technological boundaries",
    },
  ];

  const handleVideoClick = (video) => {
    setActiveVideo(video);
    if (videoPlayerRef.current) {
      videoPlayerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            Video Gallery
          </h2>
          <p className="text-gray-600 dark:text-gray-300 transition-colors">
            Watch our product showcases and customer testimonials
          </p>
        </motion.div>

        {activeVideo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            ref={videoPlayerRef}
            className="max-w-4xl mx-auto mb-16 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300"
          >
            <div className="w-full h-0 pb-[56.25%] relative">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                controls
                autoPlay
                src={activeVideo.url}
                playsInline
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">
                {activeVideo.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors">
                {activeVideo.description}
              </p>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleVideoClick(video)}
              className="cursor-pointer group relative z-0 hover:z-10 flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl dark:shadow-blue-500/10 dark:hover:shadow-blue-500/20 border border-gray-100 dark:border-gray-700 transition-all duration-300 min-h-[250px]"
            >
              <div className="relative w-full pb-[56.25%] overflow-hidden bg-gray-100 dark:bg-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 animate-pulse" />
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  onLoad={(e) =>
                    e.target.parentElement
                      .querySelector(".animate-pulse")
                      ?.remove()
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 dark:bg-gray-800/90 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg">
                      <svg
                        className="w-8 h-8 text-blue-600 dark:text-blue-400 transform group-hover:scale-110 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-semibold mb-1 text-lg group-hover:text-blue-400 transition-colors duration-300">
                    {video.title}
                  </h3>
                  <span className="inline-block text-gray-300 text-sm bg-black/30 px-2 py-1 rounded-full transform group-hover:scale-105 transition-all duration-300 group-hover:bg-blue-900/50">
                    {video.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
