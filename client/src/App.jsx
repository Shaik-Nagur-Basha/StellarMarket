// App.js
import React from "react";
import Navbar from "./components/common/Navbar";
import Hero from "./components/layout/Hero";
import Products from "./components/products/Products";
import ParallaxBanner from "./components/layout/ParallaxBanner";
import AdvancedRecommendations from "./components/additional-features/AdvancedRecommendations";
import ShippingCalculator from "./components/shipping/ShippingCalculator";
import Testimonials from "./components/ui/Testimonials";
import FAQ from "./components/ui/FAQ";
import LiveDataFeed from "./components/analytics/LiveDataFeed";
import VideoGallery from "./components/media/VideoGallery";
import SocialMediaFeed from "./components/media/SocialMediaFeed";
import AugmentedRealityViewer from "./components/additional-features/AugmentedRealityViewer";
import Newsletter from "./components/layout/Newsletter";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import ChatWidget from "./components/ui/ChatWidget";
import NotificationWidget from "./components/ui/NotificationWidget";
import PaymentGateway from "./components/payment/PaymentGateway";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <NotificationWidget />
      <Hero />
      <Products />
      <ParallaxBanner
        imageUrl="https://miro.medium.com/v2/resize:fit:1400/0*-pOySD-Yf6yiyInP.jpg"
        title="Experience the Future"
        subtitle="Innovative designs meet modern technology."
      />
      <AdvancedRecommendations />
      <PaymentGateway />
      <ShippingCalculator />
      <Testimonials />
      <FAQ />
      <LiveDataFeed />
      <VideoGallery />
      <SocialMediaFeed />
      <AugmentedRealityViewer />
      <Newsletter />
      <Footer />
      <ScrollToTop />
      <ChatWidget />
    </div>
  );
}
