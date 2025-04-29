// src/components/Navigation.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Shield, 
  Users, 
  Lightbulb, 
  BrainCircuit, 
  BarChart4, 
  Archive, 
  FileText, 
  Home, 
  ExternalLink, 
  Globe,
  Calendar,
  ChevronRight,
  Info,
  MessageSquare,
  Building,
  Rocket,
  Briefcase,
  FileInput,
  Headphones
} from 'lucide-react';

const Navigation = ({ 
  transparent = false, 
  dark = false,
  showFloatingNav = false
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Determine the AI site URL based on environment
  const aiSiteUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3001' 
    : 'https://itiliti.ai';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Navigation items with icons and descriptions
  const navItems = [
    { 
      path: '/', 
      label: 'Home', 
      icon: <Home className="w-5 h-5" /> 
    },
    { 
      path: '/services',
      label: 'Services', 
      icon: <BarChart4 className="w-5 h-5" />,
      description: "Enterprise-grade technology solutions for boutique investment firms",
      dropdown: [
        { 
          path: '/services/security-foundation', 
          label: 'Security Foundation', 
          icon: <Shield className="w-5 h-5 text-red-500" />,
          description: "Institutional-grade protection for your investment data"
        },
        { 
          path: '/services/microsoft-optimization', 
          label: 'Microsoft Optimization', 
          icon: <Lightbulb className="w-5 h-5 text-purple-500" />,
          description: "25-40% cost reduction with enhanced capabilities"
        },
        { 
          path: '/services/cxo-services', 
          label: 'CxO Advisory Services', 
          icon: <Users className="w-5 h-5 text-blue-500" />,
          description: "Fractional executive leadership for technology strategy"
        },
        { 
          path: '/services/ai-services', 
          label: 'AI Solutions', 
          icon: <BrainCircuit className="w-5 h-5 text-emerald-500" />,
          description: "Enhance investment decisions with AI-powered insights"
        },
        { 
          path: '/services/electronic-message-archiving', 
          label: 'Electronic Message Archiving', 
          icon: <Archive className="w-5 h-5 text-amber-500" />,
          description: "SEC-compliant text and mobile archiving"
        },
        { 
          path: '/services/workflow-automation', 
          label: 'Workflow Automation', 
          icon: <FileInput className="w-5 h-5 text-indigo-500" />,
          description: "Streamline operations and scale without adding headcount"
        }
      ]
    },
    { 
      path: '/assessments', 
      label: 'Assessment Hub', 
      icon: <FileText className="w-5 h-5" /> 
    },
    { 
      path: '/about-us', 
      label: 'About Us', 
      icon: <Info className="w-5 h-5" /> 
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: <MessageSquare className="w-5 h-5" /> 
    }
  ];

  // Featured resource for the dropdown
  const featuredResource = {
    title: "AI for Alternative Investment Firms",
    description: "Responsible, transparent AI that delivers measurable business impact aligned with your investment strategy. We bring enterprise-grade AI capabilities scaled appropriately for boutique investment firms.",
    image: "/images/ai-investment-resource.png",
    path: '/services/ai-services',
    linkText: "Explore AI Services"
  };

  // Solutions by Topic section
  const solutionsByTopic = [
    { 
      path: '/services/cxo-services', 
      label: 'CxO Services', 
      icon: <Users className="w-5 h-5" />
    },
    { 
      path: '/services/private-msp', 
      label: 'Private MSP', 
      icon: <Headphones className="w-5 h-5" />
    },
    { 
      path: '/services/security-foundation', 
      label: 'Security Foundations', 
      icon: <Shield className="w-5 h-5" />
    },
    { 
        path: '/services/ai-services', 
        label: 'AI Services', 
        icon: <BrainCircuit className="w-5 h-5" />
    },
    { 
      path: '/services/workflow-automation', 
      label: 'Workflow Automation', 
      icon: <FileInput className="w-5 h-5" />
    },
    { 
        path: '/services/electronic-message-archiving', 
        label: 'Electronic Message Archiving', 
        icon: <Archive className="w-5 h-5" />
    },
    { 
      path: '/services/regulatory-compliance', 
      label: 'Regulatory Compliance', 
      icon: <FileText className="w-5 h-5" />
  }
  ];

  // Solutions by Industry section
  const solutionsByIndustry = [
    { 
      path: '/segments/private-equity', 
      label: 'Private Equity', 
      icon: <Globe className="w-5 h-5" />
    },
    { 
      path: '/segments/venture-capital', 
      label: 'Venture Capital', 
      icon: <Rocket className="w-5 h-5" />
    },
    { 
      path: '/segments/family-offices', 
      label: 'Family Offices', 
      icon: <Briefcase className="w-5 h-5" />
    },
    { 
      path: '/segments/real-estate', 
      label: 'Real Estate', 
      icon: <Building className="w-5 h-5" />
    }
  ];

  // Determine navigation styling based on scroll state and props
  const containerStyle = {
    backgroundColor: isScrolled 
      ? 'rgba(255, 255, 255, 0.95)' 
      : transparent 
        ? 'rgba(255, 255, 255, 0)' 
        : 'rgba(255, 255, 255, 0.95)',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
    transition: 'all 0.3s ease-in-out'
  };

  const textColorClass = isScrolled || !transparent || !dark || mobileMenuOpen
    ? 'text-gray-800'
    : dark
      ? 'text-white'
      : 'text-gray-800';

  // Handler for dropdown mouse enter
  const handleDropdownEnter = (index) => {
    setActiveDropdown(index);
  };

  // Handler for dropdown mouse leave
  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav 
      className="fixed w-full z-50"
      style={containerStyle}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 relative z-10">
            <img 
              src={isScrolled || !transparent || !dark || mobileMenuOpen ? "/logo.svg" : "/logo-white.svg"} 
              alt="ITILITI Technology Partners"
              className="h-10 transition-all duration-300 ease-in-out transform hover:scale-105" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              item.dropdown ? (
                <div 
                  key={index} 
                  className="relative group"
                  onMouseEnter={() => handleDropdownEnter(index)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link 
                    to={item.path}
                    className={`flex items-center font-medium ${textColorClass} hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-gray-100 hover:bg-opacity-70`}
                  >
                    <span className="flex items-center">
                      {item.icon && <span className="mr-2">{item.icon}</span>}
                      {item.label}
                    </span>
                  </Link>
                  
                  {/* Enhanced dropdown with animation */}
                  <div 
                    className={`absolute left-0 top-full pt-2 w-[800px] z-20 transition-all duration-300 ${
                      activeDropdown === index 
                        ? 'opacity-100 translate-y-0 visible' 
                        : 'opacity-0 -translate-y-4 invisible'
                    }`}
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                      <div className="p-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                        <div className="flex items-start">
                          {item.icon && <span className="p-2 rounded-full bg-blue-50 mr-3">{item.icon}</span>}
                          <div>
                            <h3 className="font-bold text-gray-900">{item.label}</h3>
                            {item.description && (
                              <p className="text-sm text-gray-600">{item.description}</p>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-1 p-6 border-r border-gray-100">
                          <h4 className="font-semibold mb-4 text-gray-500 text-sm tracking-wider uppercase">Specialized Services</h4>
                          <div className="grid grid-cols-1 gap-3">
                            {solutionsByTopic.map((solution, idx) => (
                              <Link 
                                key={idx} 
                                to={solution.path}
                                className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                              >
                                {solution.icon && (
                                  <div className="mr-3 p-2 rounded-lg bg-gray-100 group-hover:bg-white">
                                    {solution.icon}
                                  </div>
                                )}
                                <div className="font-medium text-gray-900 group-hover:text-blue-700">
                                  {solution.label}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex-1 p-6 border-r border-gray-100">
                          <h4 className="font-semibold mb-4 text-gray-500 text-sm tracking-wider uppercase">Solutions by Segment</h4>
                          <div className="grid grid-cols-1 gap-3">
                            {solutionsByIndustry.map((industry, idx) => (
                              <Link 
                                key={idx} 
                                to={industry.path}
                                className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                              >
                                {industry.icon && (
                                  <div className="mr-3 p-2 rounded-lg bg-gray-100 group-hover:bg-white">
                                    {industry.icon}
                                  </div>
                                )}
                                <div className="font-medium text-gray-900 group-hover:text-blue-700">
                                  {industry.label}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        
                        <div className="w-[280px] bg-blue-50 p-6">
                          <h4 className="font-semibold mb-4 text-gray-600 text-sm tracking-wider uppercase">Featured Resource</h4>
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                          <img 
                          src={featuredResource.image || "/images/ai-investment-default.jpg"} 
                          alt="AI for Investment" 
                          className="w-full h-32 object-cover bg-blue-100"
                          />
                        <div className="p-4">
                        <h5 className="font-bold text-gray-900 text-lg mb-2">{featuredResource.title}</h5>
                        <p className="text-gray-600 text-sm mb-4">{featuredResource.description}</p>
                        <Link 
                        to={featuredResource.path} 
                        className="inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-lg text-sm transition-colors"
      >
        {featuredResource.linkText}
        <ChevronRight className="w-4 h-4 ml-1" />
      </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link 
                  key={index} 
                  to={item.path} 
                  className={`flex items-center font-medium ${textColorClass} hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-gray-100 hover:bg-opacity-70`}
                >
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.label}
                </Link>
              )
            ))}
            
            {/* AI Site Link 
            <a 
              href={aiSiteUrl} 
              className="flex items-center font-medium text-blue-600 hover:text-blue-700 transition-colors ml-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <BrainCircuit className="w-5 h-5 mr-2" />
              ITILITI.ai
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>*/}
            
            {/* CTA Button */}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${textColorClass} p-2 rounded-lg hover:bg-gray-100 hover:bg-opacity-50 focus:outline-none`}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu with animation */}
      <div 
        className={`lg:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div 
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-5 overflow-y-auto h-full">
            <div className="flex justify-between items-center mb-6">
              <img src="/logo.svg" alt="ITILITI Technology Partners" className="h-8" />
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-6">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                    <div className="mb-4">
                      <Link 
                        to={item.path}
                        className="flex items-center font-medium text-gray-800 mb-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="p-2 bg-blue-50 rounded-lg mr-3">
                          {item.icon}
                        </div>
                        {item.label}
                      </Link>
                      
                      <div className="ml-10 space-y-2 border-l-2 border-gray-100 pl-3">
                        {item.dropdown.map((dropdownItem, idx) => (
                          <Link 
                            key={idx} 
                            to={dropdownItem.path}
                            className="flex items-center text-gray-600 hover:text-blue-600 py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdownItem.icon && (
                              <span className="mr-2 text-gray-500">{dropdownItem.icon}</span>
                            )}
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      to={item.path} 
                      className="flex items-center font-medium text-gray-800 hover:text-blue-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="p-2 bg-blue-50 rounded-lg mr-3">
                        {item.icon}
                      </div>
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 mt-6 border-t border-gray-100">
                <a 
                  href={aiSiteUrl}
                  className="flex items-center font-medium text-blue-600 hover:text-blue-800 mb-4"
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="p-2 bg-blue-50 rounded-lg mr-3">
                    <BrainCircuit className="w-5 h-5 text-blue-600" />
                  </div>
                  ITILITI.ai
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
                
                <Link 
                  to="/assessments?type=ai_readiness"
                  className="block bg-blue-50 border border-blue-100 p-4 rounded-lg mb-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <h5 className="font-bold text-gray-900 mb-2">{featuredResource.title}</h5>
                  <p className="text-sm text-gray-600 mb-2">{featuredResource.description}</p>
                  <span className="inline-flex items-center text-sm font-medium text-blue-600">
                    {featuredResource.linkText}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </Link>
                
                <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Navigation */}
      {showFloatingNav && isScrolled && !mobileMenuOpen && (
        <div 
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-900 bg-opacity-90 rounded-full shadow-2xl px-8 py-3 hidden lg:flex items-center space-x-8 z-50 backdrop-blur-md"
          style={{
            animation: 'floatIn 0.5s ease-out forwards',
            boxShadow: '0 10px 25px -5px rgba(29, 78, 216, 0.4)'
          }}
        >
          {navItems.slice(0, 4).map((item, index) => (
            <Link 
              key={index} 
              to={item.path} 
              className="text-white hover:text-blue-200 transition-colors flex items-center"
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
          <button className="ml-2 px-5 py-2 rounded-full bg-white text-blue-900 hover:bg-blue-50 transition-colors flex items-center font-medium">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule
          </button>
        </div>
      )}
      
      <style jsx="true">{`
        @keyframes floatIn {
          from { 
            opacity: 0; 
            transform: translate(-50%, 30px); 
          }
          to { 
            opacity: 1; 
            transform: translate(-50%, 0); 
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;