import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import ScheduleButton from './ScheduleButton';
import { 
  Building, 
  Users, 
  Target, 
  Award, 
  CheckCircle, 
  Shield, 
  Briefcase, 
  BarChart4,
  ChevronRight
} from 'lucide-react';

const AboutUsPage = () => {
  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-blue-900 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl mb-8">
              We bring enterprise-class expertise and methodologies, right-sized for boutique alternative investment firms.
            </p>
            <ScheduleButton 
              text="Schedule a Consultation" 
              variant="primary" 
              className="text-lg px-8 py-4"
            />
          </div>
        </div>
      </div>
      
      {/* Our Unique Approach */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Unique Approach</h2>
              <p className="text-xl text-gray-600">
                Bridging the gap between enterprise requirements and boutique realities.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-black to-blue-700 rounded-xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">The Enterprise-Boutique Gap</h3>
                  <p className="mb-6">
                    Boutique alternative investment firms face a fundamental challenge: they must satisfy the same institutional investor expectations and regulatory requirements as $50B+ firms, but with a fraction of the resources.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Target className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                      <span>Generic IT providers understand neither your sophisticated requirements nor your resource constraints</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                      <span>Enterprise financial technology providers often ignore firms below certain AUM thresholds</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">Our Solution</h3>
                  <p className="text-gray-700 mb-6">
                    We bridge this gap with enterprise expertise and solutions right-sized for boutique investment firms.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Institutional-Grade Capabilities: Systems and controls that satisfy sophisticated investor due diligence</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Boutique-Appropriate Scale: Implementation approaches that respect the resource constraints of smaller firms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Investment-Specific Focus: Solutions designed for alternative investment strategies rather than generic business needs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Growth-Aligned Architecture: Infrastructure designed to scale efficiently as AUM grows</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Key Differentiators */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Key Differentiators</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What makes our approach unique in the marketplace.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Institutional Due Diligence Expertise</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                We bring deep familiarity with institutional investor expectations, ready-to-use frameworks, and documentation templates that satisfy sophisticated allocators.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Implementation Methodologies</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Our structured project methodologies scaled for boutique firms include risk management approaches, change management techniques, and quality assurance processes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Reference Architectures</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                We provide pre-built reference architectures, security frameworks derived from financial institution standards, and governance models simplified for smaller organizations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <BarChart4 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Risk Management Excellence</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Our enterprise DNA provides sophisticated threat assessment models, compliance frameworks, vendor risk management approaches, and disaster recovery methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* How We Deliver */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How We Deliver Enterprise Value at Boutique Scale</h2>
              <p className="text-xl text-gray-600">
                Our approach is specifically designed for the unique needs of boutique alternative investment firms.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Right-Sized Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Streamlined governance that maintains control without bureaucracy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Simplified documentation that satisfies requirements without excessive overhead</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Focused security controls that address the highest-impact risks</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Alternative Investment Focus</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Understanding of unique operational patterns of alternative investments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Specialized applications knowledge for different strategies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Regulatory landscape specific to investment management</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Flexible Engagement Models</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Fractional technology leadership providing strategic guidance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">On-demand expertise for specialized requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Flexible support aligned with investment workflows</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Enterprise Relationships at Boutique Prices</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Negotiate appropriate pricing for smaller deployments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Access specialized expertise not typically available to boutique firms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Navigate complex enterprise licensing for maximum value</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Segment Expertise */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Segment Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of different alternative investment segments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Hedge Funds</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                We deliver institutional-grade infrastructure right-sized for emerging managers, with trading-hour aware support and cost-efficient scaling aligned with hedge fund economics.
              </p>
              <Link to="/segments/hedge-funds" className="text-blue-600 font-medium flex items-center mt-4">
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Private Equity</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Our solutions balance security with the accessibility needed during time-sensitive transactions, with deal-phase support and portfolio company integration expertise.
              </p>
              <Link to="/segments/private-equity" className="text-blue-600 font-medium flex items-center mt-4">
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Venture Capital</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                We enhance deal flow management and relationship intelligence with mobile-first solutions that support partners constantly on the move while securing sensitive deal information.
              </p>
              <Link to="/segments/venture-capital" className="text-blue-600 font-medium flex items-center mt-4">
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Family Offices</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                We deliver comprehensive wealth intelligence with enhanced privacy protection, providing ultra-high-net-worth security with multi-generational continuity planning.
              </p>
              <Link to="/segments/family-offices" className="text-blue-600 font-medium flex items-center mt-4">
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Real Estate Investment</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                We bridge the gap between property-level operations and institutional-grade investment analytics, supporting document-intensive workflows with field-to-boardroom connectivity.
              </p>
              <Link to="/segments/real-estate" className="text-blue-600 font-medium flex items-center mt-4">
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Client Value Realization */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Client Value Realization</h2>
              <p className="text-xl text-gray-600">
                Our enterprise-to-boutique translation creates measurable value.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Enhanced Capital Raising</h3>
                <p className="text-gray-700">
                  Firms passing institutional due diligence with greater success through enterprise-grade capabilities.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <BarChart4 className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Operational Efficiency</h3>
                <p className="text-gray-700">
                  Teams leveraging enterprise-grade automation at boutique scale for maximum productivity.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Risk Reduction</h3>
                <p className="text-gray-700">
                  Organizations avoiding costly regulatory issues and security incidents through proactive measures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900 to-black text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Bridge the Enterprise-Boutique Gap?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our enterprise-class expertise right-sized for boutique firms can transform your alternative investment technology strategy.
          </p>
          <ScheduleButton 
            text="Schedule a Consultation" 
            variant="primary" 
            className="text-lg px-8 py-4"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;