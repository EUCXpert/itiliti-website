import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ConsultationModal from './ConsultationModal'; // Make sure to import your modal component

const VideoHeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Add state for modal
  const videoRef = useRef(null);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <>
      <div className="relative overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            ref={videoRef}
            className="absolute object-cover w-full h-full"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={handleVideoLoaded}
            style={{ opacity: isVideoLoaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
          >
            <source src="/videos/investment-hero-video.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        {/* Gradient overlay at top */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/30 to-transparent z-10"></div>

        {/* Hero content */}
        <div className="container mx-auto px-6 py-16 md:py-24 relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Enterprise DNA,<br/>White-Glove Delivery</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-white">Specialized IT services for specialized alternative investment firms. Enterprise-grade expertise right-sized for your operation.</p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hero-btn-float bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Schedule a Consultation
            </button>
            <Link 
              to="/services" 
              className="hero-btn-float bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              onClick={() => window.scrollTo(0, 0)}
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Consultation modal */}
      {isModalOpen && (
        <ConsultationModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
};

export default VideoHeroSection;