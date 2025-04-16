import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page imports
import HomePage from './pages/HomePage';
import ResearchEnhancementPage from './pages/ResearchEnhancementPage';
import DueDiligenceAccelerationPage from './pages/DueDiligenceAccelerationPage';
import PortfolioAnalyticsPage from './pages/PortfolioAnalyticsPage';
import MarketTrendAnalysisPage from './pages/MarketTrendAnalysisPage';
import RegulatoryCompliancePage from './pages/RegulatoryCompliancePage';
import OutcomesPage from './pages/OutcomesPage';
import PartnersPage from './pages/PartnersPage';

// Common components
import EnhancedChatAssistant from './components/common/EnhancedChatAssistant';

function App() {
  return (
    <Router>
      <div className="App bg-gray-900 min-h-screen">
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<HomePage />} />
          
          {/* Service pages */}
          <Route path="/solutions/research" element={<ResearchEnhancementPage />} />
          <Route path="/solutions/due-diligence" element={<DueDiligenceAccelerationPage />} />
          <Route path="/solutions/portfolio" element={<PortfolioAnalyticsPage />} />
          <Route path="/solutions/market-trends" element={<MarketTrendAnalysisPage />} />
          <Route path="/solutions/compliance" element={<RegulatoryCompliancePage />} />
          <Route path="/outcomes" element={<OutcomesPage />} />
          <Route path="/partners" element={<PartnersPage />} />

          
          {/* Fallback route */}
          <Route path="*" element={<HomePage />} />
        </Routes>

{/* AI Chat Assistant */}
<EnhancedChatAssistant  ></EnhancedChatAssistant>

      </div>
    </Router>
  );
}

export default App;