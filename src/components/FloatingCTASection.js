import React, { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';
import ConsultationModal from './ConsultationModal';
import useFormTracking from './useFormTracking';

const FloatingCTASection = ({ 
  showOnScroll = 300, 
  hideOnBottom = 200 // Hide when we're this many pixels from the bottom
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  
  // Track form submissions
  useFormTracking('consultation', isModalOpen);
  useFormTracking('download', isDownloading);

  const downloadCapabilitiesOverview = () => {
    setIsDownloading(true);
    
    // Track the download in analytics if available
    if (window.gtag) {
      window.gtag('event', 'download', {
        'event_category': 'engagement',
        'event_label': 'capabilities_overview_floating'
      });
    }
    
    // Create and trigger download
    const link = document.createElement('a');
    link.href = '/capabilities-overview.pdf';
    link.download = 'ITILITI-Capabilities-Overview.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Reset download state after a short delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return;
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show only when scrolled past threshold AND not near the bottom
      if (scrollPosition > showOnScroll && 
          (documentHeight - scrollPosition - windowHeight) > hideOnBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showOnScroll, hideOnBottom, isDismissed]);

  const handleDismiss = (e) => {
    e.stopPropagation();
    setIsDismissed(true);
    setIsVisible(false);
    
    // Track dismissal in analytics if available
    if (window.gtag) {
      window.gtag('event', 'dismiss', {
        'event_category': 'engagement',
        'event_label': 'floating_cta_dismissed'
      });
    }
    
    // Store dismissal in localStorage to remember user preference
    try {
      localStorage.setItem('floatingCTADismissed', 'true');
    } catch (e) {
      console.error('Error saving dismissal state:', e);
    }
  };
  
  // Check if CTA was previously dismissed
  useEffect(() => {
    try {
      const wasDismissed = localStorage.getItem('floatingCTADismissed') === 'true';
      if (wasDismissed) {
        setIsDismissed(true);
      }
    } catch (e) {
      // Ignore storage errors
    }
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-black to-blue-900 text-white p-4 shadow-lg z-50"
        style={{ 
          animation: 'slideUp 0.3s ease-out',
          boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}
      >
        <button 
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-white p-1 rounded-full hover:bg-white hover:bg-opacity-10"
          aria-label="Dismiss"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
          <div className="mb-4 sm:mb-0 text-center sm:text-left">
            <h3 className="text-lg font-bold">Ready to Transform Your Investment Firm's Technology?</h3>
            <p className="text-sm text-white text-opacity-90">Schedule a complimentary consultation today.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm"
              aria-label="Schedule a discovery call"
            >
              Schedule Discovery Call
            </button>
            <button 
              onClick={downloadCapabilitiesOverview}
              className="bg-transparent border border-white text-white px-4 py-2 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors text-sm flex items-center justify-center"
              disabled={isDownloading}
              aria-label="Download overview"
            >
              {isDownloading ? (
                <span>Downloading...</span>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  <span>Download Overview</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* ConsultationModal component */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
      <style jsx="true">{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default FloatingCTASection;