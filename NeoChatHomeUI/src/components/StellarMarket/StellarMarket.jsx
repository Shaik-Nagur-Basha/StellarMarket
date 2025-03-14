import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import AdvancedRecommendations from "./components/AdvancedRecommendations";
import FAQ from "./components/FAQ";
import VideoGallery from "./components/VideoGallery";
import SocialMediaFeed from "./components/SocialMediaFeed";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ChatWidget from "./components/ChatWidget";
import { ParallaxBanner } from "./components";
import AugmentedRealityViewer from "./components/AugmentedRealityViewer";
import ShippingCalculator from "./components/ShippingCalculator";
import Testimonials from "./components/Testimonials";

export default function StellarMarket() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <ScrollToTop />
      <ParallaxBanner />
      <Hero />
      <Products />
      <AugmentedRealityViewer />
      <AdvancedRecommendations />
      <ShippingCalculator />
      <VideoGallery />
      <Testimonials />
      <SocialMediaFeed />
      <FAQ />
      <Newsletter />
      <Footer />
      <ChatWidget />
    </div>
  );
}
