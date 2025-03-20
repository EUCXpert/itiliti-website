import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ExitIntentPopup from './EnhancedExitIntentPopup';
import ConsultationModal from './ConsultationModal';
import { 
  Shield, 
  FileText, 
  BrainCircuit, 
  Lightbulb, 
  Calendar, 
  Download,
  Users,
  Target,
  CheckCircle 
} from 'lucide-react';

// Define different content variations for the exit intent popup
const exitIntentVariations = {
  security: {
    title: "Enhance Your Security Posture",
    description: "92% of firms that implement our security solutions pass institutional due diligence. Don't miss out on potential allocations due to security gaps.",
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    cta: "Get a Free Security Assessment",
    offerType: "assessment",
    conversion: "security_assessment"
  },
  microsoft: {
    title: "Reduce Your Microsoft Spend",
    description: "Our clients typically save 25-40% on their Microsoft licensing costs while enhancing capabilities. Find out how much you could save.",
    icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
    cta: "Schedule Cost Analysis",
    offerType: "consultation",
    conversion: "microsoft_analysis"
  },
  ai: {
    title: "Transform with AI",
    description: "See how AI can enhance your investment research and decision-making without replacing your team's expertise.",
    icon: <BrainCircuit className="w-12 h-12 text-blue-600" />,
    cta: "Schedule AI Readiness Assessment",
    offerType: "assessment",
    conversion: "ai_assessment"
  },
  investment: {
    title: "Institutional-Ready Technology",
    description: "Discover how boutique investment firms like yours are passing operational due diligence and securing allocations with enterprise-grade technology.",
    icon: <Target className="w-12 h-12 text-blue-600" />,
    cta: "Schedule Investment Technology Consultation",
    offerType: "consultation",
    conversion: "investment_consultation"
  },
  default: {
    title: "Before You Go!",
    description: "Discover how we can transform your investment firm's technology infrastructure with enterprise-grade solutions at boutique-appropriate scale.",
    icon: <Calendar className="w-12 h-12 text-blue-600" />,
    cta: "Schedule Free Consultation",
    offerType: "consultation",
    conversion: "general_consultation"
  },
  whitepaper: {
    title: "Free Whitepaper",
    description: "Download our exclusive whitepaper: 'The Enterprise-Boutique Gap: Technology Solutions for Alternative Investment'",
    icon: <FileText className="w-12 h-12 text-blue-600" />,
    cta: "Download Whitepaper",
    offerType: "download",
    conversion: "whitepaper_download"
  },
  highEngagement: {
    title: "Ready for the Next Step?",
    description: "You've shown interest in our solutions. Let our experts show you how we can address your specific challenges.",
    icon: <Users className="w-12 h-12 text-blue-600" />,
    cta: "Schedule Personalized Demo",
    offerType: "demo",
    conversion: "personalized_demo"
  }
};

const AdvancedExitIntentPopup = ({ 
  isEnabled = true, 
  variation = 'default',
  userEngagement = {},
  onConversion = () => {}
}) => {
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [activeVariation, setActiveVariation] = useState(variation);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const location = useLocation();
  
  // Update variation when props change or based on engagement
  useEffect(() => {
    // Start with the provided variation
    let newVariation = variation;
    
    // Override based on user engagement
    if (userEngagement.scrollDepth > 80 && userEngagement.timeOnPage > 120) {
      // Deep engagement - offer more personalized option
      newVariation = 'highEngagement';
    } else if (userEngagement.scrollDepth > 70 && !userEngagement.previouslyConvertedOnPage) {
      // Good engagement, not converted yet - offer whitepaper
      newVariation = 'whitepaper';
    }
    
    setActiveVariation(newVariation);
  }, [variation, userEngagement]);
  
  // Handle CTA click based on offer type
  const handleCtaClick = () => {
    const currentVariation = exitIntentVariations[activeVariation];
    
    // Track this conversion in analytics (if analytics exists)
    if (window.gtag) {
      window.gtag('event', 'exit_intent_cta_click', {
        'event_category': 'engagement',
        'event_label': activeVariation,
        'event_action': currentVariation.conversion
      });
    }
    
    // Different handling based on offer type
    switch(currentVariation.offerType) {
      case 'consultation':
      case 'demo':
        setShowConsultationModal(true);
        onConversion('consultation');
        break;
      case 'download':
        // For whitepaper, we'd just capture info and trigger download
        setSubmitted(true);
        onConversion('download');
        // Simulate download after short delay
        setTimeout(() => {
          // Logic to download whitepaper
          const link = document.createElement('a');
          link.href = '/enterprise-boutique-gap-whitepaper.pdf';
          link.download = 'Enterprise-Boutique-Gap-Whitepaper.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, 1000);
        break;
      case 'assessment':
        // Similar to consultation, but could direct to different type of meeting
        setShowConsultationModal(true);
        onConversion('assessment');
        break;
      default:
        setShowConsultationModal(true);
        onConversion('generic');
    }
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log lead info (in real implementation, would save to database)
    console.log('Lead captured:', { name, email, company, page: location.pathname, variation: activeVariation });
    
    // Here you would typically store the lead information
    // For this example, we'll just trigger the appropriate action
    handleCtaClick();
  };
  
  // Get current variation content
  const content = exitIntentVariations[activeVariation];
  
  return (
    <>
      <ExitIntentPopup 
        isEnabled={isEnabled} 
        timeout={1000}
        sensitivity={20} 
        showOncePerSession={true}
        delayOnPageLoad={5000}
      >
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              {content.icon}
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">{content.title}</h2>
          <p className="text-gray-600 mb-6">
            {content.description}
          </p>
          
          {/* Lead capture form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                  required
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company*</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                  required
                />
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center"
                >
                  {content.offerType === 'download' && (
                    <Download className="w-5 h-5 mr-2" />
                  )}
                  {content.offerType !== 'download' && (
                    <Calendar className="w-5 h-5 mr-2" />
                  )}
                  {content.cta}
                </button>
              </div>
              
              <p className="text-xs text-gray-500 mt-2">
                We respect your privacy and will not share your information.
              </p>
            </form>
          ) : (
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="flex justify-center mb-3">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <div className="text-green-600 font-medium">Thank you!</div>
              <p className="text-sm text-gray-600">
                {content.offerType === 'download' 
                  ? 'Your download is starting...' 
                  : 'We will be in touch shortly.'}
              </p>
            </div>
          )}
        </div>
      </ExitIntentPopup>
      
      {/* Use existing ConsultationModal component */}
      <ConsultationModal
        isOpen={showConsultationModal}
        onClose={() => setShowConsultationModal(false)}
      />
    </>
  );
};

export default AdvancedExitIntentPopup;