import React, { useState, useEffect } from 'react';
import { Calendar, X } from 'lucide-react';
import ConsultationModal from './ConsultationModal';

const FloatingCTAButton = ({ text = "Schedule a Consultation", showOnScroll = 300 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return;
      
      if (window.scrollY > showOnScroll) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showOnScroll, isDismissed]);

  const handleClick = () => {
    // Open the scheduling modal
    setIsModalOpen(true);
  };

  const handleDismiss = (e) => {
    e.stopPropagation();
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="fixed top-6 right-6 z-50 flex items-center"
        style={{ animation: 'floatIn 0.3s ease-out' }}
      >
        <button
          onClick={handleClick}
          className="hero-btn-float bg-blue-950 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
          <Calendar className="w-5 h-5 mr-2" />
          {text}
        </button>
        <button 
          onClick={handleDismiss}
          className="ml-2 bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-full shadow-lg"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
        <style jsx>{`
          @keyframes floatIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
      
      {/* Consultation Scheduling Modal */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default FloatingCTAButton;