// components/VideoGallery.js
import React, { useState, useRef, useEffect } from "react";
import { faker } from "@faker-js/faker";

const sampleVideos = [
  {
    id: 1,
    title: "Product Showcase",
    description: "Explore our latest collection",
    thumbnail: faker.image.urlPicsumPhotos({ width: 640, height: 480 }),
    url: "https://jiorockers.zone/files/Telugu%20Actors%20Collection/Prabhas/Baahubali%20The%20Beginning%20(2015)%20HDRip/Baahubali%20The%20Beginning%20(2015)%20HDRip%20SinglePart/Baahubali%20The%20Beginning%20(2015)%20HDRip.mp4",
    duration: "2:15",
  },
  {
    id: 2,
    title: "How It Works",
    description: "Step-by-step guide to our services",
    thumbnail: faker.image.urlPicsumPhotos({ width: 640, height: 480 }),
    url: "https://jiorockers.zone/files/Telugu%20Actors%20Collection/Prabhas/Baahubali%202%20The%20Conclusion%20(2017)%20HDRip/Baahubali%202%20The%20Conclusion%20(2017)%20HDRip%20SinglePart/Baahubali%202%20The%20Conclusion%20(2017)%20HDRip.mp4",
    duration: "3:45",
  },
  {
    id: 3,
    title: "Customer Stories",
    description: "Hear from our satisfied customers",
    thumbnail: faker.image.urlPicsumPhotos({ width: 640, height: 480 }),
    url: "https://jiorockers.zone/files/Telugu%20Actors%20Collection/Allu%20Arjun/Race%20Gurram%20(2014)%20HDRip/Race%20Gurram%20(2014)%20HDRip%20SinglePart/Race%20Gurram%20(2014)%20HDRip.mp4",
    duration: "4:30",
  },
  {
    id: 4,
    title: "Behind the Scenes",
    description: "See how we craft our products",
    thumbnail: faker.image.urlPicsumPhotos({ width: 640, height: 480 }),
    url: "https://jiorockers.zone/files/Telugu%20Movies/Telugu%202025%20Movies/Daaku%20Maharaaj%20(2025)%20Telugu%20HDRip/Daaku%20Maharaaj%20Telugu%20HDRip%20Single%20Part/Daaku%20Maharaaj%20(2025)%20Telugu%20HDRip%20Single%20Part.mp4",
    duration: "5:20",
  },
];

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const [hoveredVideo, setHoveredVideo] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const openModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="space-y-8 py-12">
      <div className="text-center relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
        </div>
        <div className="relative">
          <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text text-4xl font-bold px-4 py-2 inline-block">
            Featured Videos
          </span>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Watch our product demonstrations, tutorials, and customer testimonials
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sampleVideos.map((video) => (
          <div
            key={video.id}
            className="group relative bg-white/10 dark:bg-gray-800/10 rounded-2xl overflow-hidden backdrop-blur-sm shadow-glass hover:shadow-xl transition-all duration-500"
            onMouseEnter={() => setHoveredVideo(video.id)}
            onMouseLeave={() => setHoveredVideo(null)}
          >
            <div className="relative aspect-video">
              <img
                src={video.thumbnail}
                alt={video.title}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  hoveredVideo === video.id
                    ? "scale-110 blur-[1px]"
                    : "scale-100"
                }`}
              />
              <div
                className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
                  hoveredVideo === video.id ? "opacity-60" : "opacity-0"
                }`}
              />
              <button
                onClick={() => openModal(video)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div
                  className={`
                  w-16 h-16 rounded-full 
                  bg-white/20 backdrop-blur-sm 
                  flex items-center justify-center 
                  transform transition-all duration-500
                  ${
                    hoveredVideo === video.id
                      ? "scale-110 bg-white/30"
                      : "scale-90"
                  }
                `}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </button>
              <div className="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-black/70 backdrop-blur-sm text-white text-sm">
                {video.duration}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                {video.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="relative mx-4 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl animate-slide-up"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 text-white bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-colors"
              aria-label="Close modal"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="aspect-video bg-black">
              {/* <iframe
                src="https://jiorockers.zone/files/Telugu%20Actors%20Collection/Prabhas/Baahubali%20The%20Beginning%20(2015)%20HDRip/Baahubali%20The%20Beginning%20(2015)%20HDRip%20SinglePart/Baahubali%20The%20Beginning%20(2015)%20HDRip.mp4"
                title={selectedVideo?.title}
                frameBorder="0" className="w-[1156px] h-[648px] "
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              /> */}
              <video
                className="w-[1156px] h-[648px] "
                controls="true"
                autoplay=""
                name="media"
              >
                <source
                  src={selectedVideo?.url}
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="p-6 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-2">
                {selectedVideo?.title}
              </h3>
              <p className="text-gray-300">{selectedVideo?.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
