import React, { useState } from 'react';
import ExitIntentPopup from './EnhancedExitIntentPopup';
import ConsultationModal from './ConsultationModal';

const CustomExitIntent = () => {
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  
  // Handle when user clicks Schedule Now on the exit intent popup
  const handleScheduleRequest = () => {
    // Hide exit intent popup and show the consultation modal
    setShowConsultationModal(true);
    
    // Track this conversion in analytics (if you have analytics set up)
    if (window.gtag) {
      window.gtag('event', 'exit_intent_conversion', {
        'event_category': 'engagement',
        'event_label': 'exit_popup_schedule'
      });
    }
  };
  
  return (
    <>
      <ExitIntentPopup 
        isEnabled={true} 
        timeout={1000}
        sensitivity={20} 
        showOncePerSession={true}
        delayOnPageLoad={5000}
      >
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">Don't Miss Out!</h2>
          <p className="text-gray-600 mb-4">
            Boutique investment firms that implement enterprise-grade security see a <span className="font-bold text-blue-600">92% pass rate</span> in institutional investor due diligence.
          </p>
          <p className="text-gray-600 mb-6">
            Schedule a consultation to see how we can help protect your firm and improve your capital raising capabilities.
          </p>
          
          <button 
            onClick={handleScheduleRequest}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
          >
            Schedule Free Consultation
          </button>
          
          <p className="text-xs text-gray-500 mt-4">
            No commitment required. We respect your privacy and will not share your information.
          </p>
        </div>
      </ExitIntentPopup>
      
      {/* Use your existing ConsultationModal component */}
      <ConsultationModal
        isOpen={showConsultationModal}
        onClose={() => setShowConsultationModal(false)}
      />
    </>
  );
};

export default CustomExitIntent;