// components/PerformanceMonitor.js
import React, { useState, useEffect } from "react";

export default function PerformanceMonitor() {
  const [loadTime, setLoadTime] = useState(0);

  useEffect(() => {
    const timing = window.performance.timing;
    // Calculate load time (in milliseconds)
    const calculatedLoadTime = timing.loadEventEnd - timing.navigationStart;
    setLoadTime(calculatedLoadTime);
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow p-4 my-4">
      <h3 className="text-xl font-bold mb-2">Performance Metrics</h3>
      <p>Page Load Time: {loadTime} ms</p>
    </div>
  );
}

//PerformanceMonitor;
