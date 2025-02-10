import React, { useState, useEffect } from "react";

export default function PushNotificationManager() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate receiving a new push notification every 20 seconds
      const newNotification = {
        id: Date.now(),
        title: "New Update",
        message: "Check out our latest products and offers!",
      };
      setNotifications((prev) => [newNotification, ...prev]);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 space-y-2 z-50">
      {notifications.map((n) => (
        <div
          key={n.id}
          className="bg-blue-500 text-white p-4 rounded shadow-lg"
        >
          <h4 className="font-bold">{n.title}</h4>
          <p>{n.message}</p>
        </div>
      ))}
    </div>
  );
}
