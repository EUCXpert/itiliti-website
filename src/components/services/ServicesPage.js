// src/components/services/ServicesPage.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICE_CATEGORIES } from '../../data/services/serviceCategories';
import { SERVICES } from '../../data/services/serviceData';
import { 
  ArrowRight, 
  Calendar, 
  Download, 
  Shield, 
  CheckSquare, 
  CheckCircle,
  Target,
  Briefcase,
  DollarSign,
  Lightbulb,
  BrainCircuit,
  BarChart4,
  Users
} from 'lucide-react';

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const pageRef = useRef(null);
  
  // Scroll animation detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    return () => {
      if (pageRef.current) {
        observer.unobserve(pageRef.current);
      }
    };
  }, []);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  // Glassmorphism styles
  const glassStyles = {
    background: 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
  };
  
  // Filter services by category
  const filteredServices = activeCategory === 'all' 
    ? Object.values(SERVICES) 
    : Object.values(SERVICES).filter(service => service.category === activeCategory);

  // Three-phase service roadmap
  const threePhaseServices = [
    {
      phase: "Phase 1: Foundation",
      description: "Ensure core systems are secure, highly available, and productive with ITSM maturity to support new capabilities.",
      icon: <Shield className="w-8 h-8 text-blue-700" />,
      color: "blue",
      services: [
        { id: "security-foundation", name: "Security Foundation", path: "/services/security-foundation" },
        { id: "electronic-message-archiving", name: "Electronic Message Archiving", path: "/services/electronic-message-archiving" },
        { id: "private-msp", name: "Private MSP", path: "/services/private-msp" }
      ]
    },
    {
      phase: "Phase 2: Capabilities",
      description: "Advance your capabilities through AI readiness, enhanced security frameworks, and mature compliance practices.",
      icon: <Lightbulb className="w-8 h-8 text-purple-700" />,
      color: "purple",
      services: [
        { id: "microsoft-optimization", name: "Microsoft Optimization", path: "/services/microsoft-optimization" },
        { id: "regulatory-compliance", name: "Regulatory Compliance", path: "/services/regulatory-compliance" }
      ]
    },
    {
      phase: "Phase 3: Optimization",
      description: "Focus on business optimization through advanced AI integration, intelligent automation, and tailored investment solutions.",
      icon: <BrainCircuit className="w-8 h-8 text-indigo-700" />,
      color: "indigo",
      services: [
        { id: "cxo-services", name: "CxO Advisory Services", path: "/services/cxo-services" },
        { id: "ai-services", name: "AI Solutions", path: "/services/ai-services" },
        { id: "workflow-automation", name: "Workflow Automation", path: "/services/workflow-automation" }
      ]
    }
  ];

  // Value proposition cards for each service phase
  const phaseValueProps = [
    {
      phase: "Foundation",
      props: [
        {
          icon: <Shield className="w-6 h-6 text-blue-600" />,
          title: "Security & Compliance",
          description: "Institutional-grade protection and regulatory compliance tailored for alternative investments"
        },
        {
          icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
          title: "Operational Resilience",
          description: "Reliable infrastructure and dedicated support for investment-critical operations"
        },
        {
          icon: <DollarSign className="w-6 h-6 text-blue-600" />,
          title: "Risk Mitigation",
          description: "Proactive protection against financial, regulatory, and reputational risks"
        }
      ]
    },
    {
      phase: "Capabilities",
      props: [
        {
          icon: <Lightbulb className="w-6 h-6 text-purple-600" />,
          title: "Technology Optimization",
          description: "Enhanced value from existing investments with focused optimization"
        },
        {
          icon: <Briefcase className="w-6 h-6 text-purple-600" />,
          title: "Investor-Ready Systems",
          description: "Technology infrastructure that satisfies institutional due diligence requirements"
        },
        {
          icon: <BarChart4 className="w-6 h-6 text-purple-600" />,
          title: "Enhanced Productivity",
          description: "Streamlined workflows and improved collaboration for investment teams"
        }
      ]
    },
    {
      phase: "Optimization",
      props: [
        {
          icon: <BrainCircuit className="w-6 h-6 text-indigo-600" />,
          title: "Investment Intelligence",
          description: "AI-enhanced research, analytics, and decision-making capabilities"
        },
        {
          icon: <Target className="w-6 h-6 text-indigo-600" />,
          title: "Strategic Advantage",
          description: "Technology as a competitive differentiator in investment operations"
        },
        {
          icon: <Briefcase className="w-6 h-6 text-indigo-600" />,
          title: "Scaling Capabilities",
          description: "Growth-aligned technology that scales efficiently with AUM growth"
        }
      ]
    }
  ];
  
  return (
    <div ref={pageRef} className="font-sans min-h-screen bg-gray-50">

      {/* Hero Section with Fixed Background */}
      <div className="relative text-white">
        {/* Fixed Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0" 
          style={{ 
            backgroundImage: 'url("/images/hero-all-services.png")',
            backgroundAttachment: 'fixed'
          }}
        />
        {/* Gradient Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-blue-900 opacity-75 z-10"></div>
        
        {/* Content */}
        <div className="container relative mx-auto px-6 py-28 z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">Enterprise-Grade Services at Boutique Scale</h1>
            <p className="text-xl mb-8 text-shadow-md">
              Comprehensive technology solutions tailored specifically for hedge funds, private equity, venture capital, and family offices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
              <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download Service Overview
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-16">
        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button 
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            All Services
          </button>
          
          {Object.values(SERVICE_CATEGORIES).map(category => (
            <button 
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
        
        {/* Enhanced Services Grid with Challenges */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {filteredServices.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              style={glassStyles}
              whileHover={{
                y: -5,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="h-3 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    {service.serviceOfferings[0].icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-sm text-gray-500">{service.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                {/* Challenges Section */}
                <div className="mb-6">
                  <h4 className="font-semibold text-blue-800 mb-3">Key Challenges Addressed:</h4>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {service.challenges.slice(0, 2).map((challenge, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-2">
                          {challenge.icon}
                        </div>
                        <div className="text-sm">
                          <p className="font-medium">{challenge.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Metrics Highlights */}
                {service.metrics && (
                  <div className="mb-6 bg-blue-50 p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4">
                      {service.metrics.slice(0, 2).map((metric, index) => (
                        <div key={index} className="text-center">
                          <div className="text-xl font-bold text-blue-600">{metric.value}</div>
                          <div className="text-xs text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <Link 
                  to={`/services/${service.id}`} 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                >
                  Learn more about {service.title} <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      
        {/* Call to Action */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white p-8"
          style={{
            ...glassStyles,
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.95), rgba(79, 70, 229, 0.95))'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3">Need a customized solution?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our team can help you identify the right combination of services
              to address your specific challenges.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;