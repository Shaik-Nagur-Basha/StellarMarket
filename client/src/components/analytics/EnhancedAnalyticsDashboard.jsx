// components/EnhancedAnalyticsDashboard.js
import React from "react";
import PerformanceMonitor from "../PerformanceMonitor";
import PredictiveAnalytics from "../PredictiveAnalytics";
import SentimentAnalysis from "../SentimentAnalysis";
import UserBehaviorTracker from "../UserBehaviorTracker";

function EnhancedAnalyticsDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Enhanced Analytics Dashboard
        </h1>
        <PerformanceMonitor />
        <PredictiveAnalytics />
        <SentimentAnalysis />
        <div className="bg-white rounded-lg shadow p-4 my-4">
          <h3 className="text-xl font-bold mb-2">User Behavior Tracking</h3>
          <p>
            Continuously tracking user interactions for actionable insights.
          </p>
        </div>
      </div>
      {/* The UserBehaviorTracker runs invisibly */}
      <UserBehaviorTracker />
    </div>
  );
}

export default EnhancedAnalyticsDashboard;
