// App.js
import React from "react";
import Navbar from "./components/common/Navbar";
import Hero from "./components/layout/Hero";
import Products from "./components/products/Products";
import ParallaxBanner from "./components/layout/ParallaxBanner";
import AdvancedRecommendations from "./components/AdvancedRecommendations";
import PaymentGateway from "./components/PaymentGateway";
import ShippingCalculator from "./components/ShippingCalculator";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import LiveDataFeed from "./components/LiveDataFeed";
import VideoGallery from "./components/VideoGallery";
import SocialMediaFeed from "./components/media/SocialMediaFeed";
import AugmentedRealityViewer from "./components/AugmentedRealityViewer";
import Newsletter from "./components/layout/Newsletter";
import Footer from "./components/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import ChatWidget from "./components/ChatWidget";
import NotificationWidget from "./components/ui/NotificationWidget";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <NotificationWidget />
      <Hero />
      <Products />
      <ParallaxBanner
        imageUrl="/parallax.jpg"
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

export default App;
