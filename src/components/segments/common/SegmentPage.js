import React, { useState } from 'react';
import SegmentNavigation from './SegmentNavigation';
import { 
  CheckSquare, 
  ArrowRight, 
  Target, 
  Shield, 
  Lightbulb, 
  Users, 
  BrainCircuit, 
  Archive,
  Building
} from 'lucide-react';

const SegmentPage = ({ 
  title, 
  subtitle, 
  description, 
  challenges, 
  keyFeatures,
  recommendedServices,
  metrics,
  caseStudy,
  serviceOfferings
}) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };
  
  // Common FAQs for segment pages with segment-specific wording
  const faqs = [
    {
      id: 1,
      question: `What makes your approach different for ${title} firms?`,
      answer: `Unlike generic providers, we understand the specific requirements of ${title.toLowerCase()} firms and their unique workflows. Our solutions are tailored to address the specialized challenges of ${title.toLowerCase()} operations, regulatory compliance, and investor due diligence requirements. We bring financial services expertise with every engagement, ensuring technology truly enhances your investment capabilities rather than just maintaining basic functions.`
    },
    {
      id: 2,
      question: `How do you accommodate the unique needs of ${title} strategies?`,
      answer: `We've worked with numerous ${title.toLowerCase()} firms and understand the specific operational workflows, compliance requirements, and investor expectations for your strategy. Our team includes professionals with direct ${title.toLowerCase()} experience, ensuring we speak your language and understand your unique challenges from day one.`
    },
    {
      id: 3,
      question: "How quickly can you implement solutions for our firm?",
      answer: `Most ${title.toLowerCase()} clients see significant improvements within 30-60 days of engagement, with more comprehensive transformations typically completed within 90 days. We use a phased approach that delivers immediate value while building toward long-term strategic goals. Our implementation methodology is designed to minimize disruption to your investment operations while quickly addressing critical pain points.`
    },
    {
      id: 4,
      question: "What kind of ongoing support do you provide?",
      answer: `We provide ongoing support tailored to the unique needs of ${title.toLowerCase()} firms, including trading-hour aware response for critical systems, monthly optimization reviews, and quarterly strategic planning. Our support model includes both technical assistance and strategic guidance, ensuring services continue to enhance your investment operations as your firm grows and evolves.`
    },
    {
      id: 5,
      question: "How do you ensure solutions align with investor due diligence requirements?",
      answer: `We've supported hundreds of ${title.toLowerCase()} firms through institutional investor due diligence processes. Our solutions incorporate best practices from these experiences, ensuring your infrastructure meets and exceeds investor expectations. We provide comprehensive documentation, frameworks, and governance models specifically designed to address the scrutiny of sophisticated allocators during operational due diligence.`
    }
  ];

  // Map service name to icon
  const getServiceIcon = (serviceName) => {
    const serviceIcons = {
      "Security Foundation": <Shield className="w-8 h-8 text-blue-600" />,
      "Microsoft Optimization": <Lightbulb className="w-8 h-8 text-blue-600" />,
      "CxO Advisory Services": <Users className="w-8 h-8 text-blue-600" />,
      "AI Solutions": <BrainCircuit className="w-8 h-8 text-blue-600" />,
      "Electronic Message Archiving": <Archive className="w-8 h-8 text-blue-600" />,
      "Private MSP": <Building className="w-8 h-8 text-blue-600" />
    };
    
    return serviceIcons[serviceName] || <Shield className="w-8 h-8 text-blue-600" />;
  };

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <SegmentNavigation activeSegment={title} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-blue-900 text-white">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-4">{title}<br/>{subtitle}</h1>
          <p className="text-xl mb-8 max-w-2xl">{description}</p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Schedule Consultation
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
              Download Solution Brief
            </button>
          </div>
        </div>
      </div>
      
      {/* Tab Navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto">
            <button
              className={`px-6 py-4 font-medium text-lg whitespace-nowrap ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`px-6 py-4 font-medium text-lg whitespace-nowrap ${activeTab === 'services' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={() => setActiveTab('services')}
            >
              Recommended Services
            </button>
            <button
              className={`px-6 py-4 font-medium text-lg whitespace-nowrap ${activeTab === 'casestudy' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={() => setActiveTab('casestudy')}
            >
              Success Story
            </button>
            <button
              className={`px-6 py-4 font-medium text-lg whitespace-nowrap ${activeTab === 'faqs' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={() => setActiveTab('faqs')}
            >
              FAQs
            </button>
          </div>
        </div>
      </div>
      
      {/* Content Sections */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <div className="max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-6">Technology Solutions for {title} Firms</h2>
                <p className="text-xl text-gray-700 mb-8">{title} firms face unique technology challenges that generic solutions fail to address. Our specialized approach delivers enterprise-grade capabilities at a scale and cost appropriate for boutique firms.</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {challenges.map((challenge, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        {challenge.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{challenge.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600">{challenge.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="p-4 bg-blue-600 rounded-full text-white flex-shrink-0">
                    <Shield className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Our {title}-Specific Approach</h3>
                    <p className="text-gray-700 mb-6">{keyFeatures.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {metrics.map((metric, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-blue-600 mb-2">{metric.value}</div>
                          <div className="font-medium">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Services Tab */}
          {activeTab === 'services' && (
            <div>
              <div className="max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-6">Recommended Services for {title} Firms</h2>
                <p className="text-xl text-gray-700 mb-8">We've carefully selected and customized these services to address the specific challenges and requirements of {title.toLowerCase()} firms.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {recommendedServices.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          {getServiceIcon(service.title)}
                        </div>
                        <h3 className="text-lg font-semibold">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="border-t border-gray-200 pt-4 mt-4">
                        <h4 className="font-medium text-gray-800 mb-3">Why It Matters for {title} Firms:</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckSquare className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-black to-blue-900 text-white rounded-xl overflow-hidden shadow-lg max-w-5xl mx-auto">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Our {title}-Specific Implementation Methodology</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white bg-opacity-10 p-5 rounded-lg backdrop-blur-sm">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="bg-white text-blue-600 h-8 w-8 rounded-full flex items-center justify-center font-bold text-lg">1</div>
                        <h4 className="font-semibold text-lg">Assessment</h4>
                      </div>
                      <p className="text-white text-opacity-90 text-sm">{title}-specific analysis of your current environment, challenges, and strategic goals to define the path forward.</p>
                    </div>
                    <div className="bg-white bg-opacity-10 p-5 rounded-lg backdrop-blur-sm">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="bg-white text-blue-600 h-8 w-8 rounded-full flex items-center justify-center font-bold text-lg">2</div>
                        <h4 className="font-semibold text-lg">Implementation</h4>
                      </div>
                      <p className="text-white text-opacity-90 text-sm">Structured execution that prioritizes critical components while minimizing disruption to your {title.toLowerCase()} operations.</p>
                    </div>
                    <div className="bg-white bg-opacity-10 p-5 rounded-lg backdrop-blur-sm">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="bg-white text-blue-600 h-8 w-8 rounded-full flex items-center justify-center font-bold text-lg">3</div>
                        <h4 className="font-semibold text-lg">Optimization</h4>
                      </div>
                      <p className="text-white text-opacity-90 text-sm">Continuous refinement and improvement to ensure maximum value and adaptation to your evolving requirements as a {title.toLowerCase()} firm.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Case Study Tab */}
          {activeTab === 'casestudy' && (
            <div>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">{title} Success Story: {caseStudy.title}</h2>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 bg-gradient-to-b from-black to-blue-900 text-white p-8">
                      <h3 className="text-2xl font-bold mb-4">{caseStudy.firmType}</h3>
                      <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm mb-6">
                        <div className="font-medium mb-1">Client Profile</div>
                        <ul className="space-y-2 text-sm">
                          {caseStudy.profile.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                              {item.icon}
                              <span>{item.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <div className="font-medium mb-1">Challenge</div>
                        <p className="text-sm">
                          {caseStudy.challenge}
                        </p>
                      </div>
                    </div>
                    
                    <div className="lg:w-2/3 p-8">
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold mb-4">Our Approach</h4>
                        <ul className="space-y-3 mb-6">
                          {caseStudy.approach.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <CheckSquare className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <h4 className="text-xl font-semibold mb-4">Results</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          {caseStudy.results.map((result, index) => (
                            <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                              <div className="text-3xl font-bold text-blue-600">{result.value}</div>
                              <div className="text-sm text-gray-700">{result.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <blockquote className="italic text-gray-700 border-l-4 border-blue-600 pl-4 py-2 mb-4">
                          "{caseStudy.quote}"
                        </blockquote>
                        <div className="flex items-center">
                          <img src="/api/placeholder/60/60" alt={caseStudy.author.title} className="w-12 h-12 rounded-full mr-4" />
                          <div>
                            <div className="font-medium text-blue-600">{caseStudy.author.title}</div>
                            <div className="text-sm text-gray-600">{caseStudy.author.company}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* FAQs Tab */}
          {activeTab === 'faqs' && (
            <div>
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions for {title} Firms</h2>
                
                <div>
                  {faqs.map((faq) => (
                    <div 
                      key={faq.id} 
                      className="border-b border-gray-200 py-4"
                    >
                      <button 
                        className="flex justify-between items-center w-full text-left"
                        onClick={() => toggleFaq(faq.id)}
                      >
                        <h3 className="text-lg font-medium">{faq.question}</h3>
                        <ArrowRight className={`w-5 h-5 text-blue-600 transition-transform duration-200 ${expandedFaq === faq.id ? 'rotate-90' : ''}`} />
                      </button>
                      <div 
                        className={`mt-2 overflow-hidden transition-all duration-300 ${
                          expandedFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-gray-700 pb-4">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-blue-50 border-t border-b border-blue-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your {title.toLowerCase()} firm's technology?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Schedule a consultation with our specialists who understand the unique needs of {title.toLowerCase()} firms.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
              Schedule a Consultation
            </button>
            <button className="bg-white text-blue-700 border border-blue-300 shadow-sm px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors">
              Download {title} Solutions Guide
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SegmentPage;