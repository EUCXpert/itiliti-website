import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import ScheduleButton from './ScheduleButton';
import FloatingCTASection from './FloatingCTASection';
import HoverCard from './HoverCard';
import ConsultationModal from './ConsultationModal';
import { PageEngagementTracker } from './PageEngagementTracker';
import useFormTracking from './useFormTracking';
import CxOPhasesVisualization from './CxOPhasesVisualization';
import ConsolidatedApproachVisualization from './ConsolidatedApproachVisualization';
import VideoHeroSection from './VideoHeroSection';
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
  Download
} from 'lucide-react';

const MainLandingPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);
  
  // Track form submissions
  useFormTracking('consultation', isModalOpen);
  useFormTracking('download', isDownloading);
  useFormTracking('contact', contactFormSubmitted);
  
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const downloadCapabilitiesOverview = () => {
    setIsDownloading(true);
    
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
    
    // Reset download state after a short delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 1000);
  };

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would handle the form submission here
    // For now, we'll just set the state to track the submission
    setContactFormSubmitted(true);
    
    // Reset form after successful submission
    setTimeout(() => {
      setContactFormSubmitted(false);
    }, 3000);
  };

  const services = [
    {
      title: "Security Foundation",
      description: "Enterprise-grade security infrastructure tailored for boutique investment firms, meeting regulatory and investor requirements.",
      icon: <Shield className="w-12 h-12 text-gray-700" />,
      link: "/security",
      metrics: [
        { value: "100%", label: "ODD pass rate after implementation" },
        { value: "75%", label: "Reduction in security incidents" }
      ]
    },
    {
      title: "Microsoft Optimization",
      description: "Strategic license management and platform utilization to reduce costs and enhance capabilities for your investment operations.",
      icon: <Lightbulb className="w-12 h-12 text-gray-700" />,
      link: "/microsoft-optimization",
      metrics: [
        { value: "25-40%", label: "Reduction in Microsoft spend" },
        { value: "45%", label: "Cost reduction through proper Azure sizing" }
      ]
    },
    {
      title: "CxO Advisory Services",
      description: "Fractional executive technology leadership providing enterprise expertise at boutique-appropriate scale and cost.",
      icon: <Users className="w-12 h-12 text-gray-700" />,
      link: "/cxo-services",
      metrics: [
        { value: "60-75%", label: "Cost savings vs. full-time executive hire" },
        { value: "35%", label: "Reduction in technology TCO" }
      ]
    },
    {
      title: "AI Solutions",
      description: "Transform your investment processes with AI capabilities that enhance, not replace, your team's expertise and judgment.",
      icon: <BrainCircuit className="w-12 h-12 text-gray-700" />,
      link: "/ai-services",
      metrics: [
        { value: "40%", label: "Improvement in research efficiency" },
        { value: "3.5x", label: "Increase in deal evaluation capacity" }
      ]
    },
    {
      title: "Electronic Message Archiving",
      description: "SEC-compliant text message archiving solution with white-glove implementation to ensure regulatory compliance.",
      icon: <Archive className="w-12 h-12 text-blue-600" />,
      link: "/electronic-message-archiving",
      metrics: [
        { value: "100%", label: "SEC compliance for text messages" },
        { value: "15 min", label: "Average support response time" }
      ]
    }
  ];
  
  const clientSegments = [
    {
      title: "Hedge Funds",
      icon: <BarChart4 className="w-6 h-6 text-gray-700" />,
      challenges: [
        "Sophisticated security for institutional due diligence",
        "Trading-hour support for critical operations",
        "Scalable technology aligned with AUM growth"
      ]
    },
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
  
  const clientValue = [
    {
      title: "Enhanced Capital Raising",
      description: "Successfully pass institutional due diligence with technology that meets allocator expectations.",
      value: "92%",
      metric: "ODD success rate",
      icon: <Trophy className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Operational Efficiency",
      description: "Leverage enterprise-grade automation and optimization at boutique-appropriate scale.",
      value: "40%",
      metric: "Increased operational efficiency",
      icon: <Clock className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Strategic Advantage",
      description: "Focus on alpha generation rather than technology challenges with expert guidance.",
      value: "15%",
      metric: "Improved investment returns",
      icon: <Target className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Sustainable Growth",
      description: "Scale efficiently without disruptive technology rebuilds as your AUM grows.",
      value: "3.5x",
      metric: "Growth capacity without tech overhaul",
      icon: <ArrowUpRight className="w-8 h-8 text-blue-600" />
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

  return (
    <>
      <PageEngagementTracker 
        pageName="Home" 
        pageCategory="default"
      />
      <div className="font-sans min-h-screen bg-gray-50">
        <style jsx>{floatingAnimationStyle}</style>
        {/* Navigation */}
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
        
        <VideoHeroSection />

        {/* Client Segments */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Specialized for Your Investment Strategy</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">We understand the unique technology challenges facing different types of alternative investment firms.</p>
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
        </div>

        {/* The Enterprise-Boutique Gap Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The Enterprise-Boutique Gap</h2>
              <p className="text-xl text-gray-600">Boutique alternative investment firms face a fundamental challenge: they must satisfy the same institutional investor expectations and regulatory requirements as $50B+ firms, but with a fraction of the resources.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Problem Card */}
              <HoverCard className="bg-gray-100" hoverEffect="both">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">The Problem</h3>
                  <p className="text-gray-700 mb-4">Boutique firms struggle to meet institutional standards with limited resources, caught between:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Generic IT providers who don't understand investment workflows</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Enterprise providers with solutions too complex and costly</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Growing investor and regulatory expectations</span>
                    </li>
                  </ul>
                </div>
              </HoverCard>
              
              {/* Gap Card */}
              <HoverCard className="bg-gray-200" hoverEffect="both">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">The Gap</h3>
                  <p className="text-gray-700 mb-4">This creates a specific gap in the market for firms with:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Under 100 employees but sophisticated operations</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0 mt-1" />
                      <span>$100M-$5B AUM requiring institutional-grade technology</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Complex investment strategies with limited IT resources</span>
                    </li>
                  </ul>
                </div>
              </HoverCard>
              
              {/* Solution Card */}
              <HoverCard className="bg-gray-800" hoverEffect="both">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Our Solution</h3>
                  <p className="text-gray-700 mb-4">We bridge this gap by providing:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 text-gray-700 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Enterprise expertise adapted to boutique scale</span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 text-gray-700 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Investment-specific technology solutions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 text-gray-700 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Right-sized approach respecting resource constraints</span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 text-gray-700 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Growth-aligned architecture that scales with AUM</span>
                    </li>
                  </ul>
                </div>
              </HoverCard>
            </div>
          </div>
        </div>

        {/* Enterprise Advantage Section */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white relative">
          <div className="container mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Enterprise Advantage</h2>
              <p className="text-xl max-w-3xl mx-auto">We've adapted enterprise methodologies, frameworks, and best practices specifically for boutique investment firms.</p>
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
        </div>

        {/* Three-Phase Approach Section */}
        <div className="container mx-auto px-6 py-16">
          <ConsolidatedApproachVisualization />
        </div>
        
        {/* Client Value Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The Value We Deliver</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our enterprise-to-boutique translation creates measurable value for your investment firm.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clientValue.map((value, index) => (
                <div key={index} className="bg-blue-50 rounded-xl p-6 shadow-sm">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <div className="text-center mb-3">
                    <div className="text-3xl font-bold text-blue-600">{value.value}</div>
                    <div className="text-sm text-gray-600">{value.metric}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-center">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Competitive Positioning */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Competitive Edge</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">How we deliver superior value compared to both generic MSPs and enterprise providers.</p>
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
        </div>
        
        {/* Case Study Preview */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Client Success Story</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg overflow-hidden border border-blue-100">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 bg-gradient-to-br from-black to-blue-800 text-white p-8">
                  <h3 className="text-2xl font-bold mb-4">Emerging Hedge Fund Secures Institutional Capital</h3>
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm mb-6">
                    <div className="font-medium mb-1">Client Profile</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <BarChart4 className="w-4 h-4" />
                        <span>$120M AUM Long/Short Equity Fund</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>8-person investment team</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        <span>Targeting institutional allocations</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="font-medium mb-1">Challenge</div>
                    <p className="text-sm text-white text-opacity-90">
                      Failed multiple operational due diligence reviews due to security deficiencies. Lacked the internal expertise to implement institutional-grade security while maintaining operational efficiency.
                    </p>
                  </div>
                </div>
                
                <div className="lg:w-2/3 p-8">
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4">Results</h4>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-blue-600">$75M</div>
                        <div className="text-sm text-gray-700">New institutional allocation secured</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-blue-600">100%</div>
                        <div className="text-sm text-gray-700">ODD pass rate after implementation</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-blue-600">65%</div>
                        <div className="text-sm text-gray-700">Reduction in security incidents</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700">
                      Beyond the immediate capital raise, the fund established a security foundation that continues to support its growth trajectory. The CISO as a Service role provides ongoing strategic guidance while our managed security services ensure continuous protection.
                    </p>
                  </div>
                  
                  <div>
                    <blockquote className="italic text-gray-700 border-l-4 border-blue-600 pl-4 py-2 mb-4">
                      "The security transformation was a game-changer for our firm. We not only passed ODD with flying colors but also discovered that robust security is now a competitive advantage in fundraising conversations..."
                    </blockquote>
                    <div className="flex items-center">
                      <img src="/api/placeholder/60/60" alt="Chief Operating Officer" className="w-12 h-12 rounded-full mr-4" />
                      <div>
                        <div className="font-medium text-blue-600">Chief Operating Officer</div>
                        <div className="text-sm text-gray-600">Long/Short Equity Hedge Fund</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>

      {/* Floating CTA Section */}
      <FloatingCTASection />
      
      {/* Consultation modal */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default MainLandingPage;