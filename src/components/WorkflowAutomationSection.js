import React from 'react';
import { 
  Clock, 
  CheckSquare, 
  TrendingUp, 
  BarChart4, 
  Users, 
  FileText, 
  ArrowUpRight, 
  Activity,
  List 
} from 'lucide-react';

const WorkflowAutomationSection = () => {
  const workflowAreas = [
    {
      title: "Investor Onboarding & Reporting",
      description: "Streamline investor communications, capital calls, and reporting processes to enhance relationships while reducing manual effort.",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      metrics: [
        { value: "70%", label: "Reduction in manual reporting effort" },
        { value: "90%", label: "Decrease in processing errors" }
      ]
    },
    {
      title: "Deal Flow Management",
      description: "Accelerate deal evaluation, document collection, and approval workflows to capitalize on more opportunities with the same team.",
      icon: <BarChart4 className="w-8 h-8 text-blue-600" />,
      metrics: [
        { value: "40%", label: "Faster deal cycle time" },
        { value: "3x", label: "More deals evaluated" }
      ]
    },
    {
      title: "Portfolio Monitoring",
      description: "Automate data collection, performance calculations, and exception alerts to maintain closer oversight of portfolio companies.",
      icon: <Activity className="w-8 h-8 text-blue-600" />,
      metrics: [
        { value: "Real-time", label: "Performance visibility" },
        { value: "4x", label: "More portfolio companies per analyst" }
      ]
    },
    {
      title: "Regulatory Filing Preparation",
      description: "Simplify compliance with automated data gathering, form population, and validation to ensure accuracy and timeliness.",
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      metrics: [
        { value: "85%", label: "Reduction in filing preparation time" },
        { value: "100%", label: "Regulatory deadline compliance" }
      ]
    }
  ];

  const implementationKeys = [
    {
      title: "Process Analysis First",
      description: "We begin with analyzing your current workflows before selecting technology to ensure we address actual inefficiencies.",
      icon: <List className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Prioritize High-Volume Processes",
      description: "We focus first on rules-based, repetitive tasks that deliver immediate ROI before tackling complex workflows.",
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Exception Handling Design",
      description: "We build robust exception handling procedures to ensure business continuity when unusual scenarios arise.",
      icon: <Clock className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Stakeholder Experience",
      description: "We consider both internal and external user experiences to ensure adoption and satisfaction.",
      icon: <Users className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Operational Workflow Automation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your investment operations with intelligent automation that enhances efficiency, 
            reduces errors, and scales your capabilities without adding headcount.
          </p>
        </div>
        
        {/* Core Workflow Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {workflowAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-3">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{area.title}</h3>
                </div>
                
                <p className="text-gray-700 mb-6">{area.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {area.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Implementation Approach */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Our Implementation Approach</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {implementationKeys.map((key, index) => (
                <div key={index} className="bg-blue-50 p-5 rounded-xl">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      {key.icon}
                    </div>
                    <h4 className="font-semibold">{key.title}</h4>
                  </div>
                  <p className="text-sm text-gray-700">{key.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Common Challenges */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-md overflow-hidden">
          <div className="p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Overcoming Common Challenges</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-10 p-5 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-3">Data Fragmentation</h4>
                <p className="text-sm mb-3">
                  Investment firms often struggle with data scattered across multiple systems, creating integration barriers.
                </p>
                <div className="flex items-start">
                  <CheckSquare className="w-5 h-5 text-green-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Our solution includes data normalization and middleware to create a unified information foundation.</span>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 p-5 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-3">Legacy Process Documentation</h4>
                <p className="text-sm mb-3">
                  Manual processes often lack standardization, making automation design challenging.
                </p>
                <div className="flex items-start">
                  <CheckSquare className="w-5 h-5 text-green-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">We begin with process mapping and optimization before automating, ensuring a strong foundation.</span>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 p-5 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-3">Flexibility vs. Standardization</h4>
                <p className="text-sm mb-3">
                  Boutique firms need both customization for clients and standardization for efficiency.
                </p>
                <div className="flex items-start">
                  <CheckSquare className="w-5 h-5 text-green-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Our approach balances consistent core processes with configurable elements for unique requirements.</span>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 p-5 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-3">User Adoption</h4>
                <p className="text-sm mb-3">
                  Teams accustomed to high-touch manual processes may resist automation adoption.
                </p>
                <div className="flex items-start">
                  <CheckSquare className="w-5 h-5 text-green-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Our change management methodology ensures user buy-in through training, champions, and demonstrated value.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors inline-flex items-center">
            Schedule a Workflow Assessment
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkflowAutomationSection;