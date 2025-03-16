// App.js
import React, { Suspense, lazy } from "react";
import Navbar from "./components/common/Navbar";
import Hero from "./components/layout/Hero";
import Newsletter from "./components/layout/Newsletter";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import ChatWidget from "./components/ui/ChatWidget";
import NotificationWidget from "./components/ui/NotificationWidget";

// Lazy load larger components
const ParallaxBanner = lazy(() => import("./components/layout/ParallaxBanner"));
const VideoGallery = lazy(() => import("./components/media/VideoGallery"));
const SocialMediaFeed = lazy(() =>
  import("./components/media/SocialMediaFeed")
);
const AugmentedRealityViewer = lazy(() =>
  import("./components/additional-features/AugmentedRealityViewer")
);
const Home = lazy(() => import("./components/Home"));

// Loading component for Suspense fallback
const Loading = () => (
  <div className="flex items-center justify-center p-4">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="animate-fade-in">
        <NotificationWidget />
        <main className="container mx-auto px-4 space-y-12 py-20">
          <Hero />
          <Suspense fallback={<Loading />}>
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
          </Suspense>
          <Newsletter />
        </main>
      </div>
      <Footer />
      <div className="fixed bottom-4 right-4 space-y-4">
        <ScrollToTop className="animate-bounce-slow" />
        <ChatWidget className="animate-pulse-slow" />
      </div>
    </div>
  );
}
