// components/ErrorLogger.js
export function logError(error, errorInfo) {
    // Simulate sending error information to an external logging service
    console.error("Logged error:", error, errorInfo);
    // Example: window.Sentry.captureException(error);
  }
  