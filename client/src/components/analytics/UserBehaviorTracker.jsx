import React, { useEffect, useRef } from "react";

export default function UserBehaviorTracker() {
  const clicksRef = useRef([]);

  useEffect(() => {
    const handleClick = (e) => {
      const clickEvent = {
        x: e.clientX,
        y: e.clientY,
        time: new Date().toLocaleTimeString(),
      };
      clicksRef.current.push(clickEvent);
    };

    document.addEventListener("click", handleClick);

    const interval = setInterval(() => {
      if (clicksRef.current.length > 0) {
        console.log("User behavior data sent:", clicksRef.current);
        // Simulate sending data to an API endpoint
        clicksRef.current = [];
      }
    }, 30000); // every 30 seconds

    return () => {
      document.removeEventListener("click", handleClick);
      clearInterval(interval);
    };
  }, []);

  // This component does not render any UI
  return null;
}
