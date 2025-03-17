import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { 
  BarChart4, 
  Building, 
  Briefcase, 
  Users, 
  Shield, 
  FileText, 
  Database, 
  ArrowRight, 
  Target, 
  LightbulbIcon,
  Clock,
  CheckSquare
} from 'lucide-react';

const SegmentsPage = () => {
  const segments = [
    {
      id: 'hedge-funds',
      title: "Hedge Funds",
      description: "Enterprise-grade technology infrastructure designed specifically for emerging and established hedge funds. Meet institutional investor expectations while preserving capital for investment operations.",
      icon: <BarChart4 className="w-14 h-14 text-blue-600" />,
      challenges: [
        "Meeting institutional due diligence requirements with limited resources",
        "Implementing reliable trading infrastructure at appropriate scale",
        "Managing market data efficiently and cost-effectively",
        "Ensuring business continuity for critical trading operations",
        "Providing adequate cybersecurity for sensitive investment IP"
      ],
      valueProposition: "Institutional-Grade Infrastructure Without Enterprise Costs",
      keyMetrics: [
        { value: "$50M+", label: "New allocations secured" },
        { value: "100%", label: "ODD pass rate" },
        { value: "<2%", label: "Technology as % of budget" }
      ]
    },
    {
      id: 'private-equity',
      title: "Private Equity",
      description: "Specialized technology solutions designed for boutique private equity firms that enhance deal flow, facilitate secure collaboration, and support thorough due diligence processes.",
      icon: <Building className="w-14 h-14 text-purple-600" />,
      challenges: [
        "Managing secure collaboration with external parties during deals",
        "Organizing and analyzing large volumes of due diligence data",
        "Maintaining document control for sensitive transaction information",
        "Creating efficient reporting for investors and decision-making",
        "Balancing security with the need for flexible access during deals"
      ],
      valueProposition: "Secure Deal Management Environment with Enhanced Due Diligence Capabilities",
      keyMetrics: [
        { value: "40%", label: "Acceleration in deal cycle time" },
        { value: "100%", label: "Confidentiality maintenance" },
        { value: "3x", label: "Deal evaluation capacity" }
      ]
    },
    {
      id: 'venture-capital',
      title: "Venture Capital",
      description: "Mobile-first technology solutions for early-stage venture capital firms that enhance relationship management, deal flow tracking, and knowledge sharing across investment teams.",
      icon: <Target className="w-14 h-14 text-emerald-600" />,
      challenges: [
        "Tracking complex networks of founders, co-investors, and portfolio companies",
        "Managing and prioritizing large volumes of potential investments",
        "Capturing and sharing insights across distributed investment teams",
        "Providing secure access to critical information for mobile partners",
        "Supporting portfolio companies with limited internal resources"
      ],
      valueProposition: "Enhanced Deal Flow Management and Relationship Intelligence",
      keyMetrics: [
        { value: "35%", label: "Increase in qualified deal flow" },
        { value: "Enhanced", label: "Follow-on funding coordination" },
        { value: "Improved", label: "Partner mobility and productivity" }
      ]
    },
    {
      id: 'family-offices',
      title: "Family Offices",
      description: "Tailored technology solutions for single and multi-family offices that provide comprehensive wealth visibility while maintaining exceptional privacy and security.",
      icon: <Briefcase className="w-14 h-14 text-orange-600" />,
      challenges: [
        "Creating comprehensive visibility across diverse investments and personal holdings",
        "Protecting highly sensitive personal and financial information",
        "Customizing information access for family members with different needs",
        "Bridging personal and financial services into a cohesive environment",
        "Preserving critical information for multi-generational wealth management"
      ],
      valueProposition: "Comprehensive Wealth Intelligence with Enhanced Privacy Protection",
      keyMetrics: [
        { value: "65%", label: "Reduction in reporting effort" },
        { value: "100%", label: "Prevention of sophisticated attacks" },
        { value: "Complete", label: "Asset visibility across holdings" }
      ]
    },
    {
      id: 'real-estate',
      title: "Real Estate Investment",
      description: "Integrated technology solutions for niche real estate investment firms that bridge property management operations with institutional-grade investment analytics.",
      icon: <Building className="w-14 h-14 text-red-600" />,
      challenges: [
        "Bridging operational and investment systems for unified reporting",
        "Centralizing and standardizing data from diverse properties",
        "Meeting institutional investor reporting requirements with limited staff",
        "Managing complex documentation for leases, contracts, and compliance",
        "Supporting mobile property inspection and management activities"
      ],
      valueProposition: "Integrated Property Management and Investment Analytics Environment",
      keyMetrics: [
        { value: "22 → 7", label: "Days in reporting cycle" },
        { value: "Eliminated", label: "Data discrepancies" },
        { value: "Enhanced", label: "Property team productivity" }
      ]
    }
  ];

  const approachCards = [
    {
      title: "Discovery Process",
      description: "Our segment-specific discovery frameworks identify the unique challenges and opportunities within each alternative investment category.",
      icon: <Target className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Tailored Implementation",
      description: "Solutions designed specifically for the workflows and requirements of each investment strategy and operational model.",
      icon: <Building className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Specialized Expertise",
      description: "Consultants with direct experience in each alternative investment segment for true domain understanding.",
      icon: <Users className="w-8 h-8 text-emerald-600" />
    },
    {
      title: "Continuous Optimization",
      description: "Ongoing refinement based on evolving segment-specific requirements and industry best practices.",
      icon: <Clock className="w-8 h-8 text-orange-600" />
    }
  ];

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-4">Specialized Solutions for<br/>Alternative Investment Segments</h1>
          <p className="text-xl mb-8 max-w-2xl">We understand the unique technology challenges facing different types of boutique investment firms and have created specialized approaches for each segment.</p>
          <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Schedule Segment-Specific Consultation
          </button>
        </div>
      </div>
      
      {/* Introduction */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Different Strategies, Different Requirements</h2>
            <p className="text-xl text-gray-600">While all alternative investment firms share certain challenges, each segment has unique workflows and requirements that demand specialized solutions. Our segment-specific approach ensures technology truly enhances your particular investment strategy.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachCards.map((card, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="flex justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">{card.title}</h3>
                <p className="text-gray-600 text-center">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Segments */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Specialized Segments</h2>
          
          <div className="space-y-12">
            {segments.map((segment, index) => (
              <div key={segment.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-white rounded-xl shadow-lg overflow-hidden`}>
                <div className="lg:w-1/3 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 flex flex-col justify-center">
                  <div className="flex justify-center mb-6">
                    {segment.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">{segment.title}</h3>
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm mb-6">
                    <h4 className="font-medium mb-3 text-center">Key Metrics</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {segment.keyMetrics.map((metric, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <div className="text-2xl font-bold">{metric.value}</div>
                          <div className="text-sm text-white text-opacity-90">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <Link 
                      to={`/segments/${segment.id}`}
                      className="inline-flex items-center bg-white text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
                
                <div className="lg:w-2/3 p-8">
                  <h3 className="text-2xl font-bold mb-4">{segment.title} Solutions</h3>
                  <p className="text-lg text-gray-700 mb-6">{segment.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Key Challenges</h4>
                    <ul className="space-y-2">
                      {segment.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckSquare className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                    <h4 className="text-lg font-semibold mb-2">Value Proposition</h4>
                    <p className="text-gray-700">{segment.valueProposition}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Why Segment-Specific Approach */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Why We Take a Segment-Specific Approach</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Generic MSPs Don't Understand Your Business</h3>
                <p className="text-gray-700 mb-4">Most IT service providers treat all businesses the same, missing the unique requirements of different investment strategies:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Lack understanding of investment-specific workflows</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Miss critical security requirements for investment operations</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Can't support institutional due diligence requirements</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Enterprise Solutions Are Too Complex and Costly</h3>
                <p className="text-gray-700 mb-4">Large financial services providers offer solutions designed for massive institutions that don't work for boutique firms:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Excessive complexity requiring dedicated teams to manage</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Cost structures designed for multi-billion dollar operations</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Rigid frameworks that don't scale down effectively</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
              <h3 className="text-xl font-semibold mb-4">Our Segment-Specific Advantage</h3>
              <p className="text-gray-700 mb-6">We've created specialized solutions for each alternative investment segment based on extensive experience with boutique firms across strategies:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-start gap-3">
                    <CheckSquare className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Strategy-Aligned Technology</h4>
                      <p className="text-sm text-gray-600">Solutions designed specifically for your investment approach and operational model.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-start gap-3">
                    <CheckSquare className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Boutique-Appropriate Scale</h4>
                      <p className="text-sm text-gray-600">Enterprise capabilities delivered at a scale and cost appropriate for firms with 5-50 employees.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-start gap-3">
                    <CheckSquare className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Segment-Specific Expertise</h4>
                      <p className="text-sm text-gray-600">Consultants with direct experience in your specific investment category.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-start gap-3">
                    <CheckSquare className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Institutional-Grade Documentation</h4>
                      <p className="text-sm text-gray-600">Frameworks and policies designed to satisfy both regulators and institutional investors.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SegmentsPage;