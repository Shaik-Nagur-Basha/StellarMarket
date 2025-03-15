import React, { useEffect, useState } from "react";
import Header from "./layout/Header";
import FeaturedCategories from "./categories/FeaturedCategories";
import FeaturedProducts from "./products/FeaturedProducts";
import Testimonials from "./common/Testimonials";
import Newsletter from "./common/Newsletter";
// import "../styles/utilities.css";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Hero Section */}
      <Header />

      {/* Main Content */}
      <main className="relative">
        {/* Diagonal Section Divider */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 transform -skew-y-3" />

        {/* Featured Categories */}
        <div className="relative z-10">
          <FeaturedCategories />
        </div>

        {/* Products Section with Parallax */}
        <div className="relative parallax-scroll">
          <FeaturedProducts />
        </div>

        {/* Testimonials */}
        <Testimonials />

        {/* Newsletter */}
        <Newsletter />
      </main>
    </div>
  );
};

export default Home;
