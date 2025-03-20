import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLandingPage from './components/MainLandingPage';
import BoutiqueInvestmentApp from './components/BoutiqueInvestmentApp';
import AllServicesPage from './components/services/AllServicesPage';
import PrivateMSPServices from './components/services/PrivateMSP';
import CxOServices from './components/services/CxOServices';
import SecurityFoundation from './components/services/SecurityFoundation';
import EnhancedAIServices from './components/services/EnhancedAIServices';
import MicrosoftOptimization from './components/services/MicrosoftOptimization';
import RegulatoryCompliance from './components/services/RegulatoryCompliance';
import SegmentsPage from './components/segments/SegmentsPage';
import ElectronicMessageArchiving from './components/services/ElectronicMessageArchiving';
import AssessmentHub from './components/AssessmentHub';
import AboutUsPage from './components/AboutUsPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import ExitIntentProvider from './components/ExitIntentProvider';

// Import segment pages
import {
  HedgeFundSegment,
  PrivateEquitySegment,
  FamilyOfficeSegment,
  VentureCapitalSegment,
  RealEstateSegment
} from './components/segments/Segments';

function App() {
  return (
    <Router>
      <ExitIntentProvider>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<MainLandingPage />} />
              <Route path="/home" element={<BoutiqueInvestmentApp />} />
              <Route path="/services" element={<AllServicesPage />} />
              <Route path="/private-msp" element={<PrivateMSPServices />} />
              <Route path="/cxo-services" element={<CxOServices />} />
              <Route path="/security" element={<SecurityFoundation />} />
              <Route path="/regulatory-compliance" element={<RegulatoryCompliance />} />
              <Route path="/ai-services" element={<EnhancedAIServices />} />
              <Route path="/microsoft-optimization" element={<MicrosoftOptimization />} />
              <Route path="/electronic-message-archiving" element={<ElectronicMessageArchiving />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              
              {/* Assessment Routes */}
              <Route path="/assessments" element={<AssessmentHub />} />        
              
              {/* Segment Routes */}
              <Route path="/segments" element={<SegmentsPage />} />
              <Route path="/segments/hedge-funds" element={<HedgeFundSegment />} />
              <Route path="/segments/private-equity" element={<PrivateEquitySegment />} />
              <Route path="/segments/family-offices" element={<FamilyOfficeSegment />} />
              <Route path="/segments/venture-capital" element={<VentureCapitalSegment />} />
              <Route path="/segments/real-estate" element={<RealEstateSegment />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ExitIntentProvider>
    </Router>
  );
}

export default App;