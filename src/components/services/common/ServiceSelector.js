import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lightbulb, 
  BrainCircuit, 
  Server, 
  FileText, 
  Users, 
  ArrowRight,
  CheckSquare,
  BarChart4,
  Database,
  MessageSquare,
  Archive,
  CloudCog,
  DollarSign,
  TrendingUp,
  Target,
  AlertTriangle
} from 'lucide-react';

// Import service data
import { SERVICE_CATEGORIES } from '../../../data/services/serviceCategories';
import { SERVICES, getServicesByCategory } from '../../../data/services/serviceData';

const ServiceSelector = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeView, setActiveView] = useState('service'); // 'service' or 'executive'
  
  // Define category icons
  const categoryIcons = {
    'all': <Shield className="w-6 h-6" />,
    'security': <Shield className="w-6 h-6" />,
    'advisory': <Users className="w-6 h-6" />,
    'infrastructure': <Server className="w-6 h-6" />,
    'compliance': <FileText className="w-6 h-6" />
  };
  
  // Manually define services with icons for consistent display
  const serviceIcons = {
    'security-foundation': <Shield className="w-8 h-8 text-blue-600" />,
    'microsoft-optimization': <CloudCog className="w-8 h-8 text-blue-600" />,
    'cxo-services': <Users className="w-8 h-8 text-blue-600" />,
    'ai-services': <BrainCircuit className="w-8 h-8 text-blue-600" />,
    'electronic-message-archiving': <Archive className="w-8 h-8 text-blue-600" />,
    'private-msp': <Server className="w-8 h-8 text-blue-600" />,
    'regulatory-compliance': <FileText className="w-8 h-8 text-blue-600" />,
    'workflow-automation': <BarChart4 className="w-8 h-8 text-blue-600" />
  };
  
  // Define executive priorities for each service
  const executivePriorities = {
    'security-foundation': {
      cfo: {
        icon: <DollarSign className="w-6 h-6 text-green-600" />,
        priority: "Risk Mitigation & Cost Avoidance",
        description: "Quantifiable reduction in financial risk exposure and avoidance of breach-related expenses"
      },
      cio: {
        icon: <Shield className="w-6 h-6 text-blue-600" />,
        priority: "Institutional Investor Readiness",
        description: "Enterprise-grade security posture that satisfies institutional due diligence requirements"
      },
      coo: {
        icon: <CheckSquare className="w-6 h-6 text-purple-600" />,
        priority: "Operational Resilience",
        description: "Fortified operational infrastructure with minimized disruption risk"
      }
    },
    'microsoft-optimization': {
      cfo: {
        icon: <DollarSign className="w-6 h-6 text-green-600" />,
        priority: "25-40% Cost Reduction",
        description: "Significant reduction in Microsoft licensing spend through strategic optimization"
      },
      cio: {
        icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
        priority: "Technology Consolidation",
        description: "Streamlined technology stack with enhanced capabilities and reduced complexity"
      },
      coo: {
        icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
        priority: "Workflow Enhancement",
        description: "Improved operational efficiency through optimized collaboration tools"
      }
    },
    'cxo-services': {
      cfo: {
        icon: <DollarSign className="w-6 h-6 text-green-600" />,
        priority: "60-75% Cost Reduction vs. Full-Time Hire",
        description: "Enterprise-caliber leadership at a fraction of the cost of a full-time executive"
      },
      cio: {
        icon: <Users className="w-6 h-6 text-blue-600" />,
        priority: "Strategic Technology Guidance",
        description: "Seasoned investment technology leadership without recruitment challenges"
      },
      coo: {
        icon: <Target className="w-6 h-6 text-purple-600" />,
        priority: "Operational Excellence",
        description: "Improved operational capabilities with measurable performance enhancements"
      }
    },
    'ai-services': {
      cfo: {
        icon: <DollarSign className="w-6 h-6 text-green-600" />,
        priority: "Operational Cost Reduction",
        description: "Automate repetitive tasks to reduce operational expenses and improve accuracy"
      },
      cio: {
        icon: <BrainCircuit className="w-6 h-6 text-blue-600" />,
        priority: "Technological Advantage",
        description: "Gain competitive edge through advanced AI applications without specialized staff"
      },
      coo: {
        icon: <BarChart4 className="w-6 h-6 text-purple-600" />,
        priority: "Enhanced Decision Making",
        description: "Unlock hidden insights in your data to improve investment performance"
      }
    },
    'electronic-message-archiving': {
      cfo: {
        icon: <AlertTriangle className="w-6 h-6 text-orange-600" />,
        priority: "Regulatory Fine Avoidance",
        description: "Avoid multi-million dollar SEC penalties for communication recordkeeping failures"
      },
      cio: {
        icon: <Archive className="w-6 h-6 text-blue-600" />,
        priority: "Compliance Automation",
        description: "Automate recordkeeping with minimal IT resource requirements"
      },
      cco: {
        icon: <CheckSquare className="w-6 h-6 text-purple-600" />,
        priority: "Regulatory Examination Readiness",
        description: "Immediate compliance with SEC Rule 17a-4 and recordkeeping requirements"
      }
    },
    'private-msp': {
      cfo: {
        icon: <DollarSign className="w-6 h-6 text-green-600" />,
        priority: "Predictable IT Expenditure",
        description: "Fixed monthly costs with enterprise-grade service at boutique-appropriate pricing"
      },
      cio: {
        icon: <Server className="w-6 h-6 text-blue-600" />,
        priority: "Infrastructure Reliability",
        description: "99.99% uptime for critical investment systems with rapid response protocols"
      },
      coo: {
        icon: <Users className="w-6 h-6 text-purple-600" />,
        priority: "Productivity Enhancement",
        description: "Minimize technology disruptions to investment operations with trading-hour aware support"
      }
    },
    'regulatory-compliance': {
      cfo: {
        icon: <AlertTriangle className="w-6 h-6 text-orange-600" />,
        priority: "Regulatory Penalty Avoidance",
        description: "Proactive compliance to avoid significant financial penalties and remediation costs"
      },
      cco: {
        icon: <FileText className="w-6 h-6 text-blue-600" />,
        priority: "Examination Readiness",
        description: "Comprehensive preparation for SEC and regulatory examinations"
      },
      ceo: {
        icon: <Target className="w-6 h-6 text-purple-600" />,
        priority: "Capital Raising Enhancement",
        description: "Strengthen investor due diligence capabilities to improve fundraising outcomes"
      }
    },
    'workflow-automation': {
      cfo: {
        icon: <DollarSign className="w-6 h-6 text-green-600" />,
        priority: "Operational Cost Reduction",
        description: "Reduce manual processes to lower operational expenses and improve scalability"
      },
      cio: {
        icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
        priority: "Digital Transformation",
        description: "Accelerate digital transformation with targeted workflow enhancements"
      },
      coo: {
        icon: <BarChart4 className="w-6 h-6 text-purple-600" />,
        priority: "Operational Scalability",
        description: "Scale operations without proportional headcount increases"
      }
    }
  };
  
  // Get all service categories
  const categories = Object.values(SERVICE_CATEGORIES);
  
  // Function to get services based on active category
  const getServices = () => {
    if (activeCategory === 'all') {
      return Object.entries(serviceIcons).map(([id, icon]) => ({
        id,
        icon,
        path: id === 'workflow-automation' ? '/workflow-automation' : `/services/${id}`,
        executivePriorities: executivePriorities[id] || {}
      }));
    }
    
    return getServicesByCategory(activeCategory).map(service => ({
      id: service.id,
      icon: serviceIcons[service.id],
      path: service.id === 'workflow-automation' ? '/workflow-automation' : `/services/${service.id}`,
      executivePriorities: executivePriorities[service.id] || {}
    }));
  };
  
  // Get filtered services
  const filteredServices = getServices();
  
  // Function to format service name from ID
  const formatServiceName = (id) => {
    return id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Explore Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select a service category to explore solutions tailored for alternative investment firms.
          </p>
        </div>
        
        {/* View Toggle Buttons */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-100 rounded-full p-1 inline-flex">
            <button
              onClick={() => setActiveView('service')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeView === 'service' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Service View
            </button>
            <button
              onClick={() => setActiveView('executive')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeView === 'executive' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Executive View
            </button>
          </div>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`flex items-center px-6 py-3 rounded-full m-2 font-medium ${
              activeCategory === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Shield className="w-5 h-5 mr-2" />
            All Services
          </button>
          
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full m-2 font-medium ${
                activeCategory === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {categoryIcons[category.id]}
              <span className="ml-2">{category.name}</span>
            </button>
          ))}
        </div>
        
        {activeView === 'service' ? (
          /* Standard Services Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {filteredServices.map((service) => (
              <Link
                key={service.id}
                to={service.path}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 p-6 h-full flex flex-col"
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {formatServiceName(service.id)}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {SERVICES[service.id]?.description?.substring(0, 100)}...
                </p>
                <div className="mt-auto pt-4">
                  <div className="text-blue-600 font-medium flex items-center">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Executive View Grid */
          <div className="max-w-6xl mx-auto">
            {filteredServices.map((service) => (
              <div key={service.id} className="mb-8 bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start">
                    <div className="mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{formatServiceName(service.id)}</h3>
                      <p className="text-gray-600">
                        {SERVICES[service.id]?.description?.substring(0, 120)}...
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 p-6">
                  {Object.entries(service.executivePriorities).map(([role, data], index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-3">
                        {data.icon}
                        <h4 className="font-bold ml-2 uppercase text-sm text-gray-500">{role} Priority</h4>
                      </div>
                      <h5 className="font-semibold text-lg mb-2">{data.priority}</h5>
                      <p className="text-sm text-gray-600">{data.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gray-50 px-6 py-4 text-right">
                  <Link
                    to={service.path}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                  >
                    View Service Details <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceSelector;