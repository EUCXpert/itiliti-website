import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const EnhancedExitIntentPopup = ({ 
  isEnabled = true, 
  timeout = 1000, 
  sensitivity = 20,
  showOncePerSession = true,
  delayOnPageLoad = 5000,
  // New property to control exit intent behavior
  disableOnFormFocus = true,
  // New property to avoid showing when form is being filled
  formElementSelectors = 'form, input, select, textarea, [role="form"]',
  children
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [userOnForm, setUserOnForm] = useState(false);
  const popupRef = useRef(null);
  const exitIntentTimeoutRef = useRef(null);
  
  // Function to handle mouse leaving the viewport
  const handleMouseLeave = (e) => {
    // Only trigger if movement is towards the top of the page with enough sensitivity
    // and user is not currently focusing on a form element
    if (!hasTriggered && isEnabled && e.clientY <= sensitivity && !userOnForm) {
      setShowPopup(true);
      setHasTriggered(true);
      
      // If showOncePerSession is true, save to sessionStorage
      if (showOncePerSession) {
        sessionStorage.setItem('exitIntentShown', 'true');
      }
      
      // Track in analytics
      if (window.gtag) {
        window.gtag('event', 'exit_intent_triggered', {
          'event_category': 'engagement',
          'event_label': 'exit_popup_shown'
        });
      }
    }
  };
  
  // Track if user is focusing on form elements
  useEffect(() => {
    if (!disableOnFormFocus) return;
    
    const handleFocusIn = (e) => {
      if (e.target.matches(formElementSelectors)) {
        setUserOnForm(true);
      }
    };
    
    const handleFocusOut = (e) => {
      if (e.target.matches(formElementSelectors)) {
        // Add a short delay before re-enabling exit intent
        // This helps prevent immediate triggering when user tabs out of form
        setTimeout(() => {
          setUserOnForm(false);
        }, 500);
      }
    };
    
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    
    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [disableOnFormFocus, formElementSelectors]);
  
  useEffect(() => {
    // Check if we should show the popup based on session storage
    const hasBeenShown = sessionStorage.getItem('exitIntentShown') === 'true';
    if (showOncePerSession && hasBeenShown) {
      setHasTriggered(true);
      return;
    }
    
    // Add a delay before enabling the exit intent trigger after page load
    exitIntentTimeoutRef.current = setTimeout(() => {
      // Add event listener for mouse leave
      document.addEventListener('mouseleave', handleMouseLeave);
    }, delayOnPageLoad);
    
    return () => {
      if (exitIntentTimeoutRef.current) {
        clearTimeout(exitIntentTimeoutRef.current);
      }
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isEnabled, sensitivity, showOncePerSession, delayOnPageLoad, hasTriggered]);
  
  // Close the popup
  const handleClose = () => {
    setShowPopup(false);
    
    // Track closing in analytics
    if (window.gtag) {
      window.gtag('event', 'exit_intent_dismissed', {
        'event_category': 'engagement',
        'event_label': 'exit_popup_closed'
      });
    }
  };
  
  if (!showPopup) return null;
  
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-[9999] p-4"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        animation: 'fadeIn 0.3s ease-out',
      }}
      onClick={(e) => {
        // Close if clicking outside the popup
        if (popupRef.current && !popupRef.current.contains(e.target)) {
          handleClose();
        }
      }}
    >
      <div 
        ref={popupRef}
        className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative"
        style={{ 
          animation: 'slideIn 0.4s ease-out',
        }}
      >
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        
        {children}
        
        {/* Add animations */}
        <style jsx="true">{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default EnhancedExitIntentPopup;