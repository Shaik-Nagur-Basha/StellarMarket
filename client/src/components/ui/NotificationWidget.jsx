// components/NotificationWidget.js
import React, { useEffect, useState } from "react";

export default function NotificationWidget() {
  const [notifications, setNotifications] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate receiving a notification
      setNotifications((prev) => [
        ...prev,
        `New notification at ${new Date().toLocaleTimeString()}`,
      ]);
      setVisible(true);
      // Hide after 5 seconds
      setTimeout(() => setVisible(false), 5000);
    }, 15000); // Every 15 seconds

    return () => clearInterval(interval);
  }, []);

  if (!visible || notifications.length === 0) return null;

  return (
    <div className="fixed top-16 right-4 bg-yellow-200 text-yellow-900 p-4 rounded shadow-lg">
      <h4 className="font-bold mb-2">Notifications</h4>
      <ul>
        {notifications.slice(-3).map((note, index) => (
          <li key={index} className="text-sm">
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
}
