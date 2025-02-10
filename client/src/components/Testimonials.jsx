// components/Testimonials.js
import React, { useState, useEffect } from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'Alice Johnson',
    feedback: 'This is the best product I have ever used. Excellent quality and customer service!',
    image: '/testimonial1.jpg',
  },
  {
    id: 2,
    name: 'Bob Smith',
    feedback: 'Amazing experience! Highly recommend this website for all your shopping needs.',
    image: '/testimonial2.jpg',
  },
  {
    id: 3,
    name: 'Carol White',
    feedback: 'Great variety of products and fast delivery. I love shopping here!',
    image: '/testimonial3.jpg',
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="relative">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4 shadow-lg"
              />
              <p className="text-xl italic text-gray-600 mb-2">"{testimonial.feedback}"</p>
              <p className="text-lg font-semibold text-gray-800">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
