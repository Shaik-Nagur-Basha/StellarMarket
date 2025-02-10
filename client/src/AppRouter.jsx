// AppRouter.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import ProductDetail from "./components/products/ProductDetail";
import NotFound from "./components/common/NotFound";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import UserProfile from "./components/user/UserProfile";
import ReportsDashboard from "./components/analytics/ReportsDashboard";
import AnalyticsDashboard from "./components/analytics/AnalyticsDashboard";
import AdvancedAnalyticsDashboard from "./components/analytics/AdvancedAnalyticsDashboard";
import EnhancedAnalyticsDashboard from "./components/analytics/EnhancedAnalyticsDashboard";

import SocialMediaFeed from "./components/media/SocialMediaFeed";
import ProductComparison from "./components/products/ProductComparison";
import StoreLocator from "./components/additional-features/StoreLocator";
import AdvancedSearch from "./components/additional-features/AdvancedSearch";
import LiveOrderTracking from "./components/additional-features/LiveOrderTracking";
import CustomerSupportPortal from "./components/additional-features/CustomerSupportPortal";

import LoyaltyProgram from "./components/user/LoyaltyProgram";
import ReferralProgram from "./components/user/ReferralProgram";
import SocialSharing from "./components/media/SocialSharing";
import PersonalizedRecommendationsEngine from "./components/additional-features/PersonalizedRecommendationsEngine";
import VirtualTryOn from "./components/additional-features/VirtualTryOn";
import AdvancedChatbot from "./components/ai/AdvancedChatbot";
import SalesPerformanceDashboard from "./components/analytics/SalesPerformanceDashboard";
import AdvancedNLPChatbot from "./components/ai/AdvancedNLPChatbot";
import UserSegmentationDashboard from "./components/analytics/UserSegmentationDashboard";
import RealAIChatbot from "./components/ai/RealAIChatbot";

import LiveDataAnalyticsIntegration from "./components/analytics/LiveDataAnalyticsIntegration";
import AdvancedPaymentGatewayIntegration from "./components/payment/AdvancedPaymentGatewayIntegration";
import AdvancedShippingIntegration from "./components/additional-features/AdvancedShippingIntegration";
import RealTimeUserActivityDashboard from "./components/analytics/RealTimeUserActivityDashboard";

import RealStripePaymentIntegration from "./components/payment/RealStripePaymentIntegration";
import UPSShippingIntegration from "./components/shipping/UPSShippingIntegration";
import PushNotificationManager from "./components/ui/PushNotificationManager";
import PerformanceOptimizationDashboard from "./components/analytics/PerformanceOptimizationDashboard";

import FraudDetectionDashboard from "./components/dashboards/FraudDetectionDashboard";
import RealTimeDemandForecast from "./components/dashboards/RealTimeDemandForecast";
import SecurityAuditTool from "./components/dashboards/SecurityAuditTool";
import AdvancedUserFeedbackAnalyzer from "./components/dashboards/AdvancedUserFeedbackAnalyzer";
import { AuthProvider } from "./contexts/AuthContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Blog from "./components/blog/Blog";
import BlogDetail from "./components/blog/BlogDetail";

// Added/updated imports:
import SEOManager from "./components/seo/SEOManager";
import PrivateRoute from "./components/common/PrivateRoute";
import AdminRoute from "./components/common/AdminRoute";
import InventoryManagement from "./components/dashboards/InventoryManagement";
import AdminPanel from "./components/dashboards/AdminPanel";
import InteractiveUserSegmentationFilters from "./components/analytics/InteractiveUserSegmentationFilters";
import Cart from "./components/additional-features/Cart";
import Checkout from "./components/additional-features/Checkout";
import AdvancedAccessibilityChecker from "./components/analytics/AdvancedAccessibilityChecker";
import AugmentedRealityViewer from "./components/additional-features/AugmentedRealityViewer";

export default function AppRouter() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <>
          <SEOManager
            title="Professional E-commerce Website"
            description="A production-ready e-commerce platform with advanced security, fraud detection, demand forecasting, and user feedback analysis."
            keywords="e-commerce, security, fraud detection, demand forecast, user feedback"
          />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/cart"
              element={
                // <PrivateRoute>
                  <Cart />
                // </PrivateRoute>
              }
            />
            <Route
              path="/checkout"
              element={
                // <PrivateRoute>
                  <Checkout />
                // </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <UserProfile />
                </PrivateRoute>
              }
            />
            <Route path="/compare" element={<ProductComparison />} />
            <Route path="/store-locator" element={<StoreLocator />} />
            <Route path="/search" element={<AdvancedSearch />} />
            <Route path="/order-tracking" element={<LiveOrderTracking />} />
            <Route path="/support" element={<CustomerSupportPortal />} />
            <Route
              path="/inventory"
              element={
                <AdminRoute>
                  <InventoryManagement />
                </AdminRoute>
              }
            />
            <Route
              path="/loyalty"
              element={
                <PrivateRoute>
                  <LoyaltyProgram />
                </PrivateRoute>
              }
            />
            <Route
              path="/referral"
              element={
                <PrivateRoute>
                  <ReferralProgram />
                </PrivateRoute>
              }
            />
            <Route path="/social-sharing" element={<SocialSharing />} />
            <Route
              path="/personalized-recommendations"
              element={
                <PrivateRoute>
                  <PersonalizedRecommendationsEngine />
                </PrivateRoute>
              }
            />
            <Route path="/virtual-tryon" element={<VirtualTryOn />} />
            <Route path="/chatbot" element={<AdvancedChatbot />} />
            <Route
              path="/sales-dashboard"
              element={
                <AdminRoute>
                  <SalesPerformanceDashboard />
                </AdminRoute>
              }
            />
            <Route path="/nlp-chatbot" element={<AdvancedNLPChatbot />} />
            <Route
              path="/user-segmentation"
              element={
                <AdminRoute>
                  <UserSegmentationDashboard />
                </AdminRoute>
              }
            />
            <Route
              path="/real-ai-chatbot"
              element={
                <PrivateRoute>
                  <RealAIChatbot />
                </PrivateRoute>
              }
            />
            <Route
              path="/interactive-segmentation"
              element={
                <AdminRoute>
                  <InteractiveUserSegmentationFilters />
                </AdminRoute>
              }
            />
            <Route
              path="/live-analytics"
              element={
                <AdminRoute>
                  <LiveDataAnalyticsIntegration />
                </AdminRoute>
              }
            />
            <Route
              path="/advanced-payment"
              element={
                <PrivateRoute>
                  <AdvancedPaymentGatewayIntegration />
                </PrivateRoute>
              }
            />
            <Route
              path="/shipping-tracking"
              element={<AdvancedShippingIntegration />}
            />
            <Route
              path="/user-activity"
              element={
                <AdminRoute>
                  <RealTimeUserActivityDashboard />
                </AdminRoute>
              }
            />
            <Route
              path="/real-stripe-payment"
              element={
                <PrivateRoute>
                  <RealStripePaymentIntegration />
                </PrivateRoute>
              }
            />
            <Route path="/ups-shipping" element={<UPSShippingIntegration />} />
            <Route
              path="/push-notifications"
              element={<PushNotificationManager />}
            />
            <Route
              path="/performance"
              element={<PerformanceOptimizationDashboard />}
            />
            <Route
              path="/accessibility"
              element={<AdvancedAccessibilityChecker />}
            />
            <Route
              path="/fraud-detection"
              element={
                <AdminRoute>
                  <FraudDetectionDashboard />
                </AdminRoute>
              }
            />
            <Route
              path="/demand-forecast"
              element={
                <AdminRoute>
                  <RealTimeDemandForecast />
                </AdminRoute>
              }
            />
            <Route
              path="/security-audit"
              element={
                <AdminRoute>
                  <SecurityAuditTool />
                </AdminRoute>
              }
            />
            <Route
              path="/feedback-analysis"
              element={
                <AdminRoute>
                  <AdvancedUserFeedbackAnalyzer />
                </AdminRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <AdminPanel />
                </AdminRoute>
              }
            />
            <Route
              path="/reports"
              element={
                <AdminRoute>
                  <ReportsDashboard />
                </AdminRoute>
              }
            />
            <Route
              path="/analytics"
              element={
                <AdminRoute>
                  <AnalyticsDashboard />
                </AdminRoute>
              }
            />
            <Route
              path="/advanced-analytics"
              element={
                <AdminRoute>
                  <AdvancedAnalyticsDashboard />
                </AdminRoute>
              }
            />
            <Route
              path="/enhanced-analytics"
              element={
                <AdminRoute>
                  <EnhancedAnalyticsDashboard />
                </AdminRoute>
              }
            />
            <Route path="/ar-viewer" element={<AugmentedRealityViewer />} />
            <Route path="/social-feed" element={<SocialMediaFeed />} />
            <Route
              path="/fraud-detection"
              element={
                <AdminRoute>
                  <FraudDetectionDashboard />
                </AdminRoute>
              }
            />
            <Route
              path="/demand-forecast"
              element={
                <AdminRoute>
                  <RealTimeDemandForecast />
                </AdminRoute>
              }
            />
            <Route
              path="/security-audit"
              element={
                <AdminRoute>
                  <SecurityAuditTool />
                </AdminRoute>
              }
            />
            <Route
              path="/feedback-analysis"
              element={
                <AdminRoute>
                  <AdvancedUserFeedbackAnalyzer />
                </AdminRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      </LanguageProvider>
    </AuthProvider>
  );
}
