import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const AIHeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const canvasRef = useRef(null);
  const headlineText = "Enterprise AI for Alternative Investment";
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Typing effect for headline
  useEffect(() => {
    if (currentIndex < headlineText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + headlineText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
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
    setIsLoaded(true);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-r from-gray-900 to-blue-900">
      {/* Particle network background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-3xl">
          {/* Animated headline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-blue-100 mb-8"
          >
            Transform your investment strategies with enterprise-grade AI solutions tailored for boutique alternative investment firms.
          </motion.p>
          
          {/* CTA buttons with glow effect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium rounded-lg shadow-glow-blue hover:shadow-glow-blue-lg transition-all duration-300">
              Explore AI Solutions
            </button>
            <button className="px-8 py-4 bg-transparent border border-blue-400 text-blue-300 font-medium rounded-lg hover:bg-blue-900 hover:bg-opacity-30 transition-colors">
              Schedule a Demo
            </button>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16"
          >
            <p className="text-blue-200 text-sm mb-4">Trusted by alternative investment firms worldwide</p>
            <div className="flex flex-wrap items-center gap-8 opacity-70">
              <img src="/api/placeholder/120/40" alt="Partner logo" className="h-8" />
              <img src="/api/placeholder/120/40" alt="Partner logo" className="h-8" />
              <img src="/api/placeholder/120/40" alt="Partner logo" className="h-8" />
              <img src="/api/placeholder/120/40" alt="Partner logo" className="h-8" />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Add custom styles for glow effects */}
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
      `}</style>
    </div>
  );
};

export default AIHeroSection;