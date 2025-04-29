import React from 'react';
import { Link } from 'react-router-dom';
import ServiceNavigation from '../components/services/common/ServiceNavigation';
import ScheduleButton from '../components/ScheduleButton';
import ServiceSelector from '../components/services/common/ServiceSelector';
import { 
  Target, 
  CheckSquare, 
  FileText,
  Shield,
  Users,
  Lightbulb,
  BrainCircuit,
  BarChart4,
  ArrowRight,
  Calendar,
  Briefcase,
  CheckCircle,
  DollarSign
} from 'lucide-react';

// Import service data
import { SERVICES } from '../data/services/serviceData';

const AllServicesPage = () => {
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
        { id: "workflow-automation", name: "Workflow Automation", path: "/workflow-automation" }
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
    <div className="font-sans min-h-screen bg-gray-50">
      {/* Use ServiceNavigation component */}
      <ServiceNavigation activeService="All Services" />
      
{/* Hero Section */}
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
      <ScheduleButton 
        text="Schedule a Service Consultation" 
        variant="primary" 
        className="text-lg px-8 py-4"
      />
    </div>
  </div>
</div>
      
      {/* Integrated ServiceSelector Component */}
      <ServiceSelector />
      
      {/* Three Phase Services Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Service Roadmap</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to building enterprise-grade technology capabilities at boutique scale.
            </p>
          </div>
          
          <div className="space-y-16">
            {threePhaseServices.map((phase, phaseIndex) => (
              <div key={phaseIndex} className="relative">
                {/* Phase Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full bg-${phase.color}-100 flex items-center justify-center mr-4`}>
                    {phase.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{phase.phase}</h3>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                </div>
                
                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {phase.services.map((service, serviceIndex) => {
                    // Get service data from our central store
                    const serviceData = SERVICES[service.id];
                    
                    return (
                      <Link 
                        key={serviceIndex} 
                        to={service.path}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 overflow-hidden"
                      >
                        <div className="p-6">
                          <h4 className="text-xl font-bold mb-3">{service.name}</h4>
                          {serviceData && (
                            <p className="text-gray-600 mb-4">{serviceData.description.substring(0, 120)}...</p>
                          )}
                          <div className="text-blue-600 font-medium flex items-center">
                            Learn More <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                
                {/* Value Props for this Phase */}
                <div className={`bg-${phase.color}-50 rounded-xl p-6 mb-10`}>
                  <div className="grid md:grid-cols-3 gap-4">
                    {phaseValueProps[phaseIndex].props.map((prop, propIndex) => (
                      <div key={propIndex} className="flex items-start p-4">
                        <div className="mr-3 flex-shrink-0">
                          {prop.icon}
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">{prop.title}</h5>
                          <p className="text-sm text-gray-600">{prop.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Assessment Integration Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-4">Not Sure Where to Start?</h3>
                <p className="text-gray-700 mb-6">
                  Take one of our quick assessments to identify which services would provide the most immediate value for your firm.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Security Posture Assessment</h4>
                      <p className="text-sm text-gray-600">Evaluate your cybersecurity readiness</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <BrainCircuit className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">AI Readiness Assessment</h4>
                      <p className="text-sm text-gray-600">Determine your AI implementation potential</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Briefcase className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Operational Due Diligence Assessment</h4>
                      <p className="text-sm text-gray-600">Prepare for institutional investor scrutiny</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Link 
                    to="/assessments" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center transition-colors"
                  >
                    Go to Assessment Hub
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 bg-gradient-to-r from-blue-600 to-purple-700 p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-4">Benefits of Assessments</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                    <span>Identify critical gaps in your technology infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                    <span>Receive tailored recommendations for your firm's specific needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                    <span>Prioritize technology investments for maximum impact</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                    <span>Benchmark against industry best practices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                    <span>5-7 minute completion time with immediate results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Executive Value Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Executive Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our services deliver measurable business value and strategic advantages for executive leaders.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl p-6 shadow-sm relative">
              <div className="absolute top-0 right-0 mt-4 mr-4">
                <DollarSign className="w-10 h-10 text-blue-200" />
              </div>
              <h3 className="text-lg font-bold text-blue-800 mb-6">CFO Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">25-40% reduction in technology spend</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Predictable technology budgeting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Reduced regulatory risk exposure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Investment-aligned expense scaling</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-b from-purple-50 to-purple-100 rounded-xl p-6 shadow-sm relative">
              <div className="absolute top-0 right-0 mt-4 mr-4">
                <Briefcase className="w-10 h-10 text-purple-200" />
              </div>
              <h3 className="text-lg font-bold text-purple-800 mb-6">COO Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">40-60% increase in operational efficiency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Enhanced investor transparency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Streamlined compliance processes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Scalable operations without headcount growth</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-b from-indigo-50 to-indigo-100 rounded-xl p-6 shadow-sm relative">
              <div className="absolute top-0 right-0 mt-4 mr-4">
                <Target className="w-10 h-10 text-indigo-200" />
              </div>
              <h3 className="text-lg font-bold text-indigo-800 mb-6">CIO Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Enterprise capabilities at boutique scale</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Integrated security and compliance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Technology aligned with investment strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Operational Due Diligence readiness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServicesPage;