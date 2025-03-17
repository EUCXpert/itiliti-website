import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HoverCard from '../../HoverCard'; // Updated import path
import { 
  Shield, 
  Lightbulb, 
  Users, 
  BrainCircuit, 
  Archive, 
  Headphones, 
  Scale,
  ArrowRight,
  Target,
  CheckSquare,
  FileText,
  ArrowUpRight // Added missing import
} from 'lucide-react';

// Service data - in a real implementation, this would likely come from a central data store or API
const allServices = [
  {
    id: 'security-foundation',
    title: "Security Foundation",
    description: "Enterprise-grade security infrastructure tailored for boutique investment firms, meeting regulatory and investor requirements.",
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    category: 'foundation',
    phase: 'Phase 1: Security Foundation',
    metrics: [
      { value: "100%", label: "ODD pass rate after implementation" },
      { value: "75%", label: "Reduction in security incidents" }
    ],
    keyPoints: [
      "Comprehensive security posture assessment",
      "Investment-specific security controls",
      "Operational due diligence readiness",
      "Business continuity & disaster recovery"
    ]
  },
  {
    id: 'microsoft-optimization',
    title: "Microsoft Optimization",
    description: "Strategic license management and platform utilization to reduce costs and enhance capabilities for your investment operations.",
    icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
    category: 'optimization',
    phase: 'Phase 2: Optimization',
    metrics: [
      { value: "25-40%", label: "Reduction in Microsoft spend" },
      { value: "45%", label: "Cost reduction through proper Azure sizing" }
    ],
    keyPoints: [
      "Microsoft licensing optimization",
      "Security stack consolidation",
      "Azure cloud optimization",
      "Dynamics & Power Platform customization"
    ]
  },
  {
    id: 'cxo-services',
    title: "CxO Advisory Services",
    description: "Fractional executive technology leadership providing enterprise expertise at boutique-appropriate scale and cost.",
    icon: <Users className="w-12 h-12 text-blue-600" />,
    category: 'transformation',
    phase: 'Phase 3: Transformation',
    metrics: [
      { value: "60-75%", label: "Cost savings vs. full-time executive hire" },
      { value: "35%", label: "Reduction in technology TCO" }
    ],
    keyPoints: [
      "Virtual CIO services",
      "CISO as a Service",
      "Technology roadmap development",
      "Investment-focused digital transformation"
    ]
  },
  {
    id: 'ai-services',
    title: "AI Solutions",
    description: "Transform your investment processes with AI capabilities that enhance, not replace, your team's expertise and judgment.",
    icon: <BrainCircuit className="w-12 h-12 text-blue-600" />,
    category: 'transformation',
    phase: 'Phase 3: Transformation',
    metrics: [
      { value: "40%", label: "Improvement in research efficiency" },
      { value: "3.5x", label: "Increase in deal evaluation capacity" }
    ],
    keyPoints: [
      "Investment research analysis",
      "Due diligence acceleration",
      "Portfolio analytics enhancement",
      "Investor communication automation"
    ]
  },
  {
    id: 'electronic-message-archiving',
    title: "Electronic Message Archiving",
    description: "SEC-compliant text message archiving solution with white-glove implementation to ensure regulatory compliance.",
    icon: <Archive className="w-12 h-12 text-blue-600" />,
    category: 'foundation',
    phase: 'Phase 1: Security Foundation',
    metrics: [
      { value: "100%", label: "SEC compliance for text messages" },
      { value: "15 min", label: "Average support response time" }
    ],
    keyPoints: [
      "SEC-compliant text archiving",
      "Communication supervision",
      "eDiscovery & legal hold",
      "White-glove implementation"
    ]
  },
  {
    id: 'private-msp',
    title: "Private MSP",
    description: "Experience truly personalized IT service tailored specifically for investment firms with trading-hour support and financial expertise.",
    icon: <Headphones className="w-12 h-12 text-blue-600" />,
    category: 'foundation',
    phase: 'Phase 1: Security Foundation',
    metrics: [
      { value: "15 min", label: "Average response time" },
      { value: "Zero", label: "Trading disruptions" }
    ],
    keyPoints: [
      "White-glove service desk",
      "Investment-aware monitoring",
      "Embedded security operations",
      "Business continuity focus"
    ]
  },
  {
    id: 'regulatory-compliance',
    title: "Regulatory Compliance",
    description: "Navigate complex regulatory requirements with technology-powered compliance solutions tailored for alternative investment firms.",
    icon: <Scale className="w-12 h-12 text-blue-600" />,
    category: 'optimization',
    phase: 'Phase 2: Optimization',
    metrics: [
      { value: "85%", label: "Reduction in deficiency findings" },
      { value: "65%", label: "Reduction in audit preparation time" }
    ],
    keyPoints: [
      "Regulatory compliance framework",
      "Policy development & management",
      "Compliance monitoring & testing",
      "Regulatory exam preparation"
    ]
  }
];

const ServiceSelector = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedServices, setSelectedServices] = useState([]);
  const [showComparison, setShowComparison] = useState(false);
  
  const serviceCategories = [
    { id: 'all', name: 'All Services' },
    { id: 'foundation', name: 'Foundation' },
    { id: 'optimization', name: 'Optimization' },
    { id: 'transformation', name: 'Transformation' }
  ];
  
  // Filter services based on active category
  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  // Toggle service selection
  const toggleServiceSelection = (serviceId) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else {
      if (selectedServices.length < 3) {
        setSelectedServices([...selectedServices, serviceId]);
      }
    }
  };

  // Get phase title based on category
  const getPhaseTitle = (category) => {
    switch(category) {
      case 'foundation': return 'Phase 1: Security Foundation';
      case 'optimization': return 'Phase 2: Optimization';
      case 'transformation': return 'Phase 3: Transformation';
      default: return '';
    }
  };

  // Selected services for comparison
  const servicesForComparison = allServices.filter(service => 
    selectedServices.includes(service.id)
  );

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Service Offerings</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed specifically for the unique needs of alternative investment firms.
          </p>
          
          {selectedServices.length > 0 && (
            <div className="mt-4">
              <button 
                onClick={() => setShowComparison(!showComparison)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center"
              >
                {showComparison ? 'Hide Comparison' : `Compare ${selectedServices.length} Selected Services`}
                <ArrowRight className={`w-4 h-4 ml-2 transition-transform ${showComparison ? 'rotate-90' : ''}`} />
              </button>
            </div>
          )}
        </div>
        
        {/* Service Comparison Section */}
        {showComparison && selectedServices.length > 0 && (
          <div className="mb-12 bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6">Service Comparison</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left border-b"></th>
                    {servicesForComparison.map(service => (
                      <th key={service.id} className="p-4 text-center border-b">
                        <div className="flex flex-col items-center">
                          <div className="bg-blue-100 p-3 rounded-full mb-2">
                            {React.cloneElement(service.icon, { className: "w-8 h-8 text-blue-600" })}
                          </div>
                          <span className="font-bold">{service.title}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b font-medium">Description</td>
                    {servicesForComparison.map(service => (
                      <td key={service.id} className="p-4 border-b text-sm">
                        {service.description}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-b font-medium">Phase</td>
                    {servicesForComparison.map(service => (
                      <td key={service.id} className="p-4 border-b">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          {getPhaseTitle(service.category)}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-b font-medium">Key Capabilities</td>
                    {servicesForComparison.map(service => (
                      <td key={service.id} className="p-4 border-b">
                        <ul className="space-y-2">
                          {service.keyPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <CheckSquare className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-b font-medium">Key Metrics</td>
                    {servicesForComparison.map(service => (
                      <td key={service.id} className="p-4 border-b">
                        <div className="grid grid-cols-1 gap-2">
                          {service.metrics.map((metric, idx) => (
                            <div key={idx} className="bg-blue-50 p-2 rounded-lg text-center">
                              <div className="text-lg font-bold text-blue-600">{metric.value}</div>
                              <div className="text-xs text-gray-600">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4"></td>
                    {servicesForComparison.map(service => (
                      <td key={service.id} className="p-4 text-center">
                        <Link 
                          to={`/${service.id}`} 
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {/* Category Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="bg-white rounded-lg shadow-md p-1 inline-flex">
            {serviceCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <div key={service.id} className="relative">
              {/* Selection checkbox */}
              <div className="absolute top-4 right-4 z-10">
                <button 
                  onClick={() => toggleServiceSelection(service.id)}
                  className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors ${
                    selectedServices.includes(service.id) 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white border border-gray-300 hover:border-blue-500'
                  }`}
                >
                  {selectedServices.includes(service.id) && (
                    <CheckSquare className="w-4 h-4" />
                  )}
                </button>
              </div>
              
              <HoverCard 
                href={`/${service.id}`} 
                hoverEffect="both"
                className="h-full"
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Show phase label if not showing all */}
                  {activeCategory === 'all' && (
                    <div className="text-sm font-medium text-gray-500 mb-4">
                      {getPhaseTitle(service.category)}
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-3">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mt-auto">
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <h4 className="font-medium text-gray-800 mb-3">Key Capabilities:</h4>
                      <ul className="space-y-2">
                        {service.keyPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckSquare className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                            <span className="text-gray-600 text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4">
                      <div className="grid grid-cols-2 gap-3">
                        {service.metrics.map((metric, idx) => (
                          <div key={idx} className="bg-blue-50 p-3 rounded-lg">
                            <div className="text-xl font-bold text-blue-600">{metric.value}</div>
                            <div className="text-xs text-gray-600">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 text-blue-600 text-sm font-medium flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </HoverCard>
            </div>
          ))}
        </div>
        
        {/* Path Forward CTA */}
        <div className="mt-16 bg-gradient-to-r from-black to-blue-900 rounded-xl overflow-hidden shadow-xl">
          <div className="p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Technology?</h3>
            <p className="max-w-2xl mx-auto mb-6">
              Our strategic approach delivers immediate value while building toward your long-term goals.
              Let's discuss which services align with your current priorities.
            </p>
            <button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center">
              Schedule a Strategic Consultation
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSelector;