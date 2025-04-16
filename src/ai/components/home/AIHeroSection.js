import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const AIHeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const canvasRef = useRef(null);
  const headlineText = "Enterprise AI for Alternative Investment";
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSubheadline, setShowSubheadline] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [activeHint, setActiveHint] = useState(null);
  
  // Data points that float around the hero section
  const dataPoints = [
    { x: '15%', y: '20%', label: 'Risk Analysis', color: 'bg-blue-500' },
    { x: '80%', y: '30%', label: 'Portfolio Insights', color: 'bg-purple-500' },
    { x: '25%', y: '75%', label: 'Market Trends', color: 'bg-green-500' },
    { x: '70%', y: '65%', label: 'Research Enhancement', color: 'bg-amber-500' },
    { x: '55%', y: '20%', label: 'Due Diligence', color: 'bg-pink-500' },
    { x: '35%', y: '40%', label: 'Compliance', color: 'bg-indigo-500' },
  ];
  
  // Typing effect for headline
  useEffect(() => {
    if (currentIndex < headlineText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + headlineText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    } else {
      // Show other elements after headline is typed
      setTimeout(() => setShowSubheadline(true), 400);
      setTimeout(() => setShowButtons(true), 800);
    }
  }, [currentIndex]);
  
  // Particle network effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      initParticles();
    };
    
    let particles = [];
    
    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(56, 189, 248, ${Math.random() * 0.5 + 0.2})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Initialize particles
    const initParticles = () => {
      particles = [];
      const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 9000), 150);
      
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };
    
    // Draw connections between particles
    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = 1 - distance / 120;
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connect();
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    animate();
    
    // Set isLoaded to true after initialization is complete
    setIsLoaded(true);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className="relative w-full h-[75vh] overflow-hidden bg-gradient-to-r from-gray-900 to-blue-900">
      {/* Particle network background */}
      <canvas 
        ref={canvasRef} 
        className={`absolute inset-0 w-full h-full z-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-10"></div>
      
      {/* Floating data points - only show when loaded */}
      {isLoaded && dataPoints.map((point, index) => (
        <div
          key={index}
          className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
          style={{ 
            left: point.x, 
            top: point.y,
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translate(-50%, -50%)' : 'translate(-50%, -30%)',
            transitionDelay: `${index * 100}ms`
          }}
          onMouseEnter={() => setActiveHint(index)}
          onMouseLeave={() => setActiveHint(null)}
        >
          <div className={`${point.color} w-4 h-4 rounded-full relative animate-pulse cursor-pointer`}>
            <div className={`absolute -inset-2 ${point.color} rounded-full opacity-30 animate-ping-slow`}></div>
            
            {/* Tooltip on hover */}
            {activeHint === index && (
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap border border-gray-700">
                {point.label}
              </div>
            )}
          </div>
        </div>
      ))}
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-3xl">
          {/* Animated headline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-500">
                {displayText}
              </span>
              <span className="animate-blink ml-1">|</span>
            </h1>
          </motion.div>
          
          {/* Subtitle with staggered reveal */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showSubheadline ? 1 : 0, y: showSubheadline ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl text-blue-100 mb-8"
          >
            Transform your investment strategies with enterprise-grade AI solutions tailored for boutique alternative investment firms.
          </motion.p>
          
          {/* CTA buttons with glow effect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showButtons ? 1 : 0, y: showButtons ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium rounded-lg shadow-glow-blue hover:shadow-glow-blue-lg transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">Explore AI Solutions</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-sky-300 to-indigo-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <button className="px-8 py-4 bg-transparent border border-blue-400 text-blue-300 font-medium rounded-lg hover:bg-blue-900 hover:bg-opacity-30 transition-colors">
              Schedule a Demo
            </button>
          </motion.div>
          
          {/* AI capabilities badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: showButtons ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {['Research', 'Due Diligence', 'Portfolio Analytics', 'Market Analysis', 'Compliance'].map((capability, index) => (
              <span 
                key={index}
                className="bg-blue-900 bg-opacity-30 text-blue-300 text-sm px-3 py-1 rounded-full border border-blue-800"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s ease, transform 0.5s ease`,
                  transitionDelay: `${0.8 + index * 0.1}s`
                }}
              >
                {capability}
              </span>
            ))}
          </motion.div>
          
      {/* Floating AI brain visualization - only show when loaded */}
      <div className={`absolute right-10 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 bg-blue-500 opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute inset-4 border-4 border-dashed border-blue-500 opacity-20 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-12 bg-gradient-to-tr from-blue-500 to-indigo-600 opacity-20 rounded-full"></div>
          
          {/* Animated brain synapses */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <g fill="none" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="0.5">
              <path d="M50,20 C60,40 80,50 50,80" className="animate-pulse-slow" />
              <path d="M50,20 C30,30 20,60 50,80" className="animate-pulse-slower" />
              <path d="M30,30 C70,40 70,60 30,70" className="animate-pulse-slow" />
              <path d="M70,30 C30,40 30,60 70,70" className="animate-pulse-slower" />
            </g>
            <g fill="rgba(99, 102, 241, 0.8)">
              <circle cx="50" cy="20" r="2" className="animate-pulse" />
              <circle cx="50" cy="80" r="2" className="animate-pulse" />
              <circle cx="30" cy="30" r="2" className="animate-pulse-slower" />
              <circle cx="30" cy="70" r="2" className="animate-pulse-slow" />
              <circle cx="70" cy="30" r="2" className="animate-pulse-slow" />
              <circle cx="70" cy="70" r="2" className="animate-pulse-slower" />
            </g>
          </svg>
        </div>
      </div>
      
      {/* Add custom styles for glow effects and animations */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        .shadow-glow-blue {
          box-shadow: 0 0 15px 2px rgba(56, 189, 248, 0.3);
        }
        
        .shadow-glow-blue-lg {
          box-shadow: 0 0 25px 5px rgba(56, 189, 248, 0.5);
        }
        
        .animate-ping-slow {
          animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
    </div>
    </div>
  );
};

export default AIHeroSection;