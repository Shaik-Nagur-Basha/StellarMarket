// components/LiveDataFeed.js
import React, { useEffect, useState } from "react";

export default function LiveDataFeed() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Dummy API call from JSONPlaceholder
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Live Data Feed</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

//LiveDataFeed;
