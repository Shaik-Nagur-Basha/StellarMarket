// components/VideoGallery.js
import React, { useState } from 'react';
import Modal from './Modal';

const videos = [
  {
    id: 1,
    title: 'Product Overview',
    thumbnail: '/video1.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 2,
    title: 'How to Use Our Product',
    thumbnail: '/video2.jpg',
    videoUrl: 'https://www.youtube.com/embed/oHg5SJYRHA0'
  },
  {
    id: 3,
    title: 'Customer Testimonials',
    thumbnail: '/video3.jpg',
    videoUrl: 'https://www.youtube.com/embed/3GwjfUFyY6M'
  }
];

function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Video Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map(video => (
            <div key={video.id} className="cursor-pointer" onClick={() => openVideo(video)}>
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover rounded-lg shadow hover:shadow-2xl transition-shadow duration-300"
              />
              <h3 className="mt-2 text-xl font-semibold text-center">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>
      {selectedVideo && (
        <Modal isOpen={true} onClose={closeVideo}>
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedVideo.title}</h2>
            <div className="w-full" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe 
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
              ></iframe>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}

export default VideoGallery;
