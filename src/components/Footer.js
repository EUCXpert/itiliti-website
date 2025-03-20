import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ExternalLink, ArrowRight, Facebook, Twitter, Linkedin, Download, CheckCircle } from 'lucide-react';
import ConsultationModal from './ConsultationModal';
import useFormTracking from './useFormTracking';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  // Track form submissions
  useFormTracking('consultation', isModalOpen);
  useFormTracking('download', isDownloading);
  useFormTracking('newsletter', isSubscribed);
  
  const mainServices = [
    { name: "Security Foundation", path: "/security" },
    { name: "Microsoft Optimization", path: "/microsoft-optimization" },
    { name: "CxO Advisory Services", path: "/cxo-services" },
    { name: "AI Solutions", path: "/ai-services" },
    { name: "Electronic Message Archiving", path: "/electronic-message-archiving" }
  ];
  
  const segments = [
    { name: "Hedge Funds", path: "/segments/hedge-funds" },
    { name: "Private Equity", path: "/segments/private-equity" },
    { name: "Venture Capital", path: "/segments/venture-capital" },
    { name: "Family Offices", path: "/segments/family-offices" },
    { name: "Real Estate Investment", path: "/segments/real-estate" }
  ];
  
  const quickLinks = [
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Assessment Hub", path: "/assessments" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" }
  ];
  
  const locations = [
    {
      name: "Main Office",
      address: "156 East Main Street",
      city: "Port Jefferson, NY 11777",
      phone: "(631) 400-4299",
      email: "info@itiliti.io"
    },
    {
      name: "Satellite Office",
      city: "NYC",
      phone: "(631) 400-4299"
    },
    {
      name: "Satellite Office",
      city: "Charlotte, NC",
      phone: "(631) 552-5048"
    },
    {
      name: "Satellite Office",
      city: "Palm Beach, FL",
      phone: "(561) 701-1486"
    }
  ];

  const handleScheduleConsultation = () => {
    setIsModalOpen(true);
    
    // Track in analytics if available
    if (window.gtag) {
      window.gtag('event', 'consultation_request', {
        'event_category': 'engagement',
        'event_label': 'footer_consultation'
      });
    }
  };

  const downloadCapabilitiesOverview = () => {
    setIsDownloading(true);
    
    // Track the download in analytics if available
    if (window.gtag) {
      window.gtag('event', 'download', {
        'event_category': 'engagement',
        'event_label': 'capabilities_overview_footer'
      });
    }
    
    // Create and trigger download
    const link = document.createElement('a');
    link.href = '/capabilities-overview.pdf';
    link.download = 'ITILITI-Capabilities-Overview.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Reset download state after a short delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 1000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    
    if (!email) return;
    
    // Here you would normally submit the email to your newsletter service
    // For this example, we'll just simulate success
    
    // Track in analytics if available
    if (window.gtag) {
      window.gtag('event', 'newsletter_signup', {
        'event_category': 'engagement',
        'event_label': 'footer_newsletter'
      });
    }
    
    // Show success state
    setIsSubscribed(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <footer>
      {/* Pre-Footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Investment Firm's Technology?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Schedule a complimentary consultation to discuss how our enterprise expertise can enhance your boutique investment operations.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={handleScheduleConsultation}
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-medium text-lg hover:bg-blue-50 transition-colors"
              aria-label="Schedule a consultation"
            >
              Schedule a Consultation
            </button>
            <button 
              onClick={downloadCapabilitiesOverview}
              className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-white hover:bg-opacity-10 transition-colors flex items-center justify-center"
              disabled={isDownloading}
              aria-label="Download capabilities overview"
            >
              {isDownloading ? (
                <span>Downloading...</span>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
                  <span>Download Capabilities Overview</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Information */}
            <div>
              <div className="mb-6">
                <img src="/logo-white.svg" alt="ITILITI Technology Partners" className="h-10" />
              </div>
              <p className="text-gray-400 mb-6">Enterprise DNA, boutique delivery. Specialized IT services for alternative investment firms.</p>
              
              <div className="flex space-x-4 mb-8">
                <a href="https://linkedin.com/" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://facebook.com/" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
              
              <div className="space-y-4">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-white">{location.name}</h4>
                      <address className="not-italic text-gray-400 text-sm">
                        {location.address && (
                          <>
                            {location.address}
                            <br />
                            {location.city}
                          </>
                        )}
                        {!location.address && location.city}
                      </address>
                      <div className="text-gray-400 text-sm">
                        <a href={`tel:${location.phone.replace(/\D/g, '')}`} className="hover:text-blue-400 transition-colors">
                          {location.phone}
                        </a>
                      </div>
                      {location.email && (
                        <div className="text-gray-400 text-sm">
                          <a href={`mailto:${location.email}`} className="hover:text-blue-400 transition-colors">
                            {location.email}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-6 border-b border-gray-700 pb-2">Services</h3>
              <ul className="space-y-3">
                {mainServices.map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.path} 
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link 
                    to="/services" 
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center"
                  >
                    View All Services
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Segments */}
            <div>
              <h3 className="font-bold text-lg mb-6 border-b border-gray-700 pb-2">Segments</h3>
              <ul className="space-y-3">
                {segments.map((segment, index) => (
                  <li key={index}>
                    <Link 
                      to={segment.path} 
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      {segment.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link 
                    to="/segments" 
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center"
                  >
                    View All Segments
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
              <ul className="space-y-3 mb-8">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <h3 className="font-bold text-lg mb-4">Newsletter</h3>
              {isSubscribed ? (
                <div className="bg-green-900 bg-opacity-30 border border-green-700 rounded-lg p-4 text-center">
                  <div className="flex justify-center mb-2">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <p className="text-green-300 text-sm">
                    Thank you for subscribing to our newsletter!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors"
                    aria-label="Subscribe to newsletter"
                  >
                    Join
                  </button>
                </form>
              )}
              <p className="text-gray-500 text-xs mt-2">
                Subscribe to receive monthly insights on technology for alternative investment firms.
              </p>
            </div>
          </div>
          
          {/* Bottom footer */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} ITILITI Technology Partners LLC. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Service</Link>
              <Link to="/cookie-policy" className="text-gray-500 hover:text-gray-300 text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </footer>
  );
};

export default Footer;