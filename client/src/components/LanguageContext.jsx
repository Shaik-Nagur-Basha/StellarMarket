// contexts/LanguageContext.js
import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

const translations = {
  en: {
    welcome: "Welcome",
    products: "Products",
    blog: "Blog",
    cart: "Cart",
    checkout: "Checkout",
    profile: "Profile",
    admin: "Admin",
    // ...other keys as needed
  },
  es: {
    welcome: "Bienvenido",
    products: "Productos",
    blog: "Blog",
    cart: "Carrito",
    checkout: "Pagar",
    profile: "Perfil",
    admin: "Administrador",
    // ...other keys as needed
  },
  fr: {
    welcome: "Bienvenue",
    products: "Produits",
    blog: "Blog",
    cart: "Panier",
    checkout: "Caisse",
    profile: "Profil",
    admin: "Admin",
    // ...other keys as needed
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  
  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};
