/**
 * Enhanced UI Effects Design System
 * 
 * This file contains reusable components and utilities for implementing
 * the selected UI effects (1, 3, 5, 6, 7, 8, 9) to enhance user experience.
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // We'll use Framer Motion for animations

// ===========================
// 1. Scroll Animations
// ===========================

export const FadeInOnScroll = ({ children, delay = 0, threshold = 0.3 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export const StaggeredList = ({ children, staggerDelay = 0.1 }) => {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <FadeInOnScroll delay={index * staggerDelay} key={index}>
          {child}
        </FadeInOnScroll>
      ))}
    </>
  );
};

// ===========================
// 3. Content Transitions
// ===========================

export const TabContent = ({ activeTab, tabs }) => {
  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {tabs.map((tab) => (
          activeTab === tab.id && (
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute w-full"
            >
              {tab.content}
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </div>
  );
};

export const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-3">
      <button 
        className="flex justify-between items-center w-full px-4 py-2 text-left font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 py-3 text-gray-600">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ===========================
// 5. Particle/WebGL Backgrounds
// ===========================

export const GradientBackground = ({ className }) => {
  return (
    <div 
      className={`absolute inset-0 z-0 overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(-45deg, #2a4365, #3182ce, #4299e1, #63b3ed)',
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite',
      }}
    >
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export const ParticleBackground = ({ density = 50 }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }
    
    // Create particles
    const particleArray = [];
    const particleCount = canvas.width * canvas.height / (20000 / density);
    
    for (let i = 0; i < particleCount; i++) {
      particleArray.push(new Particle());
    }
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
        particleArray[i].draw();
        
        // Connect nearby particles with lines
        for (let j = i; j < particleArray.length; j++) {
          const dx = particleArray[i].x - particleArray[j].x;
          const dy = particleArray[i].y - particleArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - distance/1000})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particleArray[i].x, particleArray[i].y);
            ctx.lineTo(particleArray[j].x, particleArray[j].y);
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0"
      style={{ background: 'linear-gradient(to bottom, #1a365d, #2a4365)' }}
    />
  );
};

// ===========================
// 6. Text Effects
// ===========================

export const TypedText = ({ text, speed = 30 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);
  
  return <span>{displayText}</span>;
};

export const HighlightedText = ({ children, color = 'bg-blue-100' }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const textRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHighlighted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
    
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    
    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);
  
  return (
    <span ref={textRef} className="relative inline-block">
      {children}
      <span 
        className={`absolute inset-0 ${color} transform origin-left -z-10`}
        style={{
          transition: 'transform 0.6s ease',
          transform: isHighlighted ? 'scaleX(1)' : 'scaleX(0)',
        }}
      />
    </span>
  );
};

export const SplitText = ({ text }) => {
  return (
    <div className="overflow-hidden">
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: i * 0.04 }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
};

// ===========================
// 7. Cursor Effects
// ===========================

export const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
    };
    
    document.addEventListener('mousemove', moveCursor);
    
    // Add hover effect for interactive elements
    const handleLinks = () => {
      const links = document.querySelectorAll('a, button, .interactive');
      
      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          cursor.classList.add('cursor-grow');
        });
        
        link.addEventListener('mouseleave', () => {
          cursor.classList.remove('cursor-grow');
        });
      });
    };
    
    handleLinks();
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);
  
  return (
    <>
      <div 
        ref={cursorRef} 
        className="cursor-circle hidden md:block fixed w-8 h-8 border-2 border-blue-500 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-200 ease-out"
      />
      <div 
        ref={cursorDotRef} 
        className="cursor-dot hidden md:block fixed w-2 h-2 bg-blue-600 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50"
      />
      <style jsx global>{`
        * {
          cursor: none;
        }
        
        @media (max-width: 768px) {
          * {
            cursor: auto;
          }
        }
        
        .cursor-grow {
          transform: translate(-50%, -50%) scale(1.5);
          border-color: #3182ce;
          background-color: rgba(49, 130, 206, 0.1);
        }
      `}</style>
    </>
  );
};

// ===========================
// 8. Service Showcasing
// ===========================

export const FlipCard = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div 
      className="relative w-full h-64 perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className="w-full h-full transition-transform duration-700 transform-style-preserve-3d"
        style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)' }}
      >
        <div className="absolute w-full h-full bg-white rounded-xl shadow-lg backface-hidden p-6">
          {front}
        </div>
        <div 
          className="absolute w-full h-full bg-blue-50 rounded-xl shadow-lg backface-hidden p-6"
          style={{ transform: 'rotateY(180deg)' }}
        >
          {back}
        </div>
      </div>
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export const IsometricCard = ({ children, color = 'blue' }) => {
  const colorMap = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
  };
  
  return (
    <div className="isometric-container">
      <div className={`isometric-card bg-gradient-to-br ${colorMap[color]} p-6 text-white`}>
        {children}
      </div>
      <style jsx>{`
        .isometric-container {
          transform: perspective(800px) rotateX(10deg) rotateY(-10deg);
          transition: transform 0.3s ease;
        }
        
        .isometric-container:hover {
          transform: perspective(800px) rotateX(5deg) rotateY(-5deg) translateZ(10px);
        }
        
        .isometric-card {
          border-radius: 8px;
          box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.1),
                      10px 10px 15px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

// ===========================
// 9. Testimonial Presentations
// ===========================

export const TestimonialBubble = ({ quote, author, company, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md relative"
      whileHover={{ scale: 1.02, y: -5 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-2xl">
        "
      </div>
      <div className="mt-4">
        <AnimatePresence>
          {isExpanded ? (
            <motion.p 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="text-gray-700"
            >
              {quote}
            </motion.p>
          ) : (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-gray-700 line-clamp-3"
            >
              {quote}
            </motion.p>
          )}
        </AnimatePresence>
        
        <div className="flex items-center mt-4">
          {image && (
            <img src={image} alt={author} className="w-10 h-10 rounded-full mr-3" />
          )}
          <div>
            <div className="font-medium text-blue-600">{author}</div>
            <div className="text-sm text-gray-500">{company}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Testimonial3DCarousel = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <div className="relative w-full py-12">
      <div className="relative perspective w-full h-96 overflow-hidden">
        {testimonials.map((testimonial, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === (activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1);
          const isNext = index === (activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1);
          
          let position = 'opacity-0 -translate-x-[100%]';
          if (isActive) position = 'opacity-100 translate-x-0 z-20';
          else if (isPrev) position = 'opacity-40 -translate-x-[60%] scale-90 z-10';
          else if (isNext) position = 'opacity-40 translate-x-[60%] scale-90 z-10';
          
          return (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ${position}`}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                <div className="flex flex-col h-full">
                  <div className="text-2xl text-blue-500 mb-4">"</div>
                  <p className="text-gray-700 flex-grow">{testimonial.quote}</p>
                  <div className="flex items-center mt-6">
                    {testimonial.image && (
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-12 h-12 rounded-full mr-4"
                      />
                    )}
                    <div>
                      <div className="font-medium text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <button 
        onClick={prevTestimonial}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-30 hover:bg-gray-100"
      >
        ←
      </button>
      <button 
        onClick={nextTestimonial}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-30 hover:bg-gray-100"
      >
        →
      </button>
      
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

// Export all components for easy implementation
const Effects = {
  FadeInOnScroll,
  StaggeredList,
  TabContent,
  Accordion,
  GradientBackground,
  ParticleBackground,
  TypedText,
  HighlightedText,
  SplitText,
  CustomCursor,
  FlipCard,
  IsometricCard,
  TestimonialBubble,
  Testimonial3DCarousel
};

export default Effects;