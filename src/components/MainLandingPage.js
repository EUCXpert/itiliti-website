import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import ScheduleButton from './ScheduleButton';
import FloatingCTASection from './FloatingCTASection';
import HoverCard from './HoverCard';
import ConsultationModal from './ConsultationModal';
import CxOPhasesVisualization from './CxOPhasesVisualization';
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
  Settings
} from 'lucide-react';

const MainLandingPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const downloadCapabilitiesOverview = () => {
    const link = document.createElement('a');
    link.href = '/capabilities-overview.pdf';
    link.download = 'ITILITI-Capabilities-Overview.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        showNavCTA={false}  // Add this to hide the top-right CTA button
      />
      
      {/* Hero Section with Floating CTA Button */}
      <div className="bg-gradient-to-r from-black to-blue-900 text-white relative">

      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/30 to-transparent z-10"></div>

      <div className="container mx-auto px-6 py-16 md:py-24 relative z-20">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">Enterprise DNA,<br/>Boutique Delivery</h1>
    <p className="text-xl md:text-2xl mb-8 max-w-2xl">Specialized Microsoft managed services for boutique alternative investment firms. Enterprise-grade expertise right-sized for your operation.</p>
    <div className="flex flex-wrap gap-4">
      <button 
        onClick={() => setIsModalOpen(true)}
        className="hero-btn-float bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
      >
        Schedule a Consultation
      </button>
      <Link 
        to="/services" 
        className="hero-btn-float bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
        onClick={() => window.scrollTo(0, 0)}
      >
        Explore Our Services
      </Link>
    </div>
  </div>
</div>

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

{/* The Enterprise-Boutique Gap Section with HoverCards */}
<div className="py-16 bg-white">
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
<div className="py-16 bg-white">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">Our Three-Phase Approach</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">A comprehensive methodology that transforms your investment firm's technology from a necessary expense into a strategic advantage.</p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      {/* Phase 1: Security Foundation */}
      <HoverCard href="/security" hoverEffect="both" className="h-full">
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="bg-blue-50 p-3 rounded-full mr-3">
              <Shield className="w-12 h-12 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold">
              Phase 1:<br />Security Foundation
            </h3>
          </div>
          
          <p className="text-gray-600 mb-6 flex-grow">Establish robust security infrastructure and operational stability to protect sensitive investment data and meet regulatory requirements.</p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="font-medium text-gray-800 mb-3">Key Services:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckSquare className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-600 text-sm">Security Posture Assessment</span>
              </li>
              <li className="flex items-start">
                <CheckSquare className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-600 text-sm">Operational Due Diligence Readiness</span>
              </li>
              <li className="flex items-start">
                <CheckSquare className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-600 text-sm">Regulatory Compliance Framework</span>
              </li>
              <li className="flex items-start">
                <CheckSquare className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-600 text-sm">Electronic Message Archiving</span>
              </li>
            </ul>
          </div>
          
          <div className="border-t border-gray-200 pt-4 mt-auto">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-xl font-bold text-blue-600">92%</div>
                <div className="text-xs text-gray-600">ODD success rate</div>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-xl font-bold text-blue-600">Zero</div>
                <div className="text-xs text-gray-600">Trading disruptions</div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-blue-600 text-sm font-medium flex items-center justify-center">
            Learn More
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </HoverCard>

      {/* Phase 2: Microsoft Optimization */}
      <HoverCard href="/microsoft-optimization" hoverEffect="both" className="h-full">
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="bg-blue-50 p-3 rounded-full mr-3">
              <Lightbulb className="w-12 h-12 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold">
              Phase 2:<br />Microsoft Optimization
            </h3>
          </div>
          
          <p className="text-gray-600 mb-6 flex-grow">Maximize your technology investments through strategic optimization of licensing, architecture, and implementation to create a scalable foundation.</p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="font-medium text-gray-800 mb-3">Key Services:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckSquare className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-600 text-sm">Microsoft Licensing Optimization</span>
              </li>
              <li className="flex items-start">
                <CheckSquare className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-600 text-sm">Microsoft Security Stack Optimization</span>
              </li>
              <li className="flex items-start">
                <CheckSquare className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-600 text-sm">Azure Cloud Optimization</span>
              </li>
              <li className="flex items-start">
                <CheckSquare className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-600 text-sm">Dynamics & Power Platform Optimization</span>
              </li>
            </ul>
          </div>
          
          <div className="border-t border-gray-200 pt-4 mt-auto">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-xl font-bold text-blue-600">25-40%</div>
                <div className="text-xs text-gray-600">Cost reduction</div>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-xl font-bold text-blue-600">3.5x</div>
                <div className="text-xs text-gray-600">ROI on investment</div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-blue-600 text-sm font-medium flex items-center justify-center">
            Learn More
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </HoverCard>

      {/* Phase 3: Business Transformation */}
      <HoverCard href="/cxo-services" hoverEffect="both" className="h-full">
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="bg-blue-50 p-3 rounded-full mr-3">
              <BrainCircuit className="w-12 h-12 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold">
              Phase 3:<br />Business Transformation
            </h3>
          </div>
          
          <p className="text-gray-600 mb-6 flex-grow">Leverage strategic technology leadership and advanced capabilities like AI to transform core investment workflows for maximum efficiency and competitive advantage.</p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="font-medium text-gray-800 mb-3">Key Services:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckSquare className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-600 text-sm">CxO Advisory Services</span>
              </li>
              <li className="flex items-start">
                <CheckSquare className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-600 text-sm">AI Solutions for Investment</span>
              </li>
              <li className="flex items-start">
                <CheckSquare className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-600 text-sm">Digital Transformation Roadmap</span>
              </li>
              <li className="flex items-start">
                <CheckSquare className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-600 text-sm">Portfolio Analytics Enhancement</span>
              </li>
            </ul>
          </div>
          
          <div className="border-t border-gray-200 pt-4 mt-auto">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-xl font-bold text-blue-600">40%</div>
                <div className="text-xs text-gray-600">Research efficiency</div>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-xl font-bold text-blue-600">3x</div>
                <div className="text-xs text-gray-600">Deal evaluation capacity</div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-blue-600 text-sm font-medium flex items-center justify-center">
            Learn More
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </HoverCard>
    </div>
    
    {/* CxO Services Across All Phases */}
    <div className="mb-12 mt-16 py-8 bg-gray-50 rounded-xl">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">CxO Services: The Backbone of Your Transformation</h3>
        <p className="text-gray-600 max-w-3xl mx-auto">Our CxO Advisory Services provide continuous leadership through every phase of your technology journey.</p>
      </div>
      <div className="max-w-5xl mx-auto px-4">
        <CxOPhasesVisualization />
      </div>
    </div>
    
{/* How Our Approach Creates Value Section with Hover Effects */}
<div className="bg-blue-50 rounded-xl p-6 border border-blue-100 max-w-4xl mx-auto">
  <h3 className="text-xl font-bold mb-4 text-center">How Our Approach Creates Value</h3>
  
  <div className="grid md:grid-cols-3 gap-4">
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-start gap-3">
        <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
        <div>
          <h4 className="font-medium">From Reactive to Proactive</h4>
          <p className="text-sm text-gray-600">Transition from firefighting to strategic technology management that supports growth.</p>
        </div>
      </div>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-start gap-3">
        <Settings className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
        <div>
          <h4 className="font-medium">Aligned with AUM Growth</h4>
          <p className="text-sm text-gray-600">Technology that scales efficiently without disruptive transitions as your firm grows.</p>
        </div>
      </div>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-start gap-3">
        <Target className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
        <div>
          <h4 className="font-medium">Focus on Investment Alpha</h4>
          <p className="text-sm text-gray-600">Free your team to focus on investment activities rather than technology challenges.</p>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
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
      
{/* About Us Section */}
<div id="about" className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
            <p className="text-lg text-gray-700 mb-6">
              We are a specialized managed service provider focused exclusively on the unique technology needs of boutique alternative investment firms. Our team brings extensive enterprise experience from implementing technology solutions at the world's largest financial institutions.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We've taken the lessons, methodologies, frameworks, and best practices from these enterprise environments and adapted them specifically for boutique firms with under 100 employees, creating a unique service offering that delivers institutional-grade capabilities at an appropriate scale and cost.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our mission is to bridge the gap between enterprise capabilities and boutique requirements, providing unique value to alternative investment firms with sophisticated needs but limited resources. We enable these organizations to compete effectively, satisfy investors, and focus on their core investment activities.
            </p>
            <div className="flex items-center justify-center mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input type="text" id="company" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Submit
                  </button>
                </form>
              </div>
              
              <div className="md:w-1/2 bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <a href="mailto:info@itiliti.io" className="text-blue-600 hover:text-blue-800">info@itiliti.io</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <a href="tel:+16314004299" className="text-blue-600 hover:text-blue-800">+1 (631) 400.4299</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium">Location</div>
                      <address className="not-italic text-gray-600">
                        156 East Main Street<br />
                        Port Jefferson, NY 11777
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium">Business Hours</div>
                      <div className="text-gray-600">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        After-hours support available for clients
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>

    <FloatingCTASection />
    
      {/* Consultation modal */}
      {isModalOpen && (
      <div className="fixed inset-0 z-[9999]"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          }}
        >
          <div className="w-full h-full flex items-center justify-center p-4">
            <div 
              className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative"
              style={{ 
                maxHeight: '90vh',
                overflowY: 'auto',
                animation: 'modalFadeIn 0.3s ease-out'
              }}
            >
              <ConsultationModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                inlineModal={true} // New prop to indicate inline usage
              />
            </div>
          </div>
          
          {/* Add CSS animation */}
          <style jsx>{`
            @keyframes modalFadeIn {
              from {
                opacity: 0;
                transform: scale(0.95);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}</style>
      </div>
    )}
  </>
);
};

export default MainLandingPage;