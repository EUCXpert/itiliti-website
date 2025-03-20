import React from 'react';
import { Link } from 'react-router-dom';
import ServiceNavigation from './common/ServiceNavigation';
import ScheduleButton from '../ScheduleButton';
import ServiceSelector from './common/ServiceSelector';
import CxOPhasesVisualization from '../CxOPhasesVisualization';
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
  Briefcase
} from 'lucide-react';

const AllServicesPage = () => {
  const threePhaseServices = [
    {
      phase: "Phase 1: Foundation",
      description: "Ensure core systems are secure, highly available, and productive with ITSM maturity to support new capabilities.",
      icon: <Shield className="w-8 h-8 text-blue-700" />,
      color: "blue",
      services: [
        { name: "Security Foundation", path: "/security" },
        { name: "Electronic Message Archiving", path: "/electronic-message-archiving" },
        { name: "Private MSP", path: "/private-msp" }
      ]
    },
    {
      phase: "Phase 2: Capabilities",
      description: "Advance your capabilities through AI readiness, enhanced security frameworks, and mature compliance practices.",
      icon: <Lightbulb className="w-8 h-8 text-purple-700" />,
      color: "purple",
      services: [
        { name: "Microsoft Optimization", path: "/microsoft-optimization" },
        { name: "Regulatory Compliance", path: "/regulatory-compliance" }
      ]
    },
    {
      phase: "Phase 3: Optimization",
      description: "Focus on business optimization through advanced AI integration, intelligent automation, and tailored investment solutions.",
      icon: <BrainCircuit className="w-8 h-8 text-indigo-700" />,
      color: "indigo",
      services: [
        { name: "CxO Advisory Services", path: "/cxo-services" },
        { name: "AI Solutions", path: "/ai-services" }
      ]
    }
  ];

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      {/* Use ServiceNavigation component */}
      <ServiceNavigation activeService="All Services" />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-blue-900 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Enterprise-Grade Services at Boutique Scale</h1>
            <p className="text-xl mb-8">
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

      {/* Three-Phase Approach Overview */}
<div className="bg-white py-16">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">Our Three-Phase Approach</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        A comprehensive methodology that transforms your investment firm's technology from a necessary expense into a strategic advantage.
      </p>
    </div>
    
    {/* Replace the grid with the CxOPhasesVisualization component */}
    <CxOPhasesVisualization />
  </div>
</div>
      
      {/* Why Our Services Matter */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Our Services Matter</h2>
              <p className="text-xl text-gray-600">
                Alternative investment firms face unique technology challenges that generic solutions fail to address.
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
                      <span>You need institutional-grade technology but can't justify enterprise costs</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                      <span>Generic IT providers don't understand investment operations</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                      <span>You need sophisticated capabilities but have limited resources</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">Our Solution</h3>
                  <p className="text-gray-700 mb-6">
                    We bridge this gap with enterprise-grade expertise and solutions right-sized for boutique investment firms.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Enterprise expertise adapted to boutique scale and budget</span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Investment-specific technology solutions and methodologies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Growth-aligned architecture that scales with your AUM</span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Trading-hour aware support with financial services expertise</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Client Success Metrics */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Impact of Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results our clients have achieved through our enterprise-to-boutique approach.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
              <p className="text-gray-700">ODD success rate after implementation</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">25-40%</div>
              <p className="text-gray-700">Reduction in Microsoft licensing costs</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3.5x</div>
              <p className="text-gray-700">Increase in deal evaluation capacity</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">65%</div>
              <p className="text-gray-700">Reduction in security incidents</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Comparison Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compare Service Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our three service categories address different aspects of your technology needs.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left border-b"></th>
                  <th className="p-4 text-center border-b">
                    <div className="flex flex-col items-center">
                      <div className="bg-blue-100 p-3 rounded-full mb-2">
                        <Shield className="w-10 h-10 text-blue-600" />
                      </div>
                      <span className="font-bold text-xl">Security Foundation</span>
                      <span className="text-sm text-gray-500">Phase 1</span>
                    </div>
                  </th>
                  <th className="p-4 text-center border-b">
                    <div className="flex flex-col items-center">
                      <div className="bg-purple-100 p-3 rounded-full mb-2">
                        <Lightbulb className="w-10 h-10 text-purple-600" />
                      </div>
                      <span className="font-bold text-xl">Optimization</span>
                      <span className="text-sm text-gray-500">Phase 2</span>
                    </div>
                  </th>
                  <th className="p-4 text-center border-b">
                    <div className="flex flex-col items-center">
                      <div className="bg-indigo-100 p-3 rounded-full mb-2">
                        <BrainCircuit className="w-10 h-10 text-indigo-600" />
                      </div>
                      <span className="font-bold text-xl">Transformation</span>
                      <span className="text-sm text-gray-500">Phase 3</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b font-medium">Focus</td>
                  <td className="p-4 border-b text-center">Protecting assets and meeting regulatory requirements</td>
                  <td className="p-4 border-b text-center">Maximizing ROI from technology investments</td>
                  <td className="p-4 border-b text-center">Strategic advantage through advanced capabilities</td>
                </tr>
                <tr>
                  <td className="p-4 border-b font-medium">Ideal For</td>
                  <td className="p-4 border-b text-center">Firms seeking institutional capital or with security concerns</td>
                  <td className="p-4 border-b text-center">Firms looking to reduce costs and enhance capabilities</td>
                  <td className="p-4 border-b text-center">Firms seeking competitive advantage through technology</td>
                </tr>
                <tr>
                  <td className="p-4 border-b font-medium">Key Services</td>
                  <td className="p-4 border-b">
                    <ul className="space-y-1">
                      <li className="flex items-center justify-center">
                        <CheckSquare className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-sm">Security Foundation</span>
                      </li>
                      <li className="flex items-center justify-center">
                        <CheckSquare className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-sm">Private MSP</span>
                      </li>
                      <li className="flex items-center justify-center">
                        <CheckSquare className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-sm">Electronic Message Archiving</span>
                      </li>
                    </ul>
                  </td>
                  <td className="p-4 border-b">
                    <ul className="space-y-1">
                      <li className="flex items-center justify-center">
                        <CheckSquare className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-sm">Microsoft Optimization</span>
                      </li>
                      <li className="flex items-center justify-center">
                        <CheckSquare className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-sm">Regulatory Compliance</span>
                      </li>
                    </ul>
                  </td>
                  <td className="p-4 border-b">
                    <ul className="space-y-1">
                      <li className="flex items-center justify-center">
                        <CheckSquare className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-sm">CxO Advisory Services</span>
                      </li>
                      <li className="flex items-center justify-center">
                        <CheckSquare className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-sm">AI Solutions</span>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b font-medium">Typical ROI</td>
                  <td className="p-4 border-b text-center">
                    <div className="text-xl font-bold text-blue-600">92%</div>
                    <div className="text-sm text-gray-600">ODD pass rate</div>
                  </td>
                  <td className="p-4 border-b text-center">
                    <div className="text-xl font-bold text-purple-600">25-40%</div>
                    <div className="text-sm text-gray-600">Cost reduction</div>
                  </td>
                  <td className="p-4 border-b text-center">
                    <div className="text-xl font-bold text-indigo-600">3.5x</div>
                    <div className="text-sm text-gray-600">Operational efficiency</div>
                  </td>
                </tr>
                <tr>
                  <td className="p-4"></td>
                  <td className="p-4 text-center">
                    <Link to="/security" className="text-blue-600 hover:text-blue-800 font-medium">
                      Explore Phase 1
                    </Link>
                  </td>
                  <td className="p-4 text-center">
                    <Link to="/microsoft-optimization" className="text-purple-600 hover:text-purple-800 font-medium">
                      Explore Phase 2
                    </Link>
                  </td>
                  <td className="p-4 text-center">
                    <Link to="/cxo-services" className="text-indigo-600 hover:text-indigo-800 font-medium">
                      Explore Phase 3
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Integrated ServiceSelector Component */}
      <ServiceSelector />
      
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
      
      {/* Client Testimonials Section */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 py-16 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Hear directly from boutique alternative investment firms that have transformed their technology with our services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
              <div className="mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-white mb-6">
                "The security foundation services transformed our operational due diligence readiness. We went from struggling with investor requirements to passing ODD reviews with flying colors."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg mr-3">
                  M
                </div>
                <div>
                  <div className="font-medium">Michael R.</div>
                  <div className="text-sm text-blue-300">COO, Hedge Fund</div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
              <div className="mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-white mb-6">
                "Our Microsoft licensing costs dropped by 35% while our capabilities actually improved. Their understanding of both Microsoft and alternative investment is unique and invaluable."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center font-bold text-lg mr-3">
                  J
                </div>
                <div>
                  <div className="font-medium">Jennifer K.</div>
                  <div className="text-sm text-blue-300">Managing Director, Private Equity</div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
              <div className="mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-white mb-6">
                "The CxO Advisory services gave us enterprise-grade technology leadership that we simply couldn't afford otherwise. Their fractional model is perfect for firms our size."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center font-bold text-lg mr-3">
                  D
                </div>
                <div>
                  <div className="font-medium">David W.</div>
                  <div className="text-sm text-blue-300">Founder, Venture Capital Firm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Service Process */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Service Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured methodology that delivers immediate value while building toward long-term strategic goals.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
              
              {/* Step 1 */}
              <div className="relative z-10 mb-12">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 text-right">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Discovery & Assessment</h3>
                    <p className="text-gray-600">
                      Comprehensive analysis of your current environment, challenges, and strategic goals to define the path forward.
                    </p>
                  </div>
                  <div className="hidden md:flex justify-center items-center">
                    <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xl">1</div>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-white p-5 rounded-lg shadow-md">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <FileText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Technology environment assessment</span>
                        </li>
                        <li className="flex items-start">
                          <FileText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5"
                          />
                          <span className="text-gray-700">Security posture evaluation</span>
                        </li>
                        <li className="flex items-start">
                          <FileText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Investment workflow analysis</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative z-10 mb-12">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 text-right">
                    <div className="bg-white p-5 rounded-lg shadow-md">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <FileText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Strategic roadmap development</span>
                        </li>
                        <li className="flex items-start">
                          <FileText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Implementation planning</span>
                        </li>
                        <li className="flex items-start">
                          <FileText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">ROI analysis and projection</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-center items-center">
                    <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xl">2</div>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Strategic Planning</h3>
                    <p className="text-gray-600">
                      Development of a tailored technology strategy aligned with your investment operations and growth objectives.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative z-10 mb-12">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 text-right">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Implementation</h3>
                    <p className="text-gray-600">
                      Structured execution that prioritizes critical components while minimizing disruption to your investment operations.
                    </p>
                  </div>
                  <div className="hidden md:flex justify-center items-center">
                    <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xl">3</div>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-white p-5 rounded-lg shadow-md">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <FileText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Phased deployment approach</span>
                        </li>
                        <li className="flex items-start">
                          <FileText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Trading-hour aware scheduling</span>
                        </li>
                        <li className="flex items-start">
                          <FileText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Change management with minimal disruption</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative z-10">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 text-right">
                    <div className="bg-white p-5 rounded-lg shadow-md">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <FileText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Ongoing optimization and refinement</span>
                        </li>
                        <li className="flex items-start">
                          <FileText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Quarterly strategic reviews</span>
                        </li>
                        <li className="flex items-start">
                          <FileText className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">ROI measurement and reporting</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-center items-center">
                    <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xl">4</div>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Continuous Optimization</h3>
                    <p className="text-gray-600">
                      Ongoing refinement and improvement to ensure maximum value and adaptation to your evolving requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Ready to Transform Your Technology?</h2>
            <p className="text-xl mb-8 text-center">
              Choose the path that works best for your firm:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-white p-3 rounded-full">
                    <Calendar className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Schedule a Consultation</h3>
                <p className="mb-6 text-white text-opacity-90">
                  Speak directly with our experts about your specific technology challenges.
                </p>
                <ScheduleButton 
                  text="Schedule Now" 
                  variant="primary" 
                  className="w-full"
                />
              </div>
              
              <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-white p-3 rounded-full">
                    <Target className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Take an Assessment</h3>
                <p className="mb-6 text-white text-opacity-90">
                  Get personalized recommendations through our quick, focused assessments.
                </p>
                <Link 
                  to="/assessments"
                  className="inline-block w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  Go to Assessment Hub
                </Link>
              </div>
              
              <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-white p-3 rounded-full">
                    <FileText className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Download Resources</h3>
                <p className="mb-6 text-white text-opacity-90">
                  Access our capabilities overview and service guides for more details.
                </p>
                <button 
                  className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  Download Materials
                </button>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-white text-opacity-90 mb-4">
                Want to speak with us directly? Call our team:
              </p>
              <a 
                href="tel:+16314004299" 
                className="text-2xl font-bold hover:text-blue-200 transition-colors"
              >
                (631) 400-4299
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServicesPage;