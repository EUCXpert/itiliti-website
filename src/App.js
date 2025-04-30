// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainLandingPage from './pages/MainLandingPage';
import BoutiqueInvestmentApp from './components/BoutiqueInvestmentApp';
import AssessmentHub from './pages/AssessmentHub';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import ExitIntentProvider from './components/ExitIntentProvider';
//import WorkflowAutomation from './pages/WorkflowAutomation';
import ScrollToTop from './components/ScrollToTop';

// Import the dynamic service page component
import ServicePage from './pages/ServicePage';
import ServicesPage from './components/services/ServicesPage';

// Import the dynamic segment page component and segments page
import SegmentPage from './components/segments/common/SegmentPage';
import SegmentsPage from './components/segments/SegmentsPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ExitIntentProvider>
        <div className="flex flex-col min-h-screen">
          <Navigation 
            transparent={true} 
            dark={true} 
            showFloatingNav={true}
          />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<MainLandingPage />} />
              <Route path="/home" element={<BoutiqueInvestmentApp />} />
              
              {/* Services routes - added ServicesPage */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceId" element={<ServicePage />} />
              
              {/* Redirects from old service paths to new dynamic paths */}
              <Route path="/private-msp" element={<Navigate to="/services/private-msp" replace />} />
              <Route path="/cxo-services" element={<Navigate to="/services/cxo-services" replace />} />
              <Route path="/security" element={<Navigate to="/services/security-foundation" replace />} />
              <Route path="/regulatory-compliance" element={<Navigate to="/services/regulatory-compliance" replace />} />
              <Route path="/ai-services" element={<Navigate to="/services/ai-services" replace />} />
              <Route path="/microsoft-optimization" element={<Navigate to="/services/microsoft-optimization" replace />} />
              <Route path="/electronic-message-archiving" element={<Navigate to="/services/electronic-message-archiving" replace />} />
              
              {/* Assessment Routes */}
              <Route path="/assessments" element={<AssessmentHub />} />        
              
              {/* Segment Routes - Updated to use dynamic segment page */}
              <Route path="/segments" element={<SegmentsPage />} />
              <Route path="/segments/:segmentId" element={<SegmentPage />} />
              
              {/* Redirects from old segment paths to new dynamic paths */}
              <Route path="/private-equity" element={<Navigate to="/segments/private-equity" replace />} />
              <Route path="/family-offices" element={<Navigate to="/segments/family-offices" replace />} />
              <Route path="/venture-capital" element={<Navigate to="/segments/venture-capital" replace />} />
              <Route path="/real-estate" element={<Navigate to="/segments/real-estate" replace />} />
              
              {/* Other Routes */}
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ExitIntentProvider>
    </Router>
  );
}

export default App;