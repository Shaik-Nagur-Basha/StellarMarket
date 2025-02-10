// components/Reviews.js
import React, { useState } from "react";

export default function Reviews({ initialReviews = [] }) {
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleAddReview = (e) => {
    e.preventDefault();
    const review = { id: Date.now(), text: newReview, rating };
    setReviews([review, ...reviews]);
    setNewReview("");
    setRating(0);
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Reviews</h3>
      <form onSubmit={handleAddReview} className="mb-6">
        <div className="flex items-center mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              onClick={() => setRating(star)}
              className={`text-2xl ${
                star <= rating ? "text-yellow-400" : "text-gray-400"
              }`}
            >
              ★
            </button>
          ))}
        </div>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review here..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
          rows="3"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit Review
        </button>
      </form>
      <ul>
        {reviews.map((review) => (
          <li key={review.id} className="border-b border-gray-200 pb-4 mb-4">
            <div className="flex items-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-xl ${
                    star <= review.rating ? "text-yellow-400" : "text-gray-400"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-700">{review.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

//Reviews;
