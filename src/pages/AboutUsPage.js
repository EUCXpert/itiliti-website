// src/pages/AboutUsPage.js
import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, 
  Building, 
  Award, 
  CheckSquare, 
  ArrowRight, 
  BrainCircuit, 
  Shield,
  Globe,
  BarChart4,
  Calendar,
  Cloud,
  FileText,
  Layers,
  Lock,
  Download
} from 'lucide-react';
import Navigation from '../components/Navigation';
import TeamExpertiseVisual from '../components/TeamExpertiseVisual';
import { motion } from 'framer-motion';

const AboutUsPage = () => {
  const [isVisible, setIsVisible] = useState({
    team: false,
    values: false,
    challenges: false,
    different: false,
    security: false,
    expertise: false // Added for TeamExpertiseVisual section
  });
  
  const teamRef = useRef(null);
  const valuesRef = useRef(null);
  const challengesRef = useRef(null);
  const differentRef = useRef(null);
  const securityRef = useRef(null);
  const expertiseRef = useRef(null); // Added for TeamExpertiseVisual section

  // Animation detection for sections
  useEffect(() => {
    const observerOptions = { threshold: 0.2 };
    
    const createObserver = (ref, section) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [section]: true }));
          }
        },
        observerOptions
      );
      
      if (ref.current) {
        observer.observe(ref.current);
      }
      
      return observer;
    };
    
    const teamObserver = createObserver(teamRef, 'team');
    const valuesObserver = createObserver(valuesRef, 'values');
    const challengesObserver = createObserver(challengesRef, 'challenges');
    const differentObserver = createObserver(differentRef, 'different');
    const securityObserver = createObserver(securityRef, 'security');
    const expertiseObserver = createObserver(expertiseRef, 'expertise'); // Added for TeamExpertiseVisual section
    
    return () => {
      if (teamRef.current) teamObserver.unobserve(teamRef.current);
      if (valuesRef.current) valuesObserver.unobserve(valuesRef.current);
      if (challengesRef.current) challengesObserver.unobserve(challengesRef.current);
      if (differentRef.current) differentObserver.unobserve(differentRef.current);
      if (securityRef.current) securityObserver.unobserve(securityRef.current);
      if (expertiseRef.current) expertiseObserver.unobserve(expertiseRef.current); // Added for TeamExpertiseVisual section
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  // Team members data
  const teamMembers = [
    {
      name: "Darren Augi",
      title: "Co-Founder & CEO",
      bio: "Former CTO of a $2B hedge fund with 20+ years of financial technology leadership experience across alternative investment strategies.",
      image: "/images/headshots/Darren.jpg"
    },
    {
      name: "Heinrich Van Riel",
      title: "Co-Founder & CTO",
      bio: "15+ years designing resilient technology solutions for boutique investment firms with expertise in security architecture and infrastructure optimization.",
      image: "/images/headshots/Heinrich.jpg"
    },
    {
      name: "Nigel Harrison",
      title: "Partner & COO",
      bio: "Former CISO at a multi-strategy investment firm with extensive regulatory compliance and institutional investor due diligence experience.",
      image: "/images/headshots/Nigel.jpg"
    }
  ];

  // Core values data
  const coreValues = [
    {
      title: "Investment-First Thinking",
      description: "Every technology decision is evaluated through the lens of its impact on investment operations and performance.",
      icon: <BarChart4 className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Boutique-Scale Solutions",
      description: "Enterprise capabilities delivered at a scale and cost appropriate for sub-billion-dollar AUM firms.",
      icon: <Building className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Security as Foundation",
      description: "Security integrated as a fundamental element rather than an afterthought or add-on.",
      icon: <Shield className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Technology as Leverage",
      description: "Focus on solutions that allow small teams to effectively manage growing AUM without proportional headcount increases.",
      icon: <BrainCircuit className="w-6 h-6 text-blue-600" />
    }
  ];

  // Technology challenges data
  const technologyChallenges = [
    {
      title: "Cloud Complexity",
      description: "Cloud complexity demands expertise. We simplify complexity without compromising capability.",
      icon: <Cloud className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Regulatory Requirements",
      description: "Regulatory requirements never stop evolving. Our compliance frameworks adapt continuously.",
      icon: <FileText className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Technology Advancements",
      description: "Technology advancements create both opportunity and risk. We help you navigate which innovations deliver true business value.",
      icon: <Layers className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Security Threats",
      description: "Security threats target businesses of every size. Our defense-in-depth approach protects what matters most.",
      icon: <Lock className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white relative">
        <div className="absolute inset-0 bg-blue-900 opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
        
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-blue-800 bg-opacity-50 px-4 py-2 rounded-full text-blue-200 text-sm font-medium mb-5">
              <Users className="w-4 h-4 mr-2" />
              Built by Investment Technology Veterans
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ITILITI Technology Partners</h1>
            
            <p className="text-xl mb-8 max-w-2xl leading-relaxed">
              A team of passionate technologists committed to delivering an unparalleled IT experience for boutique alternative investment firms. Our mission is to provide enterprise-grade technology solutions tailored specifically for sub-billion dollar AUM managers.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#team-section"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Meet Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
           
      {/* Technology Challenges Section */}
      <div id="challenges-section" className="py-16 bg-gray-50" ref={challengesRef}>
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-5xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.challenges ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {/* Enhanced Title Treatment */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible.challenges ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="inline-flex items-center justify-center mb-3 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wide"
              >
                UNDERSTANDING
              </motion.div>
              
              <h2 className="relative inline-block">
                <span className="relative z-10 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                  Today's Technology
                </span>
                <motion.span 
                  className="relative z-10 block md:inline text-4xl md:text-5xl font-bold text-gray-800 mt-1 md:mt-0 md:ml-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible.challenges ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Challenges
                </motion.span>
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -bottom-3 left-0 h-3 bg-blue-200 opacity-50 rounded-full"
                  initial={{ width: 0 }}
                  animate={isVisible.challenges ? { width: '100%' } : { width: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                />
                <motion.div 
                  className="absolute -z-10 -top-6 -left-6 w-20 h-20 bg-blue-100 rounded-full opacity-70 blur-xl"
                  initial={{ scale: 0 }}
                  animate={isVisible.challenges ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-indigo-100 rounded-full opacity-70 blur-xl"
                  initial={{ scale: 0 }}
                  animate={isVisible.challenges ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </h2>
            </div>
            
            {/* Technology Challenges Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible.challenges ? "visible" : "hidden"}
            >
              {technologyChallenges.map((challenge, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl hover:shadow-lg transition-shadow p-6 flex items-start gap-5"
                  style={{
                    ...glassStyles,
                    transform: `perspective(1000px) rotateX(0deg) rotateY(0deg)`,
                    transition: 'transform 0.3s ease-out'
                  }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    {challenge.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>
                    <p className="text-gray-600">{challenge.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
            
      {/* Team Section */}
      <div id="team-section" className="bg-white py-16" ref={teamRef}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.team ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible.team ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="inline-flex items-center justify-center mb-3 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wide"
              >
                LEADERSHIP
              </motion.div>
              
              <h2 className="relative inline-block">
                <span className="relative z-10 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                  Leadership Behind
                </span>
                <motion.span 
                  className="relative z-10 block md:inline text-4xl md:text-5xl font-bold text-gray-800 mt-1 md:mt-0 md:ml-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible.team ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Your Peace of Mind
                </motion.span>
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -bottom-3 left-0 h-3 bg-blue-200 opacity-50 rounded-full"
                  initial={{ width: 0 }}
                  animate={isVisible.team ? { width: '100%' } : { width: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                />
              </h2>
            </div>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8 mt-12"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible.team ? "visible" : "hidden"}
            >
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px rgba(0, 0, 0, 0.15)"
                  }}
                >
                  <div className="h-48 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <div className="text-blue-600 font-medium mb-4">{member.title}</div>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      
            {/* Team Expertise Visual */}
            <div id="expertise-section" ref={expertiseRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible.expertise ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <TeamExpertiseVisual />
        </motion.div>
      </div>

      {/* Different Kind of IT Partnership Section */}
      <div id="different-section" className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16" ref={differentRef}>
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.different ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible.different ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="inline-flex items-center justify-center mb-3 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wide"
              >
                OUR APPROACH
              </motion.div>
              
              <h2 className="relative inline-block">
                <span className="relative z-10 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                  A Different Kind
                </span>
                <motion.span 
                  className="relative z-10 block md:inline text-4xl md:text-5xl font-bold text-gray-800 mt-1 md:mt-0 md:ml-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible.different ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  of IT Partnership
                </motion.span>
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -bottom-3 left-0 h-3 bg-blue-200 opacity-50 rounded-full"
                  initial={{ width: 0 }}
                  animate={isVisible.different ? { width: '100%' } : { width: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                />
              </h2>
            </div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible.different ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={glassStyles}
            >
              <p className="text-gray-700 mb-6 text-lg">
                The IT services industry has largely standardized around anonymous ticketing systems, outsourced support, and generic solutions. In this environment, businesses often find themselves explaining their challenges repeatedly to different technicians, waiting for responses, and adapting their operations to technology limitations rather than the reverse.
              </p>
              <p className="text-gray-700 text-lg">
                We've intentionally built our model to be different. Our alternative-investment focused team develops a deep understanding of your business context, allowing us to provide solutions that address your unique requirements. When you reach out, you connect with familiar voices who already understand your environment, every time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Security Section */}
      <div id="security-section" className="bg-white py-16" ref={securityRef}>
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.security ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible.security ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="inline-flex items-center justify-center mb-3 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wide"
              >
                SECURITY & COMPLIANCE
              </motion.div>
              
              <h2 className="relative inline-block">
                <span className="relative z-10 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                  We've Raised the Bar
                </span>
                <motion.span 
                  className="relative z-10 block md:inline text-4xl md:text-5xl font-bold text-gray-800 mt-1 md:mt-0 md:ml-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible.security ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  on Data Security
                </motion.span>
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -bottom-3 left-0 h-3 bg-blue-200 opacity-50 rounded-full"
                  initial={{ width: 0 }}
                  animate={isVisible.security ? { width: '100%' } : { width: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                />
              </h2>
            </div>
            
            <motion.div 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white p-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible.security ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                ...glassStyles,
                background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.95), rgba(79, 70, 229, 0.95))'
              }}
              whileHover={{
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)"
              }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <img 
                    src="/images/badges/soc2-badge.png" 
                    alt="SOC 2 Certification Badge" 
                    className="w-32 h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">SOC 2 Certified Protection</h3>
                  <p className="text-xl text-blue-100 mb-6">
                    We protect what matters to you. That's why we achieved <span className="font-semibold text-white">SOC 2 certification</span>, which confirms our security controls are designed to keep your data safe, ensure consistent service delivery, and maintain compliance with stringent industry standards.
                  </p>
                  <p className="text-xl text-blue-100">
                    This independent verification means you're free to focus on what you do best, knowing your data security is in qualified hands.
                  </p>
                  <div className="mt-8">
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div id="values-section" className="bg-gray-50 py-16" ref={valuesRef}>
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.values ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible.values ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="inline-flex items-center justify-center mb-3 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wide"
              >
                PRINCIPLES
              </motion.div>
              
              <h2 className="relative inline-block">
                <span className="relative z-10 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                  Our Core
                </span>
                <motion.span 
                  className="relative z-10 block md:inline text-4xl md:text-5xl font-bold text-gray-800 mt-1 md:mt-0 md:ml-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible.values ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Values
                </motion.span>
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -bottom-3 left-0 h-3 bg-blue-200 opacity-50 rounded-full"
                  initial={{ width: 0 }}
                  animate={isVisible.values ? { width: '100%' } : { width: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                />
              </h2>
            </div>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-6 mt-12"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible.values ? "visible" : "hidden"}
            >
              {coreValues.map((value, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-md p-6 flex items-start"
                  style={{
                    ...glassStyles,
                    transform: `perspective(1000px) rotateX(0deg) rotateY(0deg)`,
                    transition: 'transform 0.3s ease-out'
                  }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div className="bg-blue-50 p-3 rounded-lg mr-4 flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white p-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              ...glassStyles,
              background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.95), rgba(79, 70, 229, 0.95))'
            }}
            whileHover={{
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)"
            }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">Ready to experience the difference?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Our tailored approach delivers enterprise-grade solutions that address your unique requirements without the enterprise complexity or cost.
              </p>
              <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;