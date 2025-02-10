import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter";
import { AuthProvider } from "./contexts/AuthContext"; // Ensure correct import
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import "./styles/tailwind.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <LanguageProvider>
        <AppRouter />
      </LanguageProvider>
    </BrowserRouter>
  </AuthProvider>
);
