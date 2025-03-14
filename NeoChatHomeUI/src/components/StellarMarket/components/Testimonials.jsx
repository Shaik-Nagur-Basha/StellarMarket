import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faker } from "@faker-js/faker";

const testimonials = Array(6)
  .fill()
  .map(() => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    role: faker.person.jobTitle(),
    image: faker.image.urlPicsumPhotos(64, 64),
    content: faker.lorem.paragraph(),
    rating: Math.floor(Math.random() * 2) + 4, // 4 or 5 stars
  }));

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Don't just take our word for it
          </p>
        </div>

        <div className="relative h-[400px] sm:h-[350px] lg:h-[400px] max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center z-20 px-2 sm:px-4 md:px-8 lg:px-[-100px] pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="pointer-events-auto p-3 sm:p-4 rounded-full bg-white/90 dark:bg-slate-800/90 shadow-lg 
                hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] dark:hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]
                backdrop-blur-sm border border-purple-100 dark:border-purple-900
                transition-all duration-300 transform
                hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-indigo-500/10
                dark:hover:bg-gradient-to-r dark:hover:from-purple-500/20 dark:hover:to-indigo-500/20"
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="pointer-events-auto p-3 sm:p-4 rounded-full bg-white/90 dark:bg-slate-800/90 shadow-lg 
                hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] dark:hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]
                backdrop-blur-sm border border-purple-100 dark:border-purple-900
                transition-all duration-300 transform
                hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-indigo-500/10
                dark:hover:bg-gradient-to-r dark:hover:from-purple-500/20 dark:hover:to-indigo-500/20"
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mx-4">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        )
                      )}
                    </div>
                    <blockquote className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                      "{testimonials[currentIndex].content}"
                    </blockquote>
                    <cite className="not-italic">
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonials[currentIndex].role}
                      </p>
                    </cite>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 
                  ${
                    index === currentIndex
                      ? "w-6 bg-purple-600 dark:bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-purple-400 dark:hover:bg-purple-500"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
