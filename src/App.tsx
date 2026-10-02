import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { DomesticHubPage } from './pages/DomesticHubPage';
import { InternationalHubPage } from './pages/InternationalHubPage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { PackageDetailPage } from './pages/PackageDetailPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { EnquiryPage } from './pages/EnquiryPage';
import { LegalPage } from './pages/LegalPage';

// Scroll to top helper component
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [prefilledDestination, setPrefilledDestination] = useState<string>('');

  const handleOpenEnquiry = (destinationName?: string) => {
    if (destinationName) {
      setPrefilledDestination(destinationName);
    } else {
      setPrefilledDestination('');
    }
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans flex flex-col justify-between selection:bg-[#F7941D] selection:text-white">

        {/* Header */}
        <Header onOpenEnquiry={handleOpenEnquiry} />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/about" element={<AboutPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/services" element={<ServicesPage onOpenEnquiry={handleOpenEnquiry} />} />

            {/* Destination Hubs */}
            <Route path="/destinations/domestic" element={<DomesticHubPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/destinations/international" element={<InternationalHubPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/destinations/:category/:id" element={<DestinationDetailPage onOpenEnquiry={handleOpenEnquiry} />} />

            {/* Package Details */}
            <Route path="/packages/:slug" element={<PackageDetailPage onOpenEnquiry={handleOpenEnquiry} />} />

            {/* Other Key Pages */}
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/enquire" element={<EnquiryPage />} />

            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<LegalPage />} />
            <Route path="/terms-and-conditions" element={<LegalPage />} />
            <Route path="/cancellation-refund-policy" element={<LegalPage />} />
            <Route path="/travel-booking-terms" element={<LegalPage />} />
            <Route path="/disclaimer" element={<LegalPage />} />

            {/* Catch-all: redirect unknown routes to homepage */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Floating Action Controls */}
        <FloatingWhatsApp onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Global Enquiry Modal */}
        <EnquiryModal
          isOpen={isEnquiryModalOpen}
          onClose={handleCloseEnquiry}
          prefillDestination={prefilledDestination}
        />

      </div>
    </Router>
  );
}

export default App;
