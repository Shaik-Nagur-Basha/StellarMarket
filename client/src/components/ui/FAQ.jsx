// components/FAQ.js
import React, { useState } from "react";

const faqData = [
  {
    question: "What is the return policy?",
    answer:
      "You can return the product within 30 days of purchase. Please refer to our Return Policy for more details.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order is shipped, you will receive a tracking number via email.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to most countries. Shipping fees may vary based on your location.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        {faqData.map((item, index) => (
          <div key={index} className="mb-4 border-b pb-4">
            <button
              onClick={() => toggleOpen(index)}
              className="w-full text-left text-xl font-semibold text-gray-800 flex justify-between items-center focus:outline-none"
            >
              {item.question}
              <span className="text-2xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

//FAQ;
