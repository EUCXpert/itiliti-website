import React, { useState, useEffect, useRef } from 'react';

/**
 * Ultimate Scrolling Logos Carousel
 * 
 * A highly customizable scrolling carousel for partner logos
 * with advanced options for visual presentation
 */
const UltimateScrollingLogosCarousel = ({
  // Content options
  title = "Our Partners",
  subtitle = "Trusted by leading firms",
  
  // Animation options
  duration = 30, // Animation duration in seconds
  pauseOnHover = true,
  reverseDirection = false,
  
  // Logo display options
  grayscale = true,
  colorizeOnHover = true,
  logoHeight = "h-16",
  logoSpacing = "mx-10", // Space between logos
  
  // Layout options
  backgroundColor = "bg-gradient-to-b from-white to-gray-50",
  containerPadding = "py-16",
  showFadeEffect = true,
  fadeWidth = "w-24",
  
  // Additional effects
  enableHoverScale = true,
  scaleAmount = 1.1, // How much to scale on hover
  
  // Number of times to duplicate logos (for sparse logos)
  duplicateSets = 2
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  
  // Partner logos data from public/partners directory
  const partnerLogos = [
    {
      id: 1,
      name: "Microsoft",
      imageSrc: "/partners/Microsoft.png"
    },
    {
      id: 2,
      name: "BlueFlame",
      imageSrc: "/partners/BlueFlame.png"
    },
    {
      id: 3,
      name: "Huntress",
      imageSrc: "/partners/Huntress.png"
    },
    {
      id: 4,
      name: "Kaseya",
      imageSrc: "/partners/Kaseya.png"
    },
    {
      id: 5,
      name: "DarkTrace",
      imageSrc: "/partners/DarkTrace.png"
    },
    {
      id: 6,
      name: "ThreatStop",
      imageSrc: "/partners/ThreatStop.png"
    }
  ];
  
  // Dynamic classes for logos
  const getLogoClasses = () => {
    const classes = [
      `max-${logoHeight}`,
      "max-w-full",
      "object-contain",
      logoSpacing // Space between logos
    ];
    
    if (grayscale) {
      classes.push("filter grayscale");
      
      if (colorizeOnHover) {
        classes.push("hover:grayscale-0 transition-all duration-300");
      }
    }
    
    return classes.join(" ");
  };
  
  // Dynamic classes for logo containers
  const getLogoContainerClasses = () => {
    const classes = [
      "flex",
      "items-center",
      "justify-center"
    ];
    
    if (enableHoverScale) {
      classes.push("transition-transform duration-300 hover:scale-" + (scaleAmount * 10));
    }
    
    return classes.join(" ");
  };
  
  // Animation style based on props
  const getAnimationStyle = () => {
    return {
      animationDuration: `${duration}s`,
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
      animationName: reverseDirection ? "scrollRight" : "scrollLeft",
      animationPlayState: isPaused ? "paused" : "running"
    };
  };
  
  // Create logos for seamless looping
  const renderLogos = () => {
    // Generate an array of duplicate sets for seamless looping
    return (
      <>
        {Array.from({ length: duplicateSets }).map((_, setIndex) => (
          <React.Fragment key={`set-${setIndex}`}>
            {partnerLogos.map((logo, logoIndex) => (
              <div 
                key={`${logo.id}-${setIndex}-${logoIndex}`}
                className={getLogoContainerClasses()}
              >
                <img 
                  src={logo.imageSrc}
                  alt={`${logo.name} logo`}
                  className={getLogoClasses()}
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </>
    );
  };
  
  // Get the background color for gradients
  const getBgColor = () => {
    if (backgroundColor.includes("bg-white")) return "white";
    if (backgroundColor.includes("bg-gray-900")) return "rgba(17, 24, 39, 1)";
    if (backgroundColor.includes("bg-blue-900")) return "rgba(30, 58, 138, 1)";
    
    // Default for light backgrounds
    return "rgba(249, 250, 251, 1)";
  };
  
  return (
    <section className={`${containerPadding} ${backgroundColor} overflow-hidden`}>
      <div className="container mx-auto px-6">
        {(title || subtitle) && (
          <div className="text-center mb-10">
            {title && <h2 className="text-3xl font-bold mb-3">{title}</h2>}
            {subtitle && <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
          </div>
        )}
        
        <div 
          ref={containerRef}
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => pauseOnHover && setIsPaused(true)}
          onMouseLeave={() => pauseOnHover && setIsPaused(false)}
          aria-label="Partner logos carousel"
        >
          {/* Fade-out effect on the left side */}
          {showFadeEffect && (
            <div 
              className={`absolute left-0 top-0 bottom-0 ${fadeWidth} z-10 pointer-events-none`}
              style={{
                background: `linear-gradient(to right, ${getBgColor()}, transparent)`
              }}
            ></div>
          )}
          
          {/* Fade-out effect on the right side */}
          {showFadeEffect && (
            <div 
              className={`absolute right-0 top-0 bottom-0 ${fadeWidth} z-10 pointer-events-none`}
              style={{
                background: `linear-gradient(to left, ${getBgColor()}, transparent)`
              }}
            ></div>
          )}
          
          {/* Scrolling content container */}
          <div 
            className="overflow-hidden relative py-4"
            aria-live="polite"
          >
            <div className="slider-track flex">
              {/* First set of logos */}
              <div className="flex items-center logos-slide" style={getAnimationStyle()}>
                {renderLogos()}
                {renderLogos()} {/* Duplicate again for seamless loop */}
              </div>
            </div>
          </div>
          
          {/* Pause indicator */}
          {pauseOnHover && isPaused && (
            <div className="absolute bottom-0 right-4 bg-white bg-opacity-80 text-xs text-gray-500 rounded-t-md px-2 py-1">
              Paused
            </div>
          )}
        </div>
      </div>
      
      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .logos-slide {
          animation-duration: ${duration}s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-name: ${reverseDirection ? 'scrollRight' : 'scrollLeft'};
          animation-play-state: ${isPaused ? 'paused' : 'running'};
        }
      `}</style>
    </section>
  );
};

export default UltimateScrollingLogosCarousel;