// components/NotificationWidget.js
import React, { useState, useEffect } from "react";

const NOTIFICATION_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
};

const NotificationIcon = ({ type }) => {
  const iconClasses = "h-6 w-6";

  switch (type) {
    case NOTIFICATION_TYPES.SUCCESS:
      return (
        <svg
          className={`${iconClasses} text-green-500`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case NOTIFICATION_TYPES.ERROR:
      return (
        <svg
          className={`${iconClasses} text-red-500`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case NOTIFICATION_TYPES.WARNING:
      return (
        <svg
          className={`${iconClasses} text-yellow-500`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      );
    default:
      return (
        <svg
          className={`${iconClasses} text-blue-500`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
  }
};

const NotificationWidget = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (type, message, duration = 5000) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, type, message }]);

    setTimeout(() => {
      removeNotification(id);
    }, duration);
  };

  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  // Example usage (remove in production)
  useEffect(() => {
    // Demo notifications
    setTimeout(
      () =>
        addNotification(
          NOTIFICATION_TYPES.SUCCESS,
          "Welcome to StellarMarket!"
        ),
      1000
    );
    setTimeout(
      () =>
        addNotification(NOTIFICATION_TYPES.INFO, "Check out our new products!"),
      2000
    );
  }, []);

  const getBackgroundColor = (type) => {
    switch (type) {
      case NOTIFICATION_TYPES.SUCCESS:
        return "bg-green-50 dark:bg-green-900/30";
      case NOTIFICATION_TYPES.ERROR:
        return "bg-red-50 dark:bg-red-900/30";
      case NOTIFICATION_TYPES.WARNING:
        return "bg-yellow-50 dark:bg-yellow-900/30";
      default:
        return "bg-blue-50 dark:bg-blue-900/30";
    }
  };

  return (
    <div className="fixed top-20 right-4 z-50 space-y-4 min-w-[320px] max-w-sm">
      {notifications.map(({ id, type, message }) => (
        <div
          key={id}
          className={`${getBackgroundColor(
            type
          )} backdrop-blur-sm shadow-glass rounded-lg p-4 flex items-start space-x-4 animate-slide-down`}
          role="alert"
        >
          <NotificationIcon type={type} />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {message}
            </p>
          </div>
          <button
            onClick={() => removeNotification(id)}
            className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <span className="sr-only">Close</span>
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export { NotificationWidget, NOTIFICATION_TYPES };
export default NotificationWidget;
