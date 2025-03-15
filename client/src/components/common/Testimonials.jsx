import React, { useState } from "react";
import { faker } from "@faker-js/faker";
// import "../../styles/utilities.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Designer",
    quote:
      "The quality of products and the shopping experience is absolutely stellar!",
    rating: 5,
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-young-woman-talking-in-front-of-camera-42425-large.mp4",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Enthusiast",
    quote: "Best tech deals and amazing customer support. Highly recommended!",
    rating: 5,
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-man-talking-to-camera-in-living-room-42426-large.mp4",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Interior Designer",
    quote:
      "Found unique pieces for my projects. The AR viewer is a game-changer!",
    rating: 5,
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-young-woman-vlogger-recording-her-message-at-home-42431-large.mp4",
  },
].map((testimonial) => ({
  ...testimonial,
  avatar: faker.image.avatar(),
}));

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl transition-all duration-700 ${
        isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"
      }`}
    >
      {/* Video Background */}
      <div className="relative aspect-video overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={testimonial.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        <div className="glass-morphism rounded-xl p-4 transform transition-transform duration-500">
          <div className="flex items-start space-x-4">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full border-2 border-white/20"
            />
            <div>
              <div className="flex items-center space-x-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="mt-2 text-lg font-medium">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-white/70">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl shadow-sm dark:shadow-gray-400 shadow-gray-800">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our <span className="text-gradient-animate">Customers</span>{" "}
            Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real experiences from our valued customers around the world
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              className="focus:outline-none group"
              onClick={() => setActiveIndex(index)}
            >
              <TestimonialCard
                testimonial={testimonial}
                isActive={activeIndex === index}
              />
            </button>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-primary-500"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
