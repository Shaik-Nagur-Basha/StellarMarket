// components/LiveDataAnalyticsIntegration.js
import React, { useEffect, useState } from "react";

export default function LiveDataAnalyticsIntegration() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      // Simulate fetching live analytics data from an API endpoint
      fetch("https://jsonplaceholder.typicode.com/comments?_limit=5")
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error));
    };
    // Initial fetch
    fetchData();
    // Fetch new data every 15 seconds
    const interval = setInterval(fetchData, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Live Data Analytics
        </h2>
        {data.length === 0 ? (
          <p className="text-center">Loading live analytics data...</p>
        ) : (
          <ul>
            {data.map((item) => (
              <li key={item.id} className="border p-4 mb-4 rounded">
                <h3 className="font-bold">{item.name}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

//LiveDataAnalyticsIntegration;
