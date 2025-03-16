import React from "react";
import "./styles/tailwind.css";
import "./styles/utilities.css";
import { Helmet } from "react-helmet";
import Navbar from "./components/common/Navbar";
import Hero from "./components/layout/Hero";
import ParallaxBanner from "./components/layout/ParallaxBanner";
import VideoGallery from "./components/media/VideoGallery";
import SocialMediaFeed from "./components/media/SocialMediaFeed";
import AugmentedRealityViewer from "./components/additional-features/AugmentedRealityViewer";
import Newsletter from "./components/layout/Newsletter";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import ChatWidget from "./components/ui/ChatWidget";
import NotificationWidget from "./components/ui/NotificationWidget";
import Home from "./components/Home";

export default function StellarMarket_v2() {
  return (
    <>
      <Helmet>
        <title>Professional Product Selling Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <Navbar />
        <div className="animate-fade-in">
          <NotificationWidget />
          <main className="container mx-auto px-4 space-y-12 py-20">
            <Hero />
            <Home />
            <ParallaxBanner
              imageUrl="https://miro.medium.com/v2/resize:fit:1400/0*-pOySD-Yf6yiyInP.jpg"
              title="Experience the Future"
              subtitle="Innovative designs meet modern technology"
              className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 shadow-glass rounded-2xl"
            />
            <section className="space-y-8">
              <VideoGallery />
              <SocialMediaFeed />
              <div className="bg-gradient-radial from-primary-500/20 to-transparent p-8 rounded-2xl">
                <AugmentedRealityViewer />
              </div>
            </section>
            <Newsletter />
          </main>
        </div>
        <Footer />
        <div className="fixed bottom-4 right-4 space-y-4">
          <ScrollToTop className="animate-bounce-slow" />
          <ChatWidget className="animate-pulse-slow" />
        </div>
      </div>
    </>
  );
}
