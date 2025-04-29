import React, { useState, useEffect, useRef, useCallback, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import ScheduleButton from '../components/ScheduleButton';
import VideoHeroSection from '../components/VideoHeroSection';
import { PageEngagementTracker } from '../components/PageEngagementTracker';
import useFormTracking from '../components/useFormTracking';
import PartnerLogosCarousel from '../components/AdvancedPartnerLogosCarousel';
//import TeamExpertiseVisual from '../components/TeamExpertiseVisual';


import { 
  Shield, 
  BarChart4, 
  FileText, 
  CheckSquare, 
  ArrowRight, 
  BrainCircuit, 
  Server, 
  Users, 
  Lightbulb, 
  Briefcase, 
  ArrowUpRight,
  Archive, 
  Building, 
  Scale,
  Trophy,
  Target,
  Clock,
  Mail,
  Phone,
  MapPin,
  Rocket,
  Settings,
  Download,
  CheckCircle
} from 'lucide-react';


// Lazy load components that are below the fold
const FloatingCTASection = lazy(() => import('../components/FloatingCTASection'));
const HoverCard = lazy(() => import('../components/HoverCard'));
const ConsultationModal = lazy(() => import('../components/ConsultationModal'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full py-8 flex justify-center">
    <div className="animate-pulse bg-gray-200 rounded-lg h-40 w-full max-w-3xl"></div>
  </div>
);

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
    // You could also log this to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg text-center">
          <h3 className="text-xl font-bold text-red-700 mb-2">Something went wrong</h3>
          <p className="text-red-600 mb-4">We encountered an error loading this section</p>
          <button 
            onClick={() => this.setState({ hasError: false, error: null })}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const MainLandingPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);
  const [error, setError] = useState(null);
  
  
  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Track form submissions
  useFormTracking('consultation', isModalOpen);
  useFormTracking('download', isDownloading);
  useFormTracking('contact', contactFormSubmitted);
  
  // Memoize handlers with useCallback to prevent unnecessary re-renders
  const handleScroll = useCallback((id) => {
    try {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error("Scroll error:", error);
      setError("Failed to scroll to section");
    }
  }, []);
  
  const downloadCapabilitiesOverview = useCallback(() => {
    setIsDownloading(true);
    setError(null);
    
    try {
      // Track the download in analytics if available
      if (window.gtag) {
        window.gtag('event', 'download', {
          'event_category': 'engagement',
          'event_label': 'capabilities_overview'
        });
      }
      
      // Create and trigger download
      const link = document.createElement('a');
      link.href = '/capabilities-overview.pdf';
      link.download = 'ITILITI-Capabilities-Overview.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download error:", error);
      setError("Failed to download file. Please try again later.");
    } finally {
      // Reset download state after a short delay
      setTimeout(() => {
        setIsDownloading(false);
      }, 1000);
    }
  }, []);

  // Form field change handler
  const handleFormChange = useCallback((e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is modified
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  }, [formErrors]);
  
  // Form validation function
  const validateForm = useCallback(() => {
    const errors = {};
    
    // Name validation
    if (!contactForm.name.trim()) {
      errors.name = 'Name is required';
    }
    
    // Email validation
    if (!contactForm.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(contactForm.email)) {
      errors.email = 'Invalid email address';
    }
    
    // Company validation
    if (!contactForm.company.trim()) {
      errors.company = 'Company name is required';
    }
    
    // Message validation (optional)
    if (contactForm.message && contactForm.message.length > 500) {
      errors.message = 'Message must be less than 500 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }, [contactForm]);

  // Form submission handler
  const handleContactFormSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return; // Stop if validation fails
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send the form data to your backend
      // For now, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Track form submission
      if (window.gtag) {
        window.gtag('event', 'contact_form_submit', {
          'event_category': 'engagement',
          'event_label': 'contact_form'
        });
      }
      
      setContactFormSubmitted(true);
      
      // Reset form after successful submission
      setContactForm({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
      // Show success state temporarily
      setTimeout(() => {
        setContactFormSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setFormErrors({
        submit: 'Failed to submit form. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [validateForm, contactForm]);

 
  // Service definitions
  const clientSegments = [
    {
      title: "Private Equity",
      icon: <Building className="w-6 h-6 text-gray-700" />,
      challenges: [
        "Deal security across complex transactions",
        "Portfolio company integration challenges",
        "Investor reporting and transparency requirements"
      ]
    },
    {
      title: "Venture Capital",
      icon: <Rocket className="w-6 h-6 text-gray-700" />,
      challenges: [
        "Relationship-centric technology requirements",
        "Mobile-first access for partners on the move",
        "Deal flow tracking and opportunity management"
      ]
    },
    {
      title: "Family Offices",
      icon: <Briefcase className="w-6 h-6 text-gray-700" />,
      challenges: [
        "Ultra-high-net-worth privacy concerns",
        "Multi-generational technology planning",
        "Cross-asset portfolio management complexity"
      ]
    },
    {
      title: "Real Estate",
      icon: <Building className="w-6 h-6 text-gray-700" />,
      challenges: [
        "Property portfolio management complexity",
        "Regulatory compliance across multiple jurisdictions",
        "Capital deployment and fundraising challenges",
        "Data integration across disparate property systems"
      ]
    }
  ];

  const enterpriseAdvantages = [
    {
      title: "Institutional Due Diligence Expertise",
      description: "Ready-to-use frameworks and documentation templates that satisfy sophisticated allocators, derived from enterprise implementations.",
      icon: <CheckSquare className="w-8 h-8 text-white" />
    },
    {
      title: "Implementation Methodologies",
      description: "Structured project approaches and change management techniques scaled for boutique firms while maintaining enterprise quality.",
      icon: <FileText className="w-8 h-8 text-white" />
    },
    {
      title: "Reference Architectures",
      description: "Pre-built technology frameworks derived from financial institution standards but adapted to boutique scale and resources.",
      icon: <Server className="w-8 h-8 text-white" />
    },
    {
      title: "Risk Management Excellence",
      description: "Sophisticated security models and compliance frameworks calibrated specifically for alternative investment operations.",
      icon: <Shield className="w-8 h-8 text-white" />
    }
  ];
  
  const competitiveAdvantages = [
    {
      category: "Against Generic MSPs",
      advantages: [
        "Deep understanding of alternative investment workflows vs. general business IT knowledge",
        "Purpose-built for boutique firms vs. one-size-fits-all approach",
        "Investment-specific methodology vs. generic IT implementation",
        "Value-based pricing aligned with investment outcomes vs. component pricing",
        "Support model aligned with investment workflows vs. standard business hours"
      ]
    },
    {
      category: "Against Enterprise Providers",
      advantages: [
        "Equal domain expertise but delivered through boutique service model",
        "Right-sized for under-100-employee firms vs. enterprise-scale complexity",
        "Streamlined approach vs. lengthy enterprise deployments",
        "Appropriate pricing for current AUM vs. enterprise pricing models",
        "White-glove personalized service vs. tiered enterprise support"
      ]
    }
  ];

  const floatingAnimationStyle = `
    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0px);
      }
    }
    
    .hero-btn-float {
      animation: float 3s ease-in-out infinite;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
      transition: all 0.3s ease;
    }
    
    .hero-btn-float:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    }
  `;
  
  // Schema.org structured data for the business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ITILITI Technology Partners",
    "description": "Enterprise DNA, boutique delivery. Specialized IT services for alternative investment firms.",
    "url": "https://itiliti.io",
    "logo": "https://itiliti.io/logo.svg",
    "sameAs": [
      "https://linkedin.com/company/itiliti",
      "https://twitter.com/itilititech"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "156 East Main Street",
      "addressLocality": "Port Jefferson",
      "addressRegion": "NY",
      "postalCode": "11777",
      "addressCountry": "US"
    },
    "telephone": "+16314004299",
    "email": "info@itiliti.io",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 40.9462,
        "longitude": -73.0662
      },
      "geoRadius": "50000"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "highPrice": "50000",
      "lowPrice": "5000",
      "offerCount": "5"
    }
  };

  // Display error message if one exists
  if (error) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
          <h3 className="text-xl font-bold text-red-600 mb-4">Error</h3>
          <p className="mb-6">{error}</p>
          <button 
            onClick={() => setError(null)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Dismiss
          </button>
        </div>
      </div>
    );
  }

  // Enhanced contact form JSX
  const contactFormSection = (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          
          {contactFormSubmitted ? (
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-700 mb-2">Message Received!</h3>
              <p className="text-green-600">
                Thank you for reaching out. Our team will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleContactFormSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
              {formErrors.submit && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg border border-red-200 mb-4">
                  {formErrors.submit}
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleFormChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                    formErrors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-invalid={!!formErrors.name}
                  aria-describedby={formErrors.name ? "name-error" : undefined}
                />
                {formErrors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600">
                    {formErrors.name}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleFormChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                    formErrors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-invalid={!!formErrors.email}
                  aria-describedby={formErrors.email ? "email-error" : undefined}
                />
                {formErrors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600">
                    {formErrors.email}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company*
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={contactForm.company}
                  onChange={handleFormChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                    formErrors.company ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-invalid={!!formErrors.company}
                  aria-describedby={formErrors.company ? "company-error" : undefined}
                />
                {formErrors.company && (
                  <p id="company-error" className="mt-1 text-sm text-red-600">
                    {formErrors.company}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleFormChange}
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                    formErrors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-invalid={!!formErrors.message}
                  aria-describedby={formErrors.message ? "message-error" : undefined}
                />
                {formErrors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-600">
                    {formErrors.message}
                  </p>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  {contactForm.message.length}/500 characters
                </p>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>ITILITI Technology Partners | Enterprise IT for Boutique Investment Firms</title>
        <meta name="description" content="Enterprise DNA, boutique delivery. Specialized IT services for alternative investment firms including security, Microsoft optimization, and AI solutions." />
        <meta name="keywords" content="investment firm IT, boutique IT services, private equity technology, security foundation, Microsoft optimization" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="ITILITI Technology Partners | Enterprise IT for Boutique Investment Firms" />
        <meta property="og:description" content="Enterprise DNA, boutique delivery. Specialized IT services for alternative investment firms." />
        <meta property="og:image" content="https://itiliti.io/og-image.jpg" />
        <meta property="og:url" content="https://itiliti.io" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ITILITI Technology Partners | Enterprise IT" />
        <meta name="twitter:description" content="Enterprise DNA, boutique delivery. Specialized IT services for alternative investment firms." />
        <meta name="twitter:image" content="https://itiliti.io/twitter-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://itiliti.io" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <PageEngagementTracker 
        pageName="Home" 
        pageCategory="default"
      />
      
      <div className="font-sans min-h-screen bg-gray-50" itemScope itemType="https://schema.org/WebPage">
        <style jsx>{floatingAnimationStyle}</style>
        
        {/* Above the fold content */}
        <ErrorBoundary>
          <Navigation 
            transparent={true} 
            dark={true}
            hideOnScroll={true}
            announcement={{
              text: "Announcing our new AI Division focused on investment intelligence",
              link: "/ai-services",
              variant: "info",
              showCountdown: false,
              countdownDate: "2025-04-15T00:00:00"
            }}
            showFloatingCTA={true}
            showNavCTA={false}
          />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <VideoHeroSection />
        </ErrorBoundary>

        {/* Below the fold content wrapped in Suspense */}
        <Suspense fallback={<LoadingFallback />}>
          {/* Client Segments - H2 heading */}
          <section className="py-16 bg-gray-50" id="segments">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Specialized for Your Investment Strategy</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We understand the unique technology challenges facing different types of alternative investment firms.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {clientSegments.map((segment, index) => (
                  <HoverCard 
                    key={index} 
                    hoverEffect="both" 
                    className="h-full"
                    href={`/segments/${segment.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="p-6 h-full flex flex-col">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          {segment.icon}
                        </div>
                        <h3 className="text-lg font-semibold">{segment.title}</h3>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium text-gray-800 mb-3">Unique Challenges:</h4>
                        <ul className="space-y-2">
                          {segment.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-100 text-blue-600 text-sm font-medium flex items-center justify-center">
                        Explore Solutions
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </HoverCard>
                ))}
              </div>
            </div>
          </section>

          {/* Partner Logos Carousel */}
          <ErrorBoundary>
            <PartnerLogosCarousel
    title="Our Partners" 
    subtitle="" // No subtitle
    backgroundColor="bg-gray-100"
    containerPadding="py-8" // Less padding
    grayscale={false} // Full color logos
    logoHeight="h-14"
    logoSpacing="mx-36" // More space between logos
    enableHoverScale={false} // No hover effects
    duration={50} // Very slow scrolling
    pauseOnHover={false} // No pause on hover
  />
          </ErrorBoundary>

          {/* Enterprise Advantage Section - H2 heading */}
          <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white relative" id="advantages">
            <div className="container mx-auto px-6 py-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Enterprise Advantage</h2>
                <p className="text-xl max-w-3xl mx-auto">
                  We've adapted enterprise methodologies, frameworks, and best practices specifically for boutique investment firms.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {enterpriseAdvantages.map((advantage, index) => (
                  <div key={index} className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                    <div className="flex justify-center mb-4">
                      {advantage.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-3">{advantage.title}</h3>
                    <p className="text-white text-opacity-90 text-center">{advantage.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
                
          {/* Competitive Positioning - H2 heading */}
          <section className="py-16 bg-gray-50" id="competitive-edge">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Competitive Edge</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  How we deliver superior value compared to both generic MSPs and enterprise providers.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {competitiveAdvantages.map((category, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">{category.category}</h3>
                    <ul className="space-y-3">
                      {category.advantages.map((advantage, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckSquare className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
        </Suspense>
      </div>
      
      {/* Floating CTA Section and Modal - Lazy loaded */}
      <Suspense fallback={null}>
        <FloatingCTASection />
        <ConsultationModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </Suspense>
    </>
  );
};

export default MainLandingPage;