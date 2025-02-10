// components/AdminRoute.js
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function AdminRoute({ children }) {
  const { user } = useContext(AuthContext);
  if (!user || user.username !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Access Denied</h1>
      </div>
    );
  }
  return children;
}

//AdminRoute;
