import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * Enhanced Announcement Banner with text effects
 * 
 * Features:
 * - Typing effect animation for announcement text
 * - Pulsing highlight for the CTA
 * - Smooth entrance animation
 * - Optional countdown timer for time-sensitive announcements
 */
const EnhancedAnnouncement = ({
  text,
  link,
  variant = 'info',
  typingSpeed = 30,
  showCountdown = false,
  countdownDate,
  dismissible = true,
  onDismiss = () => {}
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [highlightPulse, setHighlightPulse] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({});
  const [isVisible, setIsVisible] = useState(true);
  
  // Typing effect for announcement text
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    } else {
      // Start pulsing highlight after text is fully typed
      const interval = setInterval(() => {
        setHighlightPulse(prev => !prev);
      }, 2000);
      
      return () => clearInterval(interval);
    }
  }, [currentIndex, text, typingSpeed]);
  
  // Countdown timer functionality
  useEffect(() => {
    if (showCountdown && countdownDate) {
      const calculateTimeLeft = () => {
        const difference = new Date(countdownDate) - new Date();
        
        if (difference > 0) {
          return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
        
        return null;
      };
      
      const timer = setTimeout(() => {
        setTimeRemaining(calculateTimeLeft());
      }, 1000);
      
      setTimeRemaining(calculateTimeLeft());
      
      return () => clearTimeout(timer);
    }
  }, [showCountdown, countdownDate, timeRemaining]);
  
  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss();
  };
  
  if (!isVisible) return null;
  
  // Determine background and text colors based on variant
  const variantStyles = {
    info: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800'
  };
  
  return (
    <div 
      className={`py-2 px-4 text-center text-sm font-medium ${variantStyles[variant]} relative overflow-hidden`}
      style={{
        animation: 'slideDown 0.5s ease-out forwards'
      }}
    >
      {/* Animated gradient background for emphasis */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(90deg, 
            transparent 0%, 
            rgba(255,255,255,0.8) 50%, 
            transparent 100%)`,
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s infinite'
        }}
      />
      
      <div className="flex items-center justify-center">
        {/* Main announcement text with typing effect */}
        <span className="relative">
          {displayText}
          {currentIndex < text.length && (
            <span className="animate-blink">|</span>
          )}
        </span>
        
        {/* Link with pulsing highlight effect */}
        {link && currentIndex >= text.length && (
          <Link 
            to={link} 
            className={`ml-2 font-bold flex items-center relative ${
              highlightPulse ? 'text-blue-600' : ''
            }`}
            style={{
              transition: 'color 0.3s ease'
            }}
          >
            Learn more
            <ArrowRight className="w-4 h-4 ml-1" />
            
            {/* Pulsing underline effect */}
            <span 
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-current transform origin-left ${
                highlightPulse ? 'scale-x-100' : 'scale-x-0'
              }`}
              style={{
                transition: 'transform 0.3s ease'
              }}
            />
          </Link>
        )}
        
        {/* Countdown timer display */}
        {showCountdown && timeRemaining && (
          <div className="ml-4 flex items-center space-x-2">
            <span className="font-bold">Ends in:</span>
            {timeRemaining.days > 0 && (
              <span className="bg-white bg-opacity-30 px-2 py-1 rounded">
                {timeRemaining.days}d
              </span>
            )}
            <span className="bg-white bg-opacity-30 px-2 py-1 rounded">
              {timeRemaining.hours}h
            </span>
            <span className="bg-white bg-opacity-30 px-2 py-1 rounded">
              {timeRemaining.minutes}m
            </span>
            <span className="bg-white bg-opacity-30 px-2 py-1 rounded animate-pulse">
              {timeRemaining.seconds}s
            </span>
          </div>
        )}
      </div>
      
      {/* Dismiss button */}
      {dismissible && (
        <button 
          onClick={handleDismiss}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-current opacity-60 hover:opacity-100 focus:outline-none"
          aria-label="Dismiss announcement"
        >
          ×
        </button>
      )}
      
      {/* Animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        
        .animate-blink {
          animation: blink 0.8s infinite;
        }
        
        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default EnhancedAnnouncement;