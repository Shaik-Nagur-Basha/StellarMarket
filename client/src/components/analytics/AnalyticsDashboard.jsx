// components/AnalyticsDashboard.js
import React from "react";
import PerformanceMonitor from "./PerformanceMonitor";
import UserBehaviorTracker from "./UserBehaviorTracker";

export default function AnalyticsDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Analytics Dashboard
        </h1>
        <PerformanceMonitor />
        <div className="bg-white rounded-lg shadow p-4 my-4">
          <h3 className="text-xl font-bold mb-2">User Behavior Tracking</h3>
          <p>Tracking user click events in the background.</p>
        </div>
      </div>
      {/* The UserBehaviorTracker component runs invisibly */}
      <UserBehaviorTracker />
    </div>
  );
}

//AnalyticsDashboard;
