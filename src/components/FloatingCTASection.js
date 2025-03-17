import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import ConsultationModal from './ConsultationModal';

const FloatingCTASection = ({ 
  showOnScroll = 300, 
  hideOnBottom = 200 // Hide when we're this many pixels from the bottom
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const downloadCapabilitiesOverview = () => {
    const link = document.createElement('a');
    link.href = '/capabilities-overview.pdf';
    link.download = 'ITILITI-Capabilities-Overview.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
  };

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
            >
              Schedule Discovery Call
            </button>
            <button 
              onClick={downloadCapabilitiesOverview}
              className="bg-transparent border border-white text-white px-4 py-2 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors text-sm"
            >
              Download Overview
            </button>
          </div>
        </div>
      </div>
      
      {/* Modal */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
      <style jsx>{`
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